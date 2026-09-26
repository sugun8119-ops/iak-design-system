// Source/state checks only. This does not mount React or validate browser rendering.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const manifest = JSON.parse(read('_ds_manifest.json'));
for (const row of [...manifest.cards, ...manifest.components, ...(manifest.templates || [])]) {
  const p = row.path || row.sourcePath;
  if (p) assert.ok(fs.existsSync(path.join(root, p)), 'Missing registered file: ' + p);
}
assert.equal(crypto.createHash('sha256').update(read('zem/lib/iak-kids-tokens.css')).digest('hex'),
  '1bc036af78fec73539e7f46ad4c44ce2e6167857987100d36594f4aa498f0f55');
new vm.Script(read('zem/lib/zem-patterns.js'));
new vm.Script(read('_ds_bundle.js'));
class DCLogic {
  constructor(props) { this.props = props; }
  setState(change) { this.state = {...this.state, ...(typeof change === 'function' ? change(this.state) : change)}; }
}
const classes = {};
let stateCount = 0;
for (const [name, dir, file] of [
  ['parent', 'parent-dashboard', 'ParentDashboard'],
  ['week', 'weekly-schedule', 'WeeklySchedule'],
  ['activity', 'kid-activity', 'KidActivity']
]) {
  const html = read(`templates/${dir}/${file}.dc.html`);
  const source = html.match(/<script type="text\/x-dc"[^>]*>([\s\S]*?)<\/script>/)[1];
  const props = JSON.parse(html.match(/data-props="([^"]+)"/)[1].replace(/&quot;/g, '"'));
  const Component = vm.runInNewContext(source + '\nComponent', {
    DCLogic, URLSearchParams, location: {search: ''},
    setTimeout: () => 1, clearTimeout: () => {}, Date
  });
  classes[name] = Component;
  for (const state of props.state.options) {
    const c = new Component({state});
    const values = c.renderVals();
    assert.equal(values.state, state);
    assert.ok(values && typeof values === 'object');
    stateCount++;
  }
}
const p = new classes.parent({state: 'default'});
p.renderVals().pickKid('doyun');
assert.equal(p.renderVals().kid.badge, '목표 초과');
p.renderVals().requests[0].accept();
assert.equal(p.state.requests.length, 2);
const otherCount = p.state.kids[0].goals.length;
const selectedCount = p.state.kids[1].goals.length;
p.submitGoal({title: '책 읽기', repeat: 'daily', points: 20, kid: 'doyun'});
assert.equal(p.state.kids[0].goals.length, otherCount);
assert.equal(p.state.kids[1].goals.length, selectedCount + 1);
const w = new classes.week({state: 'default'});
const oldCount = w.state.items.length;
w.save();
assert.ok(w.state.err);
assert.equal(w.state.items.length, oldCount);
w.setState({name: '가'.repeat(41)}); w.save();
assert.equal(w.state.items.length, oldCount);
w.setState({name: '책 읽기', form: {...w.state.form, d: '4'}}); w.save();
assert.equal(w.state.items.length, oldCount + 1);
assert.equal(w.state.day, 4);
const a = new classes.activity({state: 'default'});
const finishFirst = a.renderVals().finishCurrent;
finishFirst(); finishFirst();
assert.equal(a.renderVals().doneIds.length, 2);
assert.equal(a.renderVals().sub, '오늘 모은 포인트 150P');
a.renderVals().onMissions({completedIds: [1]});
assert.equal(a.renderVals().sub, '오늘 모은 포인트 50P');
a.renderVals().finishCurrent();
assert.equal(a.renderVals().sub, '오늘 모은 포인트 150P');
console.log(JSON.stringify({passed: true, states: stateCount,
  scenarios: ['child switch', 'request approval', 'goal assigned only to selected child',
    'empty/long schedule validation', 'schedule creation and day selection',
    'duplicate completion', 'undo and recompletion'],
  cards: manifest.cards.length, components: manifest.components.length,
  paletteUnchanged: true, browserValidated: false}, null, 2));
