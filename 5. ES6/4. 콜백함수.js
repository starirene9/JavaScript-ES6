// 콜백 : 함수를 통쨰로 넘기는 방식 : 나머지는 다 써놨으니까 
// 너가 추가하고 싶은 부분만 콜백으로 써서 보내~!

// 정수 n을 전달하면 1부터 n까지의 모든 짝수를 출력하는 함수 
function showEvenNumber(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) console.log(i);
    }
}
// showEvenNumber(10);

function showOddNumber(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) console.log(i);
    }
}
// showEvenNumber(10);

function showOddOrEvenNumber(n, delim) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === delim) console.log(i);
    }
}
showOddOrEvenNumber(10, 0);

//=========바꾸기 귀찮아서 아예 바뀌는 부분에 function 함수 넣어버림 =======

function showNumber(n, code) { // code는 함수임 

    for (let i = 1; i <= n; i++) {
        if (code(i)) { // 호출할때는 함수스타일로 호출 
            console.log(i);
        }
    }
}

// 첫번째 방법 
// showNumber(20, function(n) { return n % 3 === 0; });
// showNumber(20, n => n % 3 === 0); // function(n){ return n % 3 === 0;}을 간소화
// 이외의 3의 배수이면서 6의 배수가 아닌것 return n % 3 === 0 && n % 6 !== 0;

// 두번째 방법 
function test(n) {
    return n % 3 === 0;
}
showNumber(30, test);

//===============================================

$btn.onclick = function () {} // 콜백과 같은 개념이라고 보면 됨 : 나머지는 다 써놨으니까 너가 추가하고 싶은부분만 콜백으로 써서 보내

function showMessage(message, howTo) {
    //공통기능
    document.body.style.background = 'gray';

    setTimeout(() => {
        //개별기능
        howTo(message);

        //공통기능
        alert('하하호호!');
    }, 500);
    // 가운데만 내가 수정하는 것임 alert, confirm prompt로 스스로 알아서 
}

showMessage('메롱메롱', function (m) {
    alert(m); //본인이 하고 싶은거 넣어 주면 됨 
});