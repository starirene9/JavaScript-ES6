const userList = [{
        account: 'kingroad1234',
        userName: '대길이',
        job: '추노',
        address: '서울',
        hobbys: ['수영', '축구', '테니스']
    },
    {
        account: 'banana1234',
        userName: '빠나나',
        job: '과일',
        address: '서울',
        hobbys: ['푸드파이팅', '테니스']
    },
    {
        account: 'park1234',
        userName: '주차왕',
        job: '발렛파킹',
        address: '경기',
        hobbys: ['책읽기', '드라이빙', '낮잠', '놀기']
    },
    {
        account: 'fire',
        userName: '불꽃남자카리스마',
        job: '게이머',
        address: '서울',
        hobbys: ['잠자기', '스쿼트']
    },
];

// 회원목록에서 회원정보를 출력하는 함수 : 여기에서는 배열을 돌려주기만 함 
function alertUserInfo(wannaSay) { // 2. 대신 wannaSay 함수가 뭔지 알려줘 
    for (const user of userList) { 
        wannaSay(user); // 1. user를 줄테니까 니가 하고 싶은 말 써라 
    }
}
alertUserInfo(u => console.log(`나는 ${u.userName}님이시다. 우하하하`));
//alertUserInfo(function(user){}); // 여기 안에 function만 정해서 보내주기



console.log('=======================1.forEach()');
//배열 고차 함수 : 함수형 프로그래밍의 꽃 for, if, for of 안써도 됨
//forEach() : 배열의 요소를 반복하면서 하나씩 꺼내줌 => 구체적으로 뭐할지는 내가 쓰는 것 
// .forEach(() => {}); 이렇게 생긴 구조 

// const useList = [{},{},{}];
userList.forEach(user => {
    console.log(user.address);
});


const numbers = [10, 20, 30, 40];
let total = 0;

numbers.forEach((n) => {
    total += n;
});
//numbers.forEach(n => total +=n);
console.log(`총합: ${total}`);


console.log('================================2');
//취미가 딱 2개인 회원들만 필터링해서 새로운 배열에 담아줘 
function filter2Hobby() {
    
    const filteredArray = []; // 새로운 빈 배열 생성

    for (const user of userList) {
        if (user.hobbys.length === 2) {
            filteredArray.push(user); 
        }
    }
    return filteredArray;
}

const new2Array = filter2Hobby();
console.log(new2Array);

console.log('================================3');

function filterUserLivedInSeoul() {
    // 새로운 배열 생성
    const filteredArray = [];

    for (const user of userList) {
        if (user.address === '서울') {
            filteredArray.push(user);
        }
    }
    return filteredArray;
}

const new3Array = filterUserLivedInSeoul();
console.log(new3Array);

console.log('===================4.특정 필터조건에 의해 필터링하는 함수 ');

function filter(condition) { // 2. codition 함수가 뭔지 알려주기
    // 새로운 배열 생성
    const filteredArray = [];

    for (const user of userList) {
        if (condition(user)) { //1. 조건절만 바뀌면 됨  
            filteredArray.push(user);
        }
    }
    return filteredArray;
}

const newArray = filter(u => u.hobbys.length >= 3); 
//3. 안에다 condition의 function이 뭔지 알려줌 그리고 그 안의 조건 계속 바꾸기 가능  
console.log(newArray);


console.log('=================5.filter와 map 배열 고차 함수');
// 배열 고차함수 filter() : 걸러줌 (숫자가 줄어들어 있음 ) : filtering 
// 특정 조건에 의해 필터링된 배열을 반환
// 자바가 만들어놓은 filter함수 => predicate : call back 함수 

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = numberArray.filter(n => n % 2 === 0); 
console.log(newArr); // [ 2, 4, 6, 8, 10 ]

const user1 = userList.filter(user => user.account === 'banana1234');
console.log(user1);

// 배열 고차함수 map() : 개수 그대로 모두 다 나옴 [] 로 돌아옴 : mapping 
// 특정 배열에서 특정 조건에 맞는 값들만 따로 모아서 매핑한 배열을 반환 

//const numbers = [10, 20, 30, 40];
const doubles = numbers.map(n => n ** 2);
console.log(doubles); // [ 100, 400, 900, 1600 ]

//const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const plusTwo = numberArray.map(n => n + 2);
console.log(plusTwo);

const userAddress = userList.map(user => user.address);
console.log(userAddress);


//userList에서 원하는 프로퍼티 값을 매핑하는 함수를 만드시오 Map 우리가 풀어서 연습하기~!
function myMap(callback) { // 2. callback이 뭔지 알려줘 
    // 이름만 담을 배열
    const mappedArray = [];

    for (const user of userList) {
        mappedArray.push(callback(user)); // push 안의 코드를 커스텀
        //callback한테 user 넘길게  
    }
    return mappedArray;
}
//callback 함수가 뭐인지에 대한 정의 
const userNames2 = myMap(user => ({
    userName: user.userName,
    address: user.address
})); //객체 괄호 묶어줘야함 

console.log(userNames2); // 이름과 주소가 출력 


console.log('================또 다른 예제 연습 ');

const appleBasket = [{
        color: 'green',
        sweet: 13
    },
    {
        color: 'red',
        sweet: 9
    },
    {
        color: 'pink',
        sweet: 14
    },
    {
        color: 'green',
        sweet: 6
    },
    {
        color: 'green',
        sweet: 10
    },
];

//사과중 녹색이면서 당도가 9이상인 사과만 선별하여 
// 이 사과는 xxx색이며 당도가 xxx입니다.
// 라는 문자열이 모여있는 배열을 리턴하세요. 

const filteredApples =
    appleBasket
    .filter(apple => apple.color === 'green' && apple.sweet >= 9)

console.log(filteredApples);

const mappedApples =
    filteredApples.map(apple => `이 사과는 ${apple.color}색이며 당도는 ${apple.sweet}입니다.`);
console.log(mappedApples);

// 한번에 쓸 수도 있음 
appleBasket
    .filter(apple => apple.color === 'green' && apple.sweet >= 9)
    .map(apple => `이 사과는 ${apple.color}색이며 당도는 ${apple.sweet}입니다.`);

console.log('=================');
//userList에서 서울사는 user들의 첫번째 취미만 배열에 모아서 리턴 


// userList에서 서울사는 user들의 
// 첫번째 취미만 배열에 모아서 리턴 

// const seoulHobbys =
//     userList // [{5},{5},{5},{5}]
//     .filter(user => user.address === '서울') //[{5},{5},{5}] // length는 줄어들 수 있음 그러나 property 속성 수는 똑같음 
//     .map(user => user.hobbys[0]) // ['','',''] // length는 똑같으나 property는 줄을 수 있음 
//     .forEach(hobby => {
//         console.log(`${}회원의 첫번째 취미는 ${hobby}입니다`);
//     });

// console.log(seoulHobbys);

const seoulHobbys =
    userList // [{5},{5},{5},{5}]
    .filter(user => user.address === '서울') //[{5},{5},{5}] 
    .map(user => ({
        name: user.userName,
        firstHobby: user.hobbys[0]
    })) // [{2},{2},{2}] 
    .forEach(info => {
        console.log(`${info.name}회원의 첫번째 취미는 ${info.firstHobby}입니다`);
    });

console.log(seoulHobbys);