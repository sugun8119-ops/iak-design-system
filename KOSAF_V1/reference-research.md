# KOSAF 디자인 레퍼런스 수집

수집일: 2026-09-26 · 10개 레퍼런스 · Mobbin 6 / Refero Styles 2 / Land-book 2

최종 수정본 Figma 1:85779를 기준으로 개선할 때 참고할 자료다. 공개 가이드·캡처에서 확인한 내용과 KOSAF 적용 제안을 구분했다. 이번 작업은 자료 수집이며 실제 디자인 변경은 적용하지 않았다.

## 적용 우선순위

1. 회원가입: 라벨 열, 도움말, 인라인 오류, 필수값 안내 정돈 (01·04).
2. 검색/거래 표: 숫자 정렬, 선택 상태, 필터 요약, 결과 없음 처리 (02·03·06·08).
3. 모바일 검색: 필터 편집과 목록 복귀 흐름 (05·07).
4. 화면 상단: 제목 → 설명 → 주요 행동 순서와 섹션 간격 통일 (09·10).

## 유지할 KOSAF 규칙

Primary #059B00, Hover #02AC5A, Positive #17BF56, Text #333333/#707070/#888888, Border #DDDDDD, Focus #0047ED. Noto Sans KR 400/500/700, 기존 9개 canonical 타이포 스타일, Desktop 1920 / Mobile 390–391, section 20/30/50. 원본 마스터 치수와 보존 예외는 유지한다. 제안은 변경 전 실제 화면별로 검증한다.

## 01 · 폼 정렬·오류

