// 자바스크립트의 함수는 함수를 리턴할 수 있음 
// function calculator(n1, n2){

//     function add(){ // 중첩함수 = helper 함수
//         return n1 + n2;
//     }
//     return add; // 괄호가 없으면 함수 자체를 던진 것임 
// }

// const zzz = calculator(5,7);
// console.log(typeof zzz); //function 

// const n = zzz(); // 호출 시점에 5, 7이 살아 있음 (내부는 나오면 죽는데)
// console.log(`n: ${n}`); // 12 

//=============위의 것을 화살표함수로 표현하기 
// function calculator(n1, n2) {
//     return () => n1 + n2;
// }

// const zzz = calculator(5,7); 

// const n = zzz(); 
// console.log(`n: ${n}`); //12

//===========================1. 전역변수로 카운트 선언

// let count = 0; // 전역 변수 : 카운팅 변수 

// //카운트를 올리는 함수 
// const increase = () => ++count;

// console.log(increase()); //1
// console.log(increase()); //1

// count = 999; // count인 경우 누가 중간에 숫자 변경 하면? 

// console.log(increase()); // 숫자가 1000으로 변하는 위험성 존재 

//============================2. 지역변수로 카운트 선언 
// const increase = () => {
//     let count = 0; //지역변수 : 메모리에 카운트가 잠시 0으로 올라왔다가 
//     return ++count; // 리턴이 나간다음에 카운트의 존재는 메모리에서 사라짐 
// };

// console.log(increase()); // 1
// console.log(increase()); // 1 : 즉 누적이 되지 않음  

//=========================3 클로저 : 상태유지
// 상태유지 stateful <-> stateless 를 위해서 클로저 사용 
// count도 클로저 라는 함수 안에 가둬 놓은 것이라고 보면 됨 

// const increaseClosure = () => {

//     let count = 0;
//     return () => ++count;

// }
// const increase = increaseClosure();

// console.log(increase()); //1
// console.log(increase()); //2
// count = 999;
// console.log(increase()); //3 

//======================즉시 실행 함수(일회용 함수)
// 즉시 실행 함수 : 정의와 동시에 호출
// 1. 이름 없는 함수 만들고
// 2. 함수를 소괄호를 감싸고
// 3. 함수를 콜해주세요 ();
const result = (function (n1, n2) { // 이름이 없어서 재활용 불가 
    return n1 + n2;
})(5, 8); //13

console.log(result); // 13이 바로 들어감 

//위의 3번 이름 없애고 소괄호로 감싸고 바로 호출 
const increase = (function() {
    let count = 0;
    return () => ++count;
})(); 

console.log(increase()); //1
console.log(increase()); //2
console.log(increase()); //3