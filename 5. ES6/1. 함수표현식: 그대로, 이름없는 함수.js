// 1. 함수 통째로 넣어버리기 2. 이름없는 함수 선언

//함수 선언문 
function add(n1, n2) {
    return n1 + n2;
}
// const plus = add(5,9);
// console.log(plus); //14

// 1. 함수자체를 통째로 들어서 plus에 넣어버림 
const plus = add; // 함수자체를 통째로 들어서 plus에 넣어버림 
console.log(plus); // [Function: add]

const r1 = plus(10, 20);
console.log(`r1 : ${r1}`); //30

// 2. 무명함수 생성 : 함수 리터럴 => 이름 없는 함수는 값이다. 
const sub = function (n1, n2) {
    return n1 - n2;
}; // 값이니까 뒤에 ; 붙여줘야함 

sub(20, 10);



const fArr = [10, 'hellow', true, {}, [], add
, function() {console.log('메롱')}]; // add라는 함수 넣을 수 있음 

fArr[6](); // 배열 6번째 인덱스 호출함 => 메롱 나옴 


const dog = {
    name : '초코',
    kind : '푸들',

    // 함수라고 부르지 않고 메서드:객체의 기능 라고 부른다. 
    bark : function() {
        console.log('왈왈월월!');
    }
}

dog.bark(); // . 이 붙으면 매서드 안붙으면 함수 

const cat = {
    name : '냥냥이',
    kind : '페르시안',
    sleep : function () {
        console.log('갸르릉 zZ');
    }
};

cat.sleep();


/*
    # 다음과 같은 조건을 만족하는 객체를 일급객체라고 한다.

    1. 무명의 리터럴(이름이 없는 값의 형태)로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
    2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
    3. 함수의 매개변수에 함수를 전달할 수 있다.
    4. 함수의 반환값으로 사용할 수 있다.
    # 자바스크립트의 함수는 위의 조건을 모두 만족하므로 일급 객체라 할 수 있다.
 */