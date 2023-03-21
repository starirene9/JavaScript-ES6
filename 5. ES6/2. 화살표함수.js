// 함수 선언문 방식 
function multi(n1, n2) {
    return n1 * n2;
}

// 함수 표현식: 위의 것과 같이 똑같음
const multi = function (n1, n2) {
    return n1 * n2;
}; // 세미 콜론 필수 

// 화살표 함수 : 
// 1. function 빼고 
// 2. 소괄호 중괄호 사이에 화살표 꺽쇄 
// 3. 한 줄이면 중괄호 없애기 

const multi = (n1, n2) => n1 * n2;

function sayHello() {
    console.log(`안녕하세요`);
}

const sayHello = () => console.log(`안녕하세요`);
sayHello();

const kim = {
    name: '김철수',
    age: 30,
    greeting: sayHello, // sayHello 라는 함수가 kim.greeting으로 바뀜 
    dance :() => console.log(`춤을 신나게 춥니다.`)
    ,
}

kim.dance();

// 정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는
// 화살표 함수 pow 작성해보세요. 

const pow = n => n**2;
console.log(pow(4));


// 함수 선언문과 함수 표현식(화살표 함수 포함)의 차이는 없는가 
console.log('===================');

function sub(n1, n2){
  return n1 - n2;
}

const r2 = sub(20, 10);
console.log(`r2 : ${r2}`);

const divide = (n1, n2) => n1/n2;
const r3 = divide(30,6); 
console.log(`r3 : ${r3}`);
