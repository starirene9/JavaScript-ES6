
const emp = {
    empName: '빡빡이',
    age : 29,
    hireDate: '2014-01-01',
    birthDay: '1995-12-31'
};

// // 배열과 다르게 객체는 순서 상관이 없고 내가 원하는 키값만 꺼내 쓰기 가능 
// const {empName, age, birthDay, hireDate} = emp; // 원본 그대로 있음 
// console.log(`${empName}님의 나이는 ${age}살이고 생일은 ${birthDay}입니다.`);
// //emp.age emp.hireDate와 같이 점 을 자꾸 붙이는게 성가심 

// //키 값을 다음과 같이 변경 해 줄수도 있다 : 겹치는 이름 변경 쌉가능 
// const {empName : en, age :a, birthDay :bd} = emp;
// console.log(`${en}님의 나이는 ${a}살이고 생일은 ${bd}입니다.`);

// 따로 분해해서 나누고 싶다: spread 사용 : 배열을 오른쪽에다가 둔다 
// const {empName, age, ...others} = emp;

// console.log(empName);
// console.log(age);
// console.log(others);

//객체 안전 복사 : 스프레드 
const copyEmp = {...emp}; //원본은 변하지 않고 복사본만 뜸 
console.log(copyEmp);

// //추가기능 까지 쌉가능 
// const copyEmp = {...emp, address: '서울시', hobbies: ['놀고먹기', '낮잠'], empName: '망둥어'};
// console.log(copyEmp);