var x = 10; //전역 변수 : 프로그램의 전체 영역에서 사용 가능 
// 매개변수(parameter)도 지역스코프를 가짐 
function foo(z) {
    console.log(`지역변수 x 선언 전 : ${x}`); // undefined
    var y = 20 + x; //지역 변수 : 해당 함수 안에서만 사용가능 (수명 짧음)
    console.log(y - z); //NaN

    var x = '홍길동'; // 지역 변수 : 선언과 초기화가 분리되서 선언문이 위로 쭉 올라감 
    console.log(`지역변수 x 선언 후 : ${x}`); //홍길동
    // return y; // 사용하고 싶으면 밖으로 내보내주면 됨. 
    // 전역변수 x와 지역변수 x 가 있을때 가까운 곳에 있는 것인 지역변수부터 사용 
}
foo(50); // 10 30 
console.log(`함수 호출 후 x의 값 : ${x}`); //10 지역 변수가 다 사용뒤 죽음 

//==============중첩 함수 : 함수 안에 함수를 정의================= 

function outer(m) {

    var n = 'outer local n';
    var v = 'outer local v';

    console.log(m); //outer param m 
    console.log(n); //outer local n // 지역 
    console.log(v); //outer local v

    // 헬퍼 함수 : 호출이 함수 내부로 제한됨 : 바깥에서 호출 불가 
    function inner() {
        console.log(n); // 가능 
        var m = 'inner local m';
        var v = 'inner local v';
        console.log(m); // inner local m
        console.log(v); // inner local v <-- 가까이 있는것 부터 쓴다 
    }
    inner(); // 호출을 안에서 밖에 못함 
}

var m = 'global m';
outer('outer param m') //전역 