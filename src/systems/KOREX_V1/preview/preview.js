// Local demonstration only; no network, storage or router.
const params = new URLSearchParams(location.search);
const input = document.querySelector('#q');
const category = document.querySelector('#category');
const cards = [...document.querySelectorAll('[data-product]')];
if (input) input.value = params.get('q') || '';
if (category) {
  const filter = () => {
    const query = input.value.trim().toLocaleLowerCase();
    let count = 0;
    cards.forEach(card => {
      const match = (card.dataset.name + ' ' + card.dataset.material).toLocaleLowerCase().includes(query)
        && (category.value === 'all' || card.dataset.category === category.value);
      card.hidden = !match;
      if (match) count++;
    });
    document.querySelector('#result-count').textContent = count + '개 예시 제품';
    document.querySelector('#empty').hidden = count !== 0;
  };
  document.querySelector('form').addEventListener('submit', event => { event.preventDefault(); filter(); });
  input.addEventListener('input', filter);
  category.addEventListener('change', filter);
  document.querySelector('#reset').addEventListener('click', () => { input.value = ''; category.value = 'all'; filter(); input.focus(); });
  filter();
}
const title = document.querySelector('#product-title');
if (title) {
  const records = [['모듈 체어','SEATING','우드'],['라운드 테이블','TABLES','스톤'],['소프트 램프','LIGHTING','패브릭']];
  const key = params.get('item');
  const item = records[/^[0-2]$/.test(key || '') ? Number(key) : 0];
  title.textContent = item[0];
  document.querySelector('#product-category').textContent = item[1];
  document.querySelector('#product-material').textContent = item[2];
}
