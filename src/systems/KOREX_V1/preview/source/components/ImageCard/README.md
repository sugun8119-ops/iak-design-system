# ImageCard

링크 없는 설명용 이미지: 4:3 미디어 + 캡션(meta, `textSecondary`), 세로 gap 16. `figure`/`figcaption`로 렌더.

- **변형**: Default. `tall`로 3:4 세로 구도(상세 페이지 대표 이미지) 사용 가능, 모바일에서는 4:3을 권장.
- **제공할 것**: `caption`, `media` 톤, `mediaLabel`(대체 텍스트).
- 자연 소재·공간·제품 사진을 제품 형태가 잘 읽히는 구도로 사용한다. 자리표시자 도형은 사용권 있는 사진으로 교체한다.
- **derived-extension 상태**: `imageMissing` — 비율(4:3 / 3:4) 유지 점선 틀 + 이미지 없음 아이콘 + “이미지 준비 중”, 대체 텍스트 “이미지 없음”.
