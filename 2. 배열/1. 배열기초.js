var a = 10;
var b = a;
a = 15;
console.log(b); // 10 -> 변수는 각기 다른 하나씩의 좁은 방이 존재 

console.log(`====================`);

var arr1 = [1, 2, 3, 4];
var arr2 = arr1;

arr1[1] = 999; // 2번을 999로 바꿈 
arr2[0] = 77; // 1번을 77로 바꿈 -> 같은 주소를 바라보고 있어서 인덱스 다 바뀜 

console.log(arr2);

console.log(`====================`);
// 배열의 생성
// 배열 변수 이름 관례 : 복수형, list 어미//
// ''안에 넣고 컴마, 세로 배열 추천 
var fruits = [
    '오렌지',
    '라임',
    '레몬'
]; // 대괄호를 배열 리터럴이라고 함 

// var arrayLike = {
//     0:'자몽',
//     1:'포도',
//     2:'한라봉',
//     length: 3
// }; // 유사배열이 존재하므로 검사에서 prototype: array or object인지 확인 

console.log(typeof fruits);
console.log(fruits);
console.log(`배열의 데이터 수 : ${fruits.length}`);

// 배열 데이터 참조 : reference (저장해놓은 것을 가져다 쓰겠다 )
console.log(`첫번째 데이터 : ${fruits[0]}`);
console.log(`마지막 데이터 : ${fruits[fruits.length-1]}`);  //숫자가 0부터 시작하니깐 

// 배열 요소 수정 
fruits[1] = '파인애플';
console.log(fruits);

// 수정시 주의사항!! : 데이터가 존재하는지 확인하고 변경할 것 ! -> 성능 문제 일으킴 
fruits[4] = '초콜릿';
console.log(fruits);


// 배열 내부데이터 전체 참조(순회 : travis) 
// 선형 탐색을 할때 쓰임 : 알고리즘 : 순차적으로 확인해보면서 찾기 
var target = '바나나';
// 찾았는지에 대한 여부 
var findFlag = false; // 처음에는 못 찾은 상태로 시작 
                   //순회for문 : 미만 
for (var i = 0; i < fruits.length; i++) {
    //console.log(fruits[i]);

    if (fruits[i] === target) {
        console.log(`${target}과일은 존재함!`);
        findFlag = true; //찾았으면 
        break; // 나가주세요 
    }
}
// 못찾은것은 안에서 도는 게 아니고 바깥으로 나옴 
if (!findFlag) console.log(`${target}라는 과일 없음 !`);
// 만약 findFlag가 false라면 ~? 이렇게 얘기해주기 


// for ~ of 반복문 (배열 전용 반복문)
var weekDays = ['월', '화', '수', '목', '금', '토', '일'];
console.log(weekDays.length); // <미만

//순회문 : // 특정인덱스를 가지고 뭐 할때는 위의 for문
for (var i = 0; i <weekDays.length; i++) {
    console.log(`${weekDays[i]}요일!!!!`); 
}   

//for of 순회문 : 담을 변수 하나 왼쪽 of 우측에 배열 
//다음타겟을 day에 넣고 없을때 까지 loop를 돌려 줌
//전체순회 할때 사용. loop가 배열의 데이터 개수만큼 돈다. 
for (var day of weekDays) {
    console.log(`${day}요일~~`);
} 

