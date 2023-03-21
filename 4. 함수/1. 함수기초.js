/*
function 기똥찬이름(바뀌는 부분) {
    재활용하고 싶은 코드 
} */

//함수 정의 - 만든다
function happyGreeting(yourName) { //바뀌는 부분을 소괄호 안에 넣기 
    console.log(`${yourName}님 안녕하세요! 어쩔티비!`);
    console.log(`오늘도 즐거운 하루 되세요~!루삥뽕`);
    //재활용하고 싶은 코드 넣기 
}

//함수 호출 - 사용한다
happyGreeting('다나카'); //바꾸고 값만 바꿔주면 됨 
happyGreeting('오뚜기');

//리턴값이 없는 함수 
function makeLine(){
   console.log('=====================');  
}

makeLine();
// 함수 사용시 코드 은닉화 가능 + 코드의미 알기 쉽게 해주고 + 코드의 재사용성을 올린다

// 원의 넓이를 자주 구한다. 원주율 * 반지름 ^ 2 
function calcAreaCircle(r) {
    // console.log(`이야호~!`); * 3바퀴 돌음 
    var PI = 3.14159265;
    var area = PI * r ** 2; //r은 반지름 , r 제곱 
    return area;
}

var r1 = calcAreaCircle(5);  
var r2 = calcAreaCircle(15); // 변수에 담아줘서 출력해야함.
console.log(calcAreaCircle(15)); // 혹은 이것처럼 바로 콘솔 로그에 대입 
var r3 = calcAreaCircle(20);