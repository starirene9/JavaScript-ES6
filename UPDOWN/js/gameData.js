// 게임 데이터
const gameData = {
    secret: makeRandomNumber(100), // 실제 정답
    answer: null,  // 사용자의 선택값
    min: 1,   // 최소범위설정
    max: 100  // 최대범위설정
};

// 랜덤정수를 범위에 맞게 생성하는 함수
function makeRandomNumber(range) {
    return Math.floor(Math.random() * range) + 1;
}

// 내보낼 데이터가 하나 : export default gameData;
export {gameData}; 