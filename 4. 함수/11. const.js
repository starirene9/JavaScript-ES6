// const는 상수(항상 일정한 데이터 )로 변수(변경 가능)에 상반된 개념이다.

const PI = 3.14159265; // 선언과 함께 초기화를 시켜줘야함 
// 값 변경 불가! 불변의 값 

// let이 아닌 const로 변경 
const kim = {
    name : '김철수',
    age : 25
};

kim.name = '김칠리';

// kim = {
//     name : '김철수',
//     age : 25
// }; // let 일 때 객체가 변한 상태 

// 자바스크립트는 무조건 const 쓴다 
// 대부분이 const~! var는 아예 쓰지 말것~! 
// 진짜로 상수 의미 있으면 대문자 

const a = 10;
const b = 20;

for (let i = 0; i< 5; i++) {
    //숫자 변하는 것만 let 
}