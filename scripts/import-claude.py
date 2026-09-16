import pathlib,zipfile,json,hashlib,re,shutil
import argparse,tempfile,datetime
parser=argparse.ArgumentParser(description="Import a Claude Design archive")
parser.add_argument("archive", type=pathlib.Path)
args=parser.parse_args()
root=pathlib.Path(__file__).resolve().parents[1]
workspace=tempfile.TemporaryDirectory(prefix="iak-import-")
source=pathlib.Path(workspace.name)
with zipfile.ZipFile(args.archive) as archive:
 for item in archive.infolist():
  rel=pathlib.PurePosixPath(item.filename)
  if rel.is_absolute() or ".." in rel.parts: raise ValueError("Unsafe archive path")
  if item.is_dir(): continue
  target=source/rel;target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(archive.read(item))
if not (source/"colors_and_type.css").exists() or not (source/"_ds_manifest.json").exists(): raise ValueError("Not a design-system archive")
dest=root/"src/library/claude"
if dest.exists(): shutil.rmtree(dest)
dest.mkdir(parents=True)
allowed={'README.md','SKILL.md','colors_and_type.css','_ds_bundle.js','_ds_manifest.json','index.html','docs.html','design-system-reference-print.html'}
files=[]
for p in source.rglob('*'):
 if not p.is_file():continue
 rel=p.relative_to(source)
 if rel.parts[0] not in {'assets','docs','exports','fonts','preview','tokens','ui_kits'} and str(rel) not in allowed:continue
 q=dest/rel;q.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(p,q)
 files.append({'path':str(rel),'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
manifest=json.loads((source/'_ds_manifest.json').read_text())
css=re.sub(r'/\*.*?\*/','',(source/'colors_and_type.css').read_text(),flags=re.S)
# Preserve media contexts: exported manifest incorrectly flattens media overrides.
stack=[];start=0;defaults={};overrides=[]
for match in re.finditer(r'[{}]',css):
 chunk=css[start:match.start()].strip();start=match.end()
 if match[0]=='{':stack.append(chunk)
 else:
  if stack and stack[-1]==':root':
   values=dict(re.findall(r'(--[\w-]+)\s*:\s*([^;]+);',chunk));values={k:v.strip() for k,v in values.items()}
   media=[s for s in stack[:-1] if s.startswith('@media')]
   if media: overrides.append({'condition':' / '.join(media),'tokens':values})
   else: defaults.update(values)
  if stack:stack.pop()
icons=sorted(set(re.findall(r'(?:eva|solar):[a-z0-9-]+','\n'.join(p.read_text() for p in source.rglob('*') if p.suffix in ['.html','.jsx','.md'] and p.name!='IAK Sales Portfolio.html'))))
catalog={'name':'IAK Design Studio','sourceName':'RAIS Design System','sourceUrl':'https://claude.ai/design/p/019e07b0-88a3-7227-a822-3023b9cdee84','importedAt':datetime.date.today().isoformat(),'archiveSha256':hashlib.sha256(args.archive.read_bytes()).hexdigest(),'files':files,'cards':manifest['cards'],'tokens':defaults,'contextOverrides':overrides,'fonts':manifest['fonts'],'icons':icons,'limits':['JetBrains Mono 원본 폰트 없음: 시스템 monospace fallback 사용.','아이콘은 Eva/Solar 이름 참조이며 SVG 원본은 ZIP에 없음. 기존 미리보기는 Iconify CDN 사용.','원본 README 및 미리보기 설명에 이전 폰트/포커스 규칙이 남아 있음. 적용 시 최신 CSS와 정리 문서 우선.','UI 킷은 디자인 프로토타입이며 실제 결제·로그인·CRM 서버가 연결된 제품이 아님.','uploads 중복 자료와 영업 포트폴리오 단독 HTML은 공개 디자인 패키지에서 제외. 전체 원본은 로컬 보관.']}
(root/'src/library/catalog.json').write_text(json.dumps(catalog,ensure_ascii=False,indent=2)+'\n')
print(len(files),'files',len(defaults),'tokens',len(icons),'icon references',len(manifest['cards']),'cards')

for card in catalog['cards']:
 if card['path']=='preview/type-display.html': card['subtitle']='Pretendard 64/80 (current CSS)'
 if card['path']=='preview/type-specimens.html': card['subtitle']='Pretendard UI / display / section'
(root/'src/library/catalog.json').write_text(json.dumps(catalog,ensure_ascii=False,indent=2)+'\n')
with zipfile.ZipFile(root/'src/library/iak-design-assets.zip','w',zipfile.ZIP_DEFLATED) as archive:
 for p in dest.rglob('*'):
  if p.is_file(): archive.write(p,'claude/'+str(p.relative_to(dest)))
 for name in ['catalog.json','guide.md','Pretendard-LICENSE.txt']:
  p=root/'src/library'/name
  if p.exists(): archive.write(p,name)
workspace.cleanup()
