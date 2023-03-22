var x = 10; //전역 변수 global scope : 프로그램의 전체 영역에서 사용 가능, 불로 장생 
//메모리 영역 : 포인터 -> 가리킨다.
//지역변수 : 호출되면 잠깐 살아있다가 } 함수가 끝난시점에는 없음 

// 매개변수(parameter) 'z' 도 지역스코프를 가짐
function foo(z) { // 지역 변수 : 해당 함수 안에서만 사용가능 -> } 나가면 죽음, 수명 짧음 
    // js는 var x;로 선언(호이스팅 : 맨 위로 올려버림)과 초기화가 분리되서 시작 됨 
    console.log(`지역변수 x 선언 전 : ${x}`); // undefined
    var y = 20 + x; // y쓰고 싶으면 return y; 혹은 바깥쪽에 하면 됨 
    console.log(y - z); // NaN

    var x = '홍길동'; //var x; x = '홍길동'; 뒤의 걸로 했으면 분리됨 
    console.log(`지역변수 x 선언 후 : ${x}`); // 홍길동
    // x를 가지고 올때 내 지역을 우선으로 한다.
    // 전역변수 x와 지역변수 x 가 있을때 가까운 지역변수 o 
}
//y를 바깥쪽에서 호출시 ReferenceError 뜸 
foo(50);
console.log(`함수 호출 후 x의 값 : ${x}`); //10 지역 변수가 다 사용 뒤 죽어서 전역 사용 

//==============중첩 함수 : 함수 안에 함수를 정의================= 

function outer(m) { // 매개변수 또한 지역변수이다. 

    var n = 'outer local n';
    var v = 'outer local v';

    console.log(m); //outer param m : 매개변수인 지역이 우선한다!
    console.log(n); //outer local n // 지역 
    console.log(v); //outer local v

    // 헬퍼 함수(바깥쪽 함수를 도와주는 함수) : 호출이 함수 내부로 제한됨 : 바깥에서 호출 불가 (위험, 순서중요)
    function inner() { // 헬퍼 함수는 보통 화살표 함수로 많이 씀 
        console.log(n); // 사용 가능 //outer local n
        var m = 'inner local m';
        var v = 'inner local v';
        console.log(m); // inner local m
        console.log(v); // inner local v <-- 가까이 있는 지역변수 먼저 ! 
    }
    inner(); // 호출을 안에서 밖에 못함 
}
var m = 'global m'; // 라인에 딱 붙어있는 애 : 전역 변수 (사용을 자제해야한다)

outer('outer param m')