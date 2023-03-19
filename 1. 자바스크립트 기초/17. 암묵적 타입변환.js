//문자열 타입으로 형 변환 : 문자열 결합 연산만 가능

var n1 = 10; //숫자를 문자 타입으로 바꿔서 --> 묵시적 형변환을 한다. 
var n2 = '20';

console.log(n1 + n2); //1020

var n3 = n1 + ''; //빈 문자열 -> 문자로 변환됨 !!!!!!!
console.log(typeof n3); //string : 숫자 + 문자 => 문자로 바뀜 

var n4 = '100' - 55; //뺄셈에서 문자를 암묵적으로 숫자로 바꿈 
console.log(n4); // 45

console.log('=================');
//js에서는 0, "", null, undefiened, NaN는 거짓으로 판단 

// Falsy :  false 값 콘솔에 출력되지 않음
if (undefined) console.log('ok1');
if (null) console.log('ok2');
if (0) console.log('ok3');
if ("") console.log('ok4');
if (NaN) console.log('ok5');

// Truthy : true 값 
if (1) console.log('ok6');
if (-100.55) console.log('ok7');
if ('   ') console.log('ok8');
if ('hello!!!!') console.log('ok9');
if ([]) console.log('ok10');


for (var n = 1; n <= 10; n++) {
    if (n % 2) { // 나머지 1이니까 홀수, 나머지 0이니까 false 으로 판단되서 짝수
        console.log(n + ':홀수입니다.');
    } else { 
        console.log(n + ':짝수입니다.');
    }
}

