# KOSAF_V1 마이그레이션 결과 — 2026-09-25

상태: **요청한 세 관리 섹션의 전수 조사와 안전한 토큰·스타일 마이그레이션 완료, 보존 예외 있음.**
전체 샘플이 컴포넌트 인스턴스로 바뀌었거나 모든 색상이 semantic token으로 정리되었다는 뜻은 아니다.

## 기준과 범위

- Source of Truth: [최종 수정본 1:85779](https://www.figma.com/design/MOEAkEbXtwHdE3xveg2Gto/?node-id=1-85779), 하위 21,768개 노드 조사. 원본은 수정하지 않았다.
- 관리 대상: [Common_최종 양식](https://www.figma.com/design/SZ7AweGiHxzEDmEmuNi3LY/?node-id=1-69548), [Common_진행중](https://www.figma.com/design/SZ7AweGiHxzEDmEmuNi3LY/?node-id=1-69947), [Interaction](https://www.figma.com/design/SZ7AweGiHxzEDmEmuNi3LY/?node-id=1-70749).
- 원래 하위 노드 398 + 808 + 15,581 = **16,787개**를 조사했다. 루트 자체는 이 수에 포함하지 않는다.
- 수정된 고유 노드 **5,115개**, 생성된 노드 **54개**(인스턴스 하위 노드 포함), 삭제된 기존 노드 **0개**.
- 전체 변경 ID, 교체 전후 ID 및 단계별 결과: [migration-changes.json](migration-changes.json).
- Main/Data Reference 1:107843, 213:712는 이번 수정 범위 밖으로 보존했다.
- IAK GameofMind의 외형·컴포넌트는 가져오지 않았다.

## 실제 변경

| 영역 | 반영 내용 |
|---|---|
| Foundations | 기존 65개 변수를 유지하고 16개 추가. 3개 컬렉션, 81개 변수. 서체, 1920/390/391 폭, 컨트롤·테이블 높이, 비활성 및 Danger Hover 토큰을 추가 |
| Typography | Common의 Poppins/Roboto 등을 Noto Sans KR로 전환. 기본 9개 스타일 유지. 최종본에서 실제 쓰이는 60개 서체 조합을 KOSAF/Source로 등록하고 출처 노드를 스타일 설명에 기록 |
| Typography 가이드 | Desktop Headlines와 본문 표본을 기본 9개 스타일에 연결하고 크기·행간 설명을 수정. Roboto 영문 안내를 Noto Sans KR로 수정 |
| Button Status | 8개 샘플을 실제 KOSAF/Button 인스턴스로 전환. Primary/Secondary Focus 변형 추가, Focus #0047ED. 기존 Click 행을 Focus 설명으로 갱신 |
| Button 샘플 | Common_진행중의 17개 btn-* 샘플을 KOSAF/Button 인스턴스로 전환. 40px 일반 샘플은 42px로 정리, 34/45/50px 유지. Label 속성 연결 |
| Tab / Mobile·PC / Table / Pagination / Input / Toggle / Spinner | 기존 도형·문구·구조를 유지하면서 일치하는 색상·반경·서체를 토큰/스타일로 연결. 이 항목들을 전부 새로운 컴포넌트로 교체하지는 않음 |
| Interaction | 일반 UI 텍스트의 Noto Sans KR 및 semantic 색상 연결. 1920px 화면 21개와 391px 화면 1개 유지·폭 변수 연결 |
| Core Components | 페이지 최상위에 흩어져 있던 Search, Badge, Modal, Stepper를 218:570 내부로 이동. Button 변형 배치 넘침 수정. Input/Search/TableRow 및 버튼 높이 변수 연결 |
| Legacy | 색상표 1:69603, 1:69659에 Legacy 표시. 교체된 버튼의 기존 도형·텍스트/그룹 33개를 삭제하지 않고 숨김·Legacy 표시 |

Primary #059B00, Hover #02AC5A, Positive #17BF56, Text #333333/#707070/#888888, Border #DDDDDD, Focus #0047ED는 유지했다.

## 최종 QA

| 영역 | 현재 하위 노드 | 텍스트 | 서체 관리 연결 | 스타일 연결 텍스트 | 미분류 단색 노드 |
|---|---:|---:|---:|---:|---:|
| Common_최종 양식 | 414 | 184 | 184 | 98 | 25 |
| Common_진행중 | 842 | 299 | 299 | 273 | 40 |
| Interaction | 15,581 | 2,395 | 2,355 | 1,976 | 767 |
| KOSAF_V1 / Core Components | 82 | 35 | 35 | 35 | 0 |

서체 관리 연결은 직접 font-family 변수 또는 텍스트 스타일 연결을 포함한다. 스타일 연결 수는 적어도 한 텍스트 구간에 스타일이 연결된 노드 수이며, 모든 구간의 완전한 스타일화를 의미하지 않는다.

- 끊어진 변수 alias 0, ALL_SCOPES 변수 0, 중복 변수 이름 0, 중복 스타일 이름 0.
- Core Components의 검사 대상 단색 채우기·테두리 미연결 0.
- Interaction 기존 닫기 반응 6개 유지. 런타임 키보드·스크린리더·모든 프로토타입 동작을 테스트한 것은 아니다.
- Button Status, Typography, Core Components, 데스크톱 가격정보 화면, 모바일 상품상세, Pagination, Toggle, Spinner 화면을 렌더링해 검토했다.
- Core Components의 버튼 변형 넘침을 수정한 뒤 다시 렌더링했다.
- 판매정보_02 1:69878은 렌더러에서 1×1 이미지를 반환해 시각 검증 완료로 처리하지 않았다.
- [최종 기계 판독 QA 및 예외 노드 목록](migration-qa.json).

## 보존 및 남은 갭

1. **미분류 색상 노드 832개:** Common 최종 25, Common 진행중 40, Interaction 767. 기존 팔레트와 숨긴 Legacy, VECTOR/BOOLEAN_OPERATION/GROUP/INSTANCE 컨테이너는 이 수에서 제외한다. 노드별 역할을 확정하지 않은 원본 색상은 임의로 녹색·회색으로 덮지 않았다. rawPaintNodes와 rawColors에 ID/색상 분포를 기록했다. 이 항목의 semantic 역할 분류는 후속 작업으로 남는다.
2. **브랜드 텍스트 40개 보존:** S-Core Dream 34개, Poppins 6개. S-Core Dream은 현재 도구에 서체가 없어 34개가 missing font로 표시된다. 로고를 다른 글꼴로 치환하지 않았다. 일반 UI 텍스트는 Noto Sans KR로 관리한다.
3. **기존 그림·사진·아이콘·데이터 색상 보존:** 벡터 삽화는 일괄 재색상하지 않았다. 기존 화면의 상대 위치, 문구, 데이터, 6개 닫기 동작을 유지했다.
4. **컴포넌트화 범위:** Button 25개 샘플만 인스턴스로 교체했다. 나머지 기존 샘플은 토큰/스타일 연결 방식이다. Toggle는 기간 선택 버튼 샘플, Spinner는 수량 입력 인스턴스이며 신규 KOSAF/Toggle·Spinner family를 만들지 않았다.
5. **상태/프로토타입:** Primary/Secondary Focus는 추가했으나 Danger Focus, Pressed, Input Success, 전체 키보드/토글 상호작용은 구현되지 않았다. 현재 컴포넌트 상태는 figma-system.json의 componentStates를 기준으로 한다.
6. **원본 규격과 접근성:** 23px Pagination·30px Spinner·20px 선택 컨트롤 등 원본의 작은 시각 요소는 보존했다. 별도의 넓은 터치 영역이 보장되지는 않는다. 흰 글자와 Primary/Hover의 대비도 아래 수치를 참고해야 한다. 이번 작업은 접근성 적합 판정이 아니다.
7. **반응형:** 1920/390/391 변수와 기존 1920/391 화면을 관리했다. 세 관리 섹션 안에는 기존 390px 전체 화면이 없어서 새 화면을 복제하지 않았다. 모든 화면의 반응형 재배치는 수행하지 않았다.
8. **기존 선언과 실재 자산 구분:** Dropdown, Calendar, Header, Footer, ProductCard, SmallDataCard는 독립 KOSAF 컴포넌트로 존재하지 않아 plannedComponents로 분리했다. patterns는 화면 레퍼런스이며 별도 완성 컴포넌트로 표기하지 않는다.

## 유지보수

- 신규 화면에는 기본 Typography 9개를 우선 사용한다.
- 기존 화면의 크기·행간 보존에는 출처가 기록된 KOSAF/Source 스타일을 사용한다.
- font-family 변수는 스타일 자체에 연결한다. 직접 서체 오버라이드로 스타일 연결을 불필요하게 해제하지 않는다.
- 숨긴 Legacy 샘플을 삭제하거나 외부 main component를 수정하려면 별도의 영향 범위 검토가 필요하다.
- [실제 Figma 변수·스타일·컴포넌트 목록](figma-inventory.json), [소스 매핑](source-map.json).

흰 글자 대비(계산값): Primary 3.69:1, Hover 2.98:1, Positive 2.44:1.
