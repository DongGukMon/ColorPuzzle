# TabSky
react native 상태관리와 다크모드 공부를 위한 color puzzle game입니다.
특정 패턴으로 움직이는 5개의 페이지를 모두 같은 색깔(테마에 따라 하늘색 or 보라색(?))로 맞추면 되는 규칙이며, A,B,C 세가지 패턴이 있습니다.

## 적용 기술
- react native cli
- typescript
- recoil
- styled-component
- firebase realtime database

## 구현 내용
- 스마트폰 테마에 따라 자동으로 전환되는 Light mode와 Dark mode
- 홈에서 현재 랭킹 확인 가능
- home 바탕화면 색상 애니메이션
- 패턴 설정 horizontal carousel 구현
- 닉네임을 등록한 상태로 게임을 클리어하면 자동으로 서버 랭킹에 참여 (각 패턴별 99위까지 기록)
- 게임 클리어시 소요시간과 함께 클리어 모달 노출(다시하기, 홈으로 돌아가기 버튼 선택 가능)
- 60분 이내에 클리어를 실패할 경우 실패 모달 노출(다시하기, 홈으로 돌아가기 버튼 선택 가능)
