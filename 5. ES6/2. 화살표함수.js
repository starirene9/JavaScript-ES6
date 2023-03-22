// 1. 함수 선언문 방식 
function multi(n1, n2) {
    return n1 * n2;
}

// 2. 함수 표현식: const '이름 = 을 앞으로 빼서' 선언 
const multi = function (n1, n2) {
    return n1 * n2;
}; // 값이니깐 세미 콜론 필수 

// 3. 화살표 함수 
const multi = (n1, n2) => n1 * n2;
// 1) function 떼고 
// 2) 소괄호 중괄호 사이에 화살표 꺽쇄 
// 3) 한 줄이면 중괄호 없애기 

const r1 = multi(10, 3);
console.log(`r1: ${r1}`); //r1 : 30

// 1.함수 선언식 
// function sayHello() {
//     console.log(`안녕하세요`);
// }

// 2. 함수 표현식 
// const sayHello = function(){
//     console.log(`안녕하세요`);
// }

// 3. 화살표 함수 
const sayHello = () => console.log(`안녕하세요`);

sayHello();


//==============================================

const kim = {
    name: '김철수',
    age: 30,
    greeting: sayHello, // sayHello 라는 함수를 통째로 집어 넣음 (앞의 add 처럼) => greeting이라는 메서드 생성 
    dance :() => console.log(`춤을 신나게 춥니다.`),
};

console.log(kim.greeting()); //sayHello 라는 함수가 -> greeting이 되었기에 호출시 괄호 비워서 주기 
kim.dance();

// 정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는
// 화살표 함수 pow 작성해보세요. 

const pow = n => n ** 2;
console.log(pow(4));


// 함수 선언문과 함수 표현식(화살표 함수 포함)의 차이는?
// 함수 선언문 
function sub(n1, n2){
  return n1 - n2;
}

const r2 = sub(20, 10);
console.log(`r2 : ${r2}`);

// 화살표 함수 : 호출을 먼저하고 나중에 만들기는 안됨 

const r3 = divide(30,6); 
const divide = (n1, n2) => n1 / n2;

console.log(`r3 : ${r3}`);
