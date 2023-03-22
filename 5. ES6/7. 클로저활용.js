//즉시 실행 함수 (function(){} :정의구간)(호출구간); 
// const increase = (function(){})();
// const increase = (()=>{
//     let count = 0;
//     return () => ++ count;
// })();

// const decrease = (()=>{
//     let count = 0;
//     return () => -- count;
// })();

// console.log(increase()); //1
// console.log(increase()); //2
// console.log(decrease()); //-1 : 각자의 count가 이름은 똑같아도 영역이 다르니까 별개로 놀고 있음 

//===========이럴땐 어떻게 해야할까? 
// function counterClosure () {

//     let count = 0; // 결론 : 카운트를 공유해야한다.

//     function increase () {
//         return ++count; 
//     }
//     function decrease () {
//         return --count;
//     }
//     return { increase, decrease};
// }

// const counter = counterClosure(); // counter : 객체 이다 (increase, decrease가 들어옴)
// const increase = counter.increase; // 객체 안에 있는 함수를 하나씩 추출 중 
// const decrease = counter.decrease;

// console.log(increase()); //1
// console.log(increase()); //2
// console.log(decrease()); //1

//=====================화살표 함수로 간편화 시키기 ????
//화살표 + 즉시실행함수 
// const counter = (() => {
//     let count = 0;
//     return {
//         increase: () => ++count,
//         decrease: () => --count
//     };
// })();

// const { // 객체 타입 
//     increase,
//     decrease
// } = counter;

// console.log(increase()); //1
// console.log(increase()); //2
// console.log(decrease()); //1

//=====================콜백 클로저 짬뽕 

// function coutnerWithCbClosure() {

//     let count = 0;

//     function process (callback) { // callback 이 뭔지 알려줘 
//         return count = callback(count); //사용자에게 커스텀 , 카운트값 재설정
//     }
//     return process; // coutnerWithCbClosure() 호출 시 process 전체가 리턴 됨 
// }

// const counter_ = coutnerWithCbClosure(); //counter_ 는 return이 process이기에 함수 자체이다. 

// console.log(counter_(c => ++c)); //1 counter_(callback)의 기능을 괄호 안에 넣어 줌 
// console.log(counter_(c => c += 3)); //4
// console.log(counter_(c => c **=2)); //16


const counter_ = (() => {

    let count = 0;
    return callback => count = callback(count);

})();

console.log(counter_(c => ++c)); //1 
console.log(counter_(c => c += 3)); //4
console.log(counter_(c => c **= 2)); //16