/* 
Q. n의 약수의 개수를 구하기
1. 정수 n을 전달받아 n의 약수들을 출력하고 
  약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
3. 힌트) 전달받은 n을 1부터 n까지 지속적으로 나누어
   나누어 떨어졌을 시 약수의 개수 카운트를 1증가시키고 출력.
*/


function calcDivisor(n) { //20 

    var divCount = 0;
    var arr = [];
    for (var i = 1; i <= n; i++) { //20을 1부터 20번까지 지속적으로 나눈다 
        if (n % i === 0) { // 20 /i = 0 나누어 떨어졌을때 
            divCount += 1;
            arr.push(i);
        }
    }console.log(`${n}의 약수 : [${arr}]`);
    return divCount;
}


// 호출부 : 실행했을때 
var divCount = calcDivisor(20);
console.log(`약수의 개수: ${divCount}개`);





// function calcDivisor(targetNumber) {

//     // 약수들을 저장할 배열
//     var divisor = [];

//     for (var i = 1; i <= targetNumber; i++) {
//         if (targetNumber % i === 0) {
//             divisor.push(i);
//         }
//     }
//     console.log(`${targetNumber}의 약수: ${divisor}`);
//     return divisor.length;
// }

// /* 
// Q. n의 약수의 개수를 구하기
// 1. 정수 n을 전달받아 n의 약수들을 출력하고 
//   약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
// 2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
// 3. 힌트) 전달받은 n을 1부터 n까지 지속적으로 나누어
//    나누어 떨어졌을 시 약수의 개수 카운트를 1증가시키고 출력.
// */

// // 호출부
// var divCount = calcDivisor(20);
// console.log(`약수의 개수: ${divCount}개`);

