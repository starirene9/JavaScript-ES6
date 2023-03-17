// 뒤 pop, push 앞 shift, unshift 

var pets = ['멍멍이', '야옹이', '쩝쩝이'];
console.log(pets);
console.log("========================1");

// push 함수 : 뒤에 데이터 추가 (연결 리스트 방식)
pets.push('징징이'); 
pets.push('어흥이');
var newLength = pets.push('거북이', '물고기');
// html 요소는 태그 쌍을 말하고 프로그래밍에서는 요소를 배열 안의 저장된 데이터
// param은 괄호 안의 요소 
console.log(pets);
console.log(newLength); // 7 개라고 알려줌 : MDN에 push 검사하면 한국어로 정보 나옴 
console.log("========================2");

pets.pop(); // 한 번 할때마다 맨 끝 데이터 삭제 
console.log(pets);

console.log("======================pop/ push 개념의 반대인 shift 와 unshift ");
//shift() :  배열의 맨 첫번째 요소 제거 
pets.shift(); // 맨 첫번째 멍멍이 사라짐 

console.log(pets); 

//unshift(..items) : 배열에 맨 첫번째 데이터 추가 
pets.unshift('짝짝이');
console.log(pets);