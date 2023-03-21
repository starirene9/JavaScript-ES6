// return 과 break 의 차이 

function add(n1, n2) {
    var result = n1 + n2;
    return result; //return에 break 처럼 탈출문의 의미가 있음 
}

//반환값 return : 함수 호출 이후에 함수밖으로 전달되는 값
var r1 = add(5, 7); // 12가 반환값 

add(r1, r1 * 2); // add (12, 24)

var r2 = add(add(2, 3), add(add(3, 4), add(6, 2)));
// 함수 중첩 순서 : 안쪽으로 쭉가서 실행 같은 레벨끼리는 왼쪽부터 실행 : 20 
console.log(`r2 : ${r2}`);

// 리턴이 없는 함수 (void 함수) 
function multi(n1, n2) {
    var result = n1 * n2;
    console.log(`${n1} x ${n2} = ${result}`);
    //화면에 찍고 들고오지 마~ : 소비함수
}

// 리턴이 없는 함수는 변수에 담지 말고, 다른함수에 인수로 전달 x
var r3 = multi(10, 3);
add(r3, 10); // r3 리턴값이 없어서 undefined 뜸 
multi(add(4, 3), add(5, 5));

//return 탈출문
function callName(nickName) {

    var prohibits = ['멍청이', '돌아이', '홍길동'];

    if (prohibits.includes(nickName)) {
        console.log('잘못된 닉네임은 인사를 못해줍니다.');
        return; // 코드를 끊어줌 
    }
    console.log(`${nickName}님 안녕하세요!`);
}

callName('바둑이');
callName('돌아이'); // return으로 끊어주면 반복문안에서 쓰는 break 와 똑같은 효과 

function stopLoop() {

    while (true) {
        var flag = prompt(`명령어를 입력하세요!`);
        if (flag === '멈춰') {
            break; // break는 단순히 반복문인 while을 끊고 수고용~ 읽고 나옴.
            //return은 break 보다 강력해서 수고용 없이 함수 자체를 끝낸다. 
        } 
        alert(flag);
    }
    alert('수고용~');
}

stopLoop();
