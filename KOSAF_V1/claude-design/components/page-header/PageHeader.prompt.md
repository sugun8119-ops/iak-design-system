Page title block (제목 → 설명 → 행동) for every KOSAF screen — left for work screens, center for completion screens.

```jsx
<PageHeader title="통합검색" description="‘사과’ 검색 결과입니다." />
<PageHeader size={30} title="마이페이지 홈" description="여신 한도와 주문 현황" actions={<Button variant="secondary" size={42}>회원정보 수정</Button>} />
<PageHeader align="center" title="농산물 온라인거래소 심사신청이 완료되었습니다." actions={<Button size={45} width={127}>메인으로</Button>} />
<PageHeader device="mobile" title="판매자 회원가입" description="기본정보와 심사서류를 입력하세요." />
```

- KOSAF extension. Sizes: PC 40 (30 inside SideNav), mobile 22; description 18/28 (mobile 14/20) #707070.
- Do not enlarge into marketing hero scale; no serif, gradient or dark fills.
- Long Korean titles wrap with `keep-all` + `overflow-wrap:anywhere`.
