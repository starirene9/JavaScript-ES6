var foodlist = ['닭꼬치', '볶음밥', '짜장면', '족발'];

var target = '볶음밥';
// indexOf : 배열의 특정 데이터가 몇번 인덱스에 있는지 탐색 
var index = foodlist.indexOf(target); // 탐색에 실패하면 -1
console.log(`찾은 인덱스 : ${index}`);

// var count = 0;
// var target = '짜장면';   
// for(var food of foodlist) { //하나씩 빼는 요소 
//     if(food === target ) { // 닭 -> 볶 ->짜 === 짜장면 여부 확인 
//         break;
//     } 
//     count++; // count : 0 1 2 ==> 짜장면이 2 인덱스라는 것을 찾아냄 
// } // 자바는 인덱스를 찾아주는 함수 만들어 놓음 
// console.log(`찾은 인덱스 : ${count}`);



// slice() : 배열을 일정부분 잘라냄, 사본배열을 반환
foodlist.push('오뎅','순대국밥');
console.log(foodlist);
var slicedFoods = foodlist.slice(1,4); //1이상 4미만 : 서양식 마인드에 익숙해 질것! 카피본만 건드림 
console.log(slicedFoods); //[ '볶음밥', '짜장면', '족발' ]
console.log(foodlist); //원본에는 변화가 없다 //[ '닭꼬치', '볶음밥', '짜장면', '족발', '오뎅', '순대국밥' ]

//2번부터 끝까지 추출 
var slicedFoods2 = foodlist.slice(2);
console.log(slicedFoods2);

//아무것도 안쓰면 원본 배열을 그대로 복사
var slicedFoods3 = foodlist.slice();
console.log(slicedFoods3);

//reverse() : 배열 역순으로 배치, 원본이 변함
console.log('====================');
var nums = [10, 20, 30, 40, 50];
nums.reverse(); // 원본을 뒤집으면 좋지 않음 
console.log(nums);

var copyNums = nums.slice(); //복사본을 담아서 
copyNums.reverse(); //복사본을 reverse
console.log(copyNums); 

// concat() : 배열 2개를 연결
console.log('==============');
var arr1 = [10,20,30];
var arr2 = [100, 900, 700, 1000];

var concatedArr = arr1.concat(arr2) ; //연결한 사본을 concatedArr에 갖다 줌 
console.log(concatedArr);

//includes() : 배열의 특정 데이터가 존재하는지 확인
console.log(`====================`);

var resultFlag = foodlist.includes('닭꼬치');  // true 
console.log(resultFlag);

//splice() : 중간에 있는 배열의 특정 요소 제거, 삽입 

console.log('====================');

console.log(foodlist);

//원본에 반영 
foodlist.splice(1,2); //1번 인덱스부터 2개 지워~!
console.log(foodlist);

foodList.splice(0, 1, '보쌈'); // 0번 인덱스로 부터 한개 지우고 보쌈을 넣어라 0, 1만 쓰면 shift와 똑같은 효과 나음 
console.log(foodList);

//1번에 마라탕 삽입 
foodlist.splice(1,0,  '마라탕'); // 안지우고 중간 삽입  
console.log(foodlist);

foodlist.splice(2,0,  '아이스크림', '떡볶이'); //두개도 삽입 가능 
console.log(foodlist);

// 2번부터 끝까지 다지워
foodList.splice(2);
console.log(foodList);


