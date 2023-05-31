// 즉시 실행 함수 (function(){} :정의구간)(호출구간); 
// const increase = (function(){})();
const increase = (()=>{
    let count = 0;
    return () => ++ count;
})();

const decrease = (()=>{
    let count = 0;
    return () => -- count;
})();

console.log(increase()); //1
console.log(increase()); //2
console.log(decrease()); //-1 : 각자의 count가 이름은 똑같아도 영역이 다르니까 별개임

//===========이럴땐 어떻게 해야할까? 카운트를 하나만 
function counterClosure () {

    let count = 0; // 결론 : 카운트를 공유해야한다.

    function increase () {
        return ++count; 
    }
    function decrease () {
        return --count;
    }
    return { increase, decrease }; // 이 객체가 리턴됨 
}

// const counter = counterClosure(); // counter : 객체(increase, decrease가 들어옴)
// // 객체 안에 있는 함수를 하나씩 추출 중 
// const increase = counter.increase; 
// const decrease = counter.decrease;

// console.log(increase()); //1
// console.log(increase()); //2
// console.log(decrease()); //1

//=====================화살표 함수로 간편화 시키기 ????
// 화살표 + 즉시실행함수 
const counter = (() => {
    let count = 0;
    return {
        increase: () => ++count,
        decrease: () => --count
    };
})();

// const { increase, decrease } = counter;

// console.log(increase()); //1
// console.log(increase()); //2
// console.log(decrease()); //1

//=====================콜백 클로저 짬뽕 
// function coutnerWithCbClosure() {

//     let count = 0;

//     function process (callback) { // callback 함수 받아오기 
//         return count = callback(count); //다시 갱신을 해줘야함 
//     }
//     return process; 
// }
// // coutnerWithCbClosure() 호출 시 process 전체가 리턴 됨 
// const counter_ = coutnerWithCbClosure(); 
// //counter_ 는 return이 process이기에 61-64 함수 자체이다. 

// // counter_(callback)
// // counter_(function(){}) 을 넣어 줌 <= 여기를 사용자가 정의 해야함 
// console.log(counter_(c => ++c)); //1  
// console.log(counter_(c => c += 3)); //4
// console.log(counter_(c => c **= 2)); //16


const counter_ = (() => {

    let count = 0;
    return callback => count = callback(count);

})();

console.log(counter_(c => ++c)); //1 
console.log(counter_(c => c += 3)); //4
console.log(counter_(c => c **= 2)); //16