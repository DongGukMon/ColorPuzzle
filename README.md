# TabSky
react native 상태관리와 다크모드 공부를 위한 color puzzle game입니다.
특정 패턴으로 움직이는 5개의 페이지를 모두 같은 색깔(테마에 따라 하늘색 or 보라색(?))로 맞추면 되는 규칙이며, A,B,C 세가지 패턴이 있습니다.

## 적용 기술
- react native cli
- typescript
- recoil
- styled-component
- firebase realtime database
- codepush

## 구현 내용
- 스마트폰 테마에 따라 자동으로 전환되는 Light mode와 Dark mode
- 홈에서 현재 랭킹 확인 가능
- home 바탕화면 색상 애니메이션
- 패턴 설정 horizontal carousel 구현
- 닉네임을 등록한 상태로 게임을 클리어하면 자동으로 서버 랭킹에 참여 (각 패턴별 99위까지 기록)
- 게임 클리어시 소요시간과 함께 클리어 모달 노출(다시하기, 홈으로 돌아가기 버튼 선택 가능)
- 60분 이내에 클리어를 실패할 경우 실패 모달 노출(다시하기, 홈으로 돌아가기 버튼 선택 가능)

## 결과물
⬇Click to youtube⬇

[<img width="200" alt="image" src="https://user-images.githubusercontent.com/30457954/193556546-c3114ded-ac40-4d31-b61f-e7ec86873245.png">](https://youtu.be/Ud4YB8UO3n0)


---
### 패턴 가이드
페이지를 누르면 패턴에 해당하는 페이지의 색깔이 변합니다. 색깔이 변하는 순서는 게임 내 페이지 이동 탭 버튼의 순서와 동일합니다.

<div>A pattern) 누른 페이지와 양 옆의 페이지 색깔이 변합니다.</div>

<img width="200" src="https://user-images.githubusercontent.com/30457954/193641601-820e0319-dccb-4743-ae3b-043415e84b07.gif"/>

<div>B pattern) 누른 페이지의 양 옆 페이지 색깔이 변합니다.</div>

<img width="200" src="https://user-images.githubusercontent.com/30457954/193741211-76d2e2ba-b83c-4dad-a62b-7164409d2ea3.gif"/>



<div>C pattern) 누른 페이지와 페이지로부터 양옆으로 2칸 떨어진 페이지의 색깔이 변합니다.</div>

<img width="200" src="https://user-images.githubusercontent.com/30457954/193641967-c2320297-5268-4b30-9ac8-620187478e6e.gif"/>


