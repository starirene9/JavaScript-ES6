import { gameData } from "./gameData.js";
import { caseUp, caseDown, correctAnswer } from "./checkAnswer.js";

function gameStart(iconCount) {

    const $numbers = document.getElementById('numbers');
    
    // 구슬을 iconCount개 만들어야 함.
    const makeIcon = () => {

        for (let n = 1; n <= iconCount; n++) {
            // <div class='icon'>1</div>
            const $icon = document.createElement('div');
            $icon.classList.add('icon');
            $icon.textContent = n;
            $icon.dataset.iconNumber = n;

            $numbers.appendChild($icon);
        }
    };

    makeIcon();

    // 아이콘에 클릭 이벤트 부여하기
    $numbers.onclick = e => {

        if (!e.target.matches('#numbers .icon')) return;

        // console.log(`${e.target.dataset.iconNumber}번구슬 클릭함!`);

        // 사용자가 클릭한 아이콘의 숫자를 answer에 저장
        gameData.answer = +e.target.dataset.iconNumber;
        console.log(gameData.secret);

        // 정답 검증 함수
        checkNumber(e.target);

    };

}

// 정답을 검증하는 함수
function checkNumber($target) {

    const {secret, answer} = gameData;

    // 실제정답이랑 선택값을 비교
    if (secret === answer) { // 정답인 경우
        correctAnswer($target);
    } else if (secret > answer) { // up인 경우
        caseUp($target);    
    } else {    // down인 경우
        caseDown($target);
    }
}

export default gameStart;