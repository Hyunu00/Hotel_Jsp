// server.js

const express = require('express');
const path = require('path'); // Node.js의 기본 모듈인 path를 사용

const app = express();
const port = 3000;

// 정적 파일 제공을 위한 미들웨어 추가
app.use(express.static(path.join(__dirname, 'public')));

// 기본 경로에 대한 핸들러 추가
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 다른 경로에 대한 핸들러 추가
app.post('/submitReservation', (req, res) => {
    // 예약 데이터 처리
    const response = {
        message: '예약이 완료되었습니다. 감사합니다!'
    };
    res.json(response);
});

// 서버 시작
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
