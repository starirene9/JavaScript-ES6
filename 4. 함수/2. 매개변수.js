// 매개변수, 인자, 매개변수가 없는 함수 

/*
    description : x - y 까지의 총합을 구하는 함수 
    parameter : 
        - begin : 누적총합의 시작값
        - end : 누적총합의 끝값
    return : 계산된 총합
*/

//begin, end 를 parameter(매개변수)라고 불린다. 
//parameter : 함수를 정의할 때(만들때) 외부에서 받아오는 값을 저장할 변수 : begin, end 같은 것들 
function calcRangeTotal(begin, end) {

    // console.log(`x: ${begin}, y : ${end}`);

    var total = 0; //총합을 저장 변수
    for (var i = begin; i <= end; i++) {
        total += i;
    }
    return total;
}

// 인수 (argument) : 함수를 호출할 때 함수에게 전달하는 값이나 표현식 : 1, 5
var result1 = calcRangeTotal(1, 5); //리턴된 값을 변수에 받아줌 
console.log(`result1 = ${result1}`);
console.log(`result2 = ${ calcRangeTotal(1,50)}`);
console.log(`result2 = ${ calcRangeTotal(1,result1 - 5)}`);

// 매개변수의 기본값
function sayHello(language = '한국어') { // 기본값 아무것도 안 적어도 한국어 처리 

    // language = language || '한국어'; // 빈값에도 한국어로 반영 됨 : 옛날 스타일 
    //undefined 경우에는 falthy -> 오른쪽 한국어를 선택해서 집어 넣음 

    if (language === '한국어') {
        console.log('안녕하세요!');
    } else if (language === '영어') {
        console.log('hello!');
    } else if (language === '중국어') {
        console.log('따쟈하오!');
    } else {
        console.log('울라울라~');
    }
}

sayHello();

//slice 구현하기 

function mySlice(arr, start, end) {
    //사본 배열 생성
    var copyArr = [];
    for (var i = start; i < end; i++) {
        copyArr.push(arr[i]);
    }
    return copyArr;
}

var newArr = mySlice([10, 20, 30, 40, 50], 1, 3); // index 1 이상 3 미만 
console.log(newArr);

//매개 변수(parameter)가 없는 함수 
function selectRandomPet() {
    var pets = ['멍멍이', '짹쨱이', '꽥꽥이', '어흥이'];

    return pets[Math.floor(Math.random() * pets.length)];  // 0 ~ 4까지 -> 배열의 길이값 
}

var randomPet = selectRandomPet();
console.log(`랜덤동물 : ${randomPet}`);