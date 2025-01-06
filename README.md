# 웹소켓 사용해보기

## 실행
1. `node server.js` 터미널에 입력

2. `localhost:8080` 접속

## 기술 스택
### 서버
Node.js

Express

### 프론트
HTML (index.html)

### 웹소켓 라이브러리
ws (WebSocket)

## 기능
`메세지 보내기` 버튼 클릭 시, "ㅎㅇ" 메세지가 서버로 보내지고 서버 쪽 console 에 찍힘

서버는 메세지 수신하면 "저리 가" 라는 메세지 클라이언트에게 전송

클라이언트는 수신한 메세지 console 창과 화면에 띄움


## 참고 자료
[코딩애플 | 오늘의 테크용어 : 웹소켓이 뭐냐면](https://www.youtube.com/watch?v=yXPCg5eupGM)

## 디벨롭
ws 보다는 socket.io 라이브러리가 지원하는 기능 많음
- 연결 끊기면 자동 재접속 가능
- 웹소켓 접속자마다 자동 id 부여
- 모든 웹소켓 유저에게 전체 메세지 전송 가능
- 웹소켓 방 생성 가능