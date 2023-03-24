function caseUp($icon) {

    // 1. #begin의 숫자값이 클릭값 + 1로 변경
    document.getElementById('begin').textContent = +$icon.dataset.iconNumber + 1;

    // 2. #down .selected 제거, #up에 추가
    document.getElementById('down').classList.remove('selected');
    document.getElementById('up').classList.add('selected');

    // 3. 자기 자신 아이콘포함 이전형제들 모두 삭제
    const $numbers = document.getElementById('numbers');

    // iterator 디자인 패턴 = null이 나올때까지 반복 
    let $delTarget = $icon;
    while ($delTarget) { 

        const $nextTarget = $delTarget.previousElementSibling;
        $numbers.removeChild($delTarget);
        $delTarget = $nextTarget;
    }
      
}

function caseDown($icon) {

    // 1. #end의 숫자값이 클릭값 - 1로 변경
    document.getElementById('end').textContent = +$icon.dataset.iconNumber - 1;

    // 2. #up .selected 제거, #down에 추가
    document.getElementById('up').classList.remove('selected');
    document.getElementById('down').classList.add('selected');

    // 3. 자기 자신 아이콘포함 다음형제들 모두 삭제
    const $numbers = document.getElementById('numbers');

    // iterator 디자인 패턴
    let $delTarget = $icon;
    while ($delTarget) {

        const $nextTarget = $delTarget.nextElementSibling;
        $numbers.removeChild($delTarget);
        $delTarget = $nextTarget;
    }

}

function correctAnswer($correctIcon) {
    // 1. finish아이디 박스에 class 'show'부여
    const $finish = document.getElementById('finish');
    $finish.classList.add('show');


    // 2. #numbers 클릭 이벤트 해제
    document.getElementById('numbers').onclick = null;

    // 3. 클릭한 아이콘에 id 'move' 부여
    $correctIcon.setAttribute('id', 'move');
}


export { caseUp, caseDown, correctAnswer };