[Mobbin · Text Field](https://mobbin.com/glossary/text-field)

- 확인한 내용: 라벨·입력 예시·도움말·인라인 오류를 분리한 사례. 공개 예시에서 DoorDash·Coinbase·Gemini의 필드 오류 표시를 확인했다.
- 적용 대상: Input / FormField / 판매자 회원가입
- KOSAF 제안: 라벨을 항상 노출하고, 오류는 해당 입력 바로 아래에 배치한다. PC 라벨 열과 입력 열을 맞추고 모바일은 세로로 쌓는다.
- 유지/제외: Input 45px, radius 5, Noto Sans KR과 기존 error token 유지.
- 근거 범위: 공개 가이드 + 브라우저 시각 확인

## 02 · 표·숫자 정렬

[Mobbin · Table](https://mobbin.com/glossary/table)

- 확인한 내용: 정렬·필터·페이지 이동을 포함하는 표 패턴과 모바일의 폭 제약을 설명한다. 비교용 표와 일반 목록의 용도도 구분한다.
- 적용 대상: ProductTable / TableRow / 거래내역
- KOSAF 제안: 상품명은 왼쪽, 수량·가격은 오른쪽으로 정렬한다. 모바일은 핵심 정보 목록을 먼저 보여주고 상세 비교 표만 독립 스크롤한다.
- 유지/제외: PC 70px / Mobile 50px 행 리듬과 기존 데이터 항목 보존.
- 근거 범위: 공개 가이드 확인

## 03 · 빈 검색 결과

[Mobbin · Airbnb Empty State](https://mobbin.com/glossary/empty-state)

- 확인한 내용: Airbnb 사례는 조건에 맞는 결과가 없다는 설명과 필터 해제 행동을 함께 제공한다.
- 적용 대상: 검색 결과 / EmptyState
- KOSAF 제안: 검색 결과 없음·장바구니 비어 있음·거래내역 없음의 문구와 행동을 구분한다. 검색에는 필터 초기화 버튼을 제공한다.
- 유지/제외: 일러스트를 새로 추가하기보다 기존 KOSAF 아이콘과 문구를 사용.
- 근거 범위: 공개 가이드의 명시된 제품 사례 확인

## 04 · 오류·복구 상태

[Mobbin · Error Message](https://mobbin.com/glossary/error-message)

- 확인한 내용: 입력 문맥 가까이 오류를 표시하고 해결 방법을 안내한다. 로그인 복구 선택지를 담은 Netflix 사례도 제시한다.
- 적용 대상: 로그인 / FileUpload / 오류 상태
- KOSAF 제안: 필수값·형식 오류는 필드 아래, 제출 실패는 폼 상단에 안내한다. 재시도·비밀번호 재설정 등 해결 행동을 분명히 한다.
- 유지/제외: 색상뿐 아니라 오류 문구를 함께 사용. 오류별 실제 동작은 별도 구현·검증 필요.
- 근거 범위: 공개 가이드 확인

## 05 · 모바일 필터 동선

[Mobbin · Bottom Sheet](https://mobbin.com/glossary/bottom-sheet)

- 확인한 내용: 기존 목록 위에서 필터·정렬을 고르는 하단 패널 패턴과 닫기 방식, 복잡한 작업에는 부적합한 경우를 설명한다.
- 적용 대상: Mobile FilterPanel / 정렬 선택
- KOSAF 제안: 필터 버튼 → 조건 편집 → 적용 → 목록 복귀 흐름을 구성한다. 적용 전 임시값과 적용된 조건을 구분하고 닫기 버튼을 제공한다.
- 유지/제외: 390–391px 기준. 긴 가입폼·결제 전체를 하단 패널에 넣지 않는다. 신규 패턴 제안이며 아직 미적용.
- 근거 범위: 공개 가이드 확인

## 06 · 선택된 조건 표시

[Mobbin · Chip](https://mobbin.com/glossary/chip)

- 확인한 내용: 선택·필터·입력값을 표현하는 작은 컨트롤의 사례를 제공한다.
- 적용 대상: FilterChip / 검색 조건 요약
- KOSAF 제안: 선택한 품목·거래방식·지역을 제거 가능한 칩으로 요약하고 전체 초기화를 별도 제공한다. 선택과 비활성을 구분한다.
- 유지/제외: 기존 KOSAF 녹색·연녹색 semantic token 사용.
- 근거 범위: 공개 가이드 확인

## 07 · 도매 검색·상품 탐색

[Refero Styles · Faire ES](https://styles.refero.design/style/6fb648be-cc69-4a84-a798-9f0f006922a0)

- 확인한 내용: 제공된 Faire 캡처에서 상단 검색, 카테고리 메뉴, 주 행동과 보조 링크, 상품·브랜드 탐색 구성을 확인했다.
- 적용 대상: Header / Search / ProductCard / 카테고리
- KOSAF 제안: 검색의 시각적 우선순위를 높이고, 카테고리와 개별 필터 역할을 분리한다. 상품 이미지·상품명·거래 정보의 읽는 순서를 통일한다.
- 유지/제외: Faire의 크림 배경·세리프·검정 CTA를 가져오지 않고 KOSAF 흰색·녹색·Noto Sans KR로 변환.
- 근거 범위: Refero 제공 캡처 시각 확인; 해설·토큰은 Refero의 해석이며 공식 Faire 디자인 시스템 아님

## 08 · 밀도·상태 구분

[Refero Styles · Index](https://styles.refero.design/style/b136f0a0-8064-4978-a18e-db54b9362c24)

- 확인한 내용: Refero 해설은 밀도 높은 데이터 UI의 숫자 정렬, 기능별 상태 색, 선을 통한 표면 구분을 다룬다.
- 적용 대상: 거래내역 / MetricCard / Badge
- KOSAF 제안: 숫자는 고정폭 숫자 기능을 사용하고, 상태는 짧은 문구와 배지로 표현한다. 항목 내부보다 섹션 사이에 여백을 배분한다.
- 유지/제외: 다크 테마·보라색·그라디언트·큰 pill 반경 제외. KOSAF 행 높이와 상태 token 유지.
- 근거 범위: Refero 해설 확인; 실제 Index 앱을 직접 조작하거나 치수를 실측하지 않음

## 09 · 좌측 제목·여백

[Land-book · Hunar.ai](https://land-book.com/websites/99034-ai-hrs-for-frontline-workforce-management-hunar-ai)

- 확인한 내용: 공개 데스크톱·모바일 상단 미리보기에서 왼쪽 정렬 제목 → 짧은 설명 → CTA의 순서와 각 그룹 사이 여백을 확인했다. Land-book 표기 Verified Sep 22.
- 적용 대상: 마이페이지 / 판매자 마이샵 / 섹션 헤더
- KOSAF 제안: 업무 화면 상단은 제목·설명·행동으로 읽는 순서를 통일한다. 긴 설명을 줄이고 제목과 본문 사이 구분을 명확히 한다.
- 유지/제외: 마케팅 페이지의 큰 빈 공간을 그대로 옮기지 않고 기존 20/30/50 간격과 9개 타이포 스타일에 맞춘다.
- 근거 범위: Land-book 공개 미리보기 시각 확인; 세부 pixel 값 미측정

## 10 · 안내 화면 위계

[Land-book · Calendly](https://land-book.com/websites/99527-meeting-scheduling-software-and-ai-meeting-tools-calendly)

- 확인한 내용: 공개 상단 미리보기에서 가운데 정렬 제목·설명·가입 행동·제품 미리보기의 순서를 확인했다. Land-book 표기 Verified Sep 8.
- 적용 대상: 가입 안내 / 주문 완료 / 서비스 소개
- KOSAF 제안: 안내·완료 화면에 한 개의 핵심 메시지를 먼저 두고 설명과 다음 행동을 묶는다. 업무용 표 화면에는 좌측 정렬을 유지한다.
- 유지/제외: 파란색·그라디언트와 대형 영문 제목을 이식하지 않고 기존 KOSAF 스타일로 재구성.
- 근거 범위: Land-book 공개 미리보기 시각 확인; 전체 모바일 화면은 검토하지 않음

## 확인 범위

로그인 이후의 유료 전체 화면·동선은 수집하지 않았다. Mobbin은 공개 패턴 가이드와 공개 사례, Refero는 공개 Styles 해설과 제공 캡처, Land-book은 공개 상단 미리보기를 확인했다. Refero Styles의 수치와 구성은 정규화·해석·재구성된 자료이며 원 서비스의 공식 디자인 시스템으로 취급하지 않는다. 최신 갤러리 등록/검증 날짜와 원 서비스 출시 날짜는 다르다.
