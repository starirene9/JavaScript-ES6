//======배열 구조 분해 [... ]
// const userNames = ['김철수', '강감찬', '박영희'];
// const [kim, kang, park] = userNames; //오른쪽에 배열만 오면 됨 

// console.log(kim); // 김철수
// console.log(kang); // 강감찬
// console.log(park); // 박영희

// const [firstObj] = [{id:1}, {id:2}, {id:3}]; 
// console.log(firstObj);

// // filter와 함께 응용
// const [firstObj] = [{id:1}, {id:2}, {id:3}]
//                     .filter(obj => obj.id >=2);
// console.log(firstObj); //{ id: 2 }

//변수 교환하기 (빈 컵에다가 교환할 필요가 없음)
// let first = 10, second = 20;
// [second, first] = [first, second];
// console.log(first); //20
// console.log(second); //10 

// 앞에 2개는 변수에 각각 넣고 나머지는 다시 배열로 묶고 싶다. 
// const numbers = [1,3,5,7,9,11];

// const copyNumbers = numbers.slice(); // 카피본을 뜬다

// const one = copyNumbers.shift(); // 카피본에서 1 제거 되면서 one 값에 리턴 됨 
// const three = copyNumbers.shift(); // 카피본에서 3 제거 되면서 one 값에 리턴 됨 
// const others = copyNumbers;

// console.log(one); //1
// console.log(three); //3
// console.log(others); // [ 5, 7, 9, 11 ]
// console.log(numbers); // 원본 그대로 유지 

//============ES6는 위의 것처럼 하지 않고 아래것 처럼 하면 됨 
// const numbers = [1,3,5,7,9,11];
// const [one, three, ...others] = numbers;
// console.log(one); //1
// console.log(three); //3
// console.log(others); // [ 5, 7, 9, 11 ]
// console.log(numbers); // 원본 그대로 유지 

//============스프레드로 배열 간편복사 : ...으로 
// // 스프레드 처럼 펼쳐서 한번에 복사 됨 => 유사배열을 배열로 만들때도 씀
// const foods = ['감튀', 'DQPC', '징거버거'];
// //const copyFoods = foods ; // 주소만 복사 foods[0]='콜라'로 바뀌면 같은 주소를 공유하는 copyFoods 도 바껴져 있지만..
// const copyFoods = [...foods, '아메리카노']; // 실제 데이터 복사  + '아메리카노' 추가 가능하다 
// console.log(copyFoods); 