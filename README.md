이 프로젝트는 퀄슨에서 제공해주신 과제로 진행되었습니다.

## About

- yarn dev 명령어로 실행 후 http://localhost:3000 를 통해 접속 할 수 있습니다.

- 문제 문항 데이터는 next/api로 제공하였습니다.

- 테스트 시작 시에 문항의 순서가 랜덤으로 정해져서 store 에 저장됩니다.

- 각 문항 선택 시 선택지의 버튼 색상이 변경됩니다. 사용자가 선택한 버튼을 확인할 수 있도록 버튼 색상 변경 후 0.5초 후에 페이지가 이동됩니다.

- 각 문항에 소수로 된 각각 다른 점수를 부여하여, 문항의 순서가 랜덤으로 제공되어도 변함없는 결과값이 나올 수 있습니다. 마지막 문항 선택 시 점수를 계산하고 결과를 도출합니다.

- redux-persist 를 설정하여 새로고침 시에도 store의 값이 변하지 않도록 구현하였습니다.

## Used Skill

- Next.js, typescript : router 기능과 타입 정의

- styled-components : 스타일 및 컴포넌트 정의

- redux, redux-persist : 상태관리와 상태저장

- eslint, prettier : 코드 컨벤션
