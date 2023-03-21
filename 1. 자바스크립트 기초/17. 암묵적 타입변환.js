//문자열 타입으로 형 변환 : 문자열 결합 연산만 가능

var n1 = 10; //숫자 --> 문자로 변하는 암묵적 형변환 함.
var n2 = '20'; //문자 타입이 있으면 

console.log(n1 + n2); //1020

var n3 = n1 + ''; //'' : 문자 => 의도적으로 숫자 + '' 하면 문자로 형변환 됨 
console.log(typeof n3); //type : string (숫자 + 문자 => 문자로 바뀜 )

var n4 = '100' - 55; //뺄셈과 곱셈은 문자를 암묵적으로 숫자로 바꿈 
console.log(n4); // 45

console.log('=================');
//js에서는 논리로 바꿨을때 0, '', null, undefined, NaN는 거짓으로 판단 => 5 개 빼고 다 true 

// Falsy :  false 값 콘솔에 출력되지 않음
if (undefined) console.log('ok1');
if (null) console.log('ok2');
if (0) console.log('ok3');
if ("") console.log('ok4');
if (NaN) console.log('ok5');

// Truthy : true 값 
if (1) console.log('ok6');
if (-100.55) console.log('ok7');
if ('   ') console.log('ok8'); // 스페이스 하나만 있어도 true
if ('hello!!!!') console.log('ok9');
if ([]) console.log('ok10');

// 자바스크립트에서 이렇게 쓰임 : 논리가 들어갈 자리에 falsy, truthy 판단함 
for (var n = 1; n <= 10; n++) {
    if (n % 2) { // n % 2 === 0 나머지 1이니까 홀수, 나머지 0이니까 false 으로 판단되서 짝수
        console.log(n + ':홀수입니다.'); // 나머지 1 = true
    } else { 
        console.log(n + ':짝수입니다.'); // 나머지 0 = false로 봄
    }
}

