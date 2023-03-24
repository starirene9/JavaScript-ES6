// 변수 정의, 함수 정의만. 단독으로 외부함수 호출 안 됨 

let x = 'foo'; //왠만하면 전역 변수 쓰지 말것 
console.log(x);

function add(n1, n2) {
    return n1 + n2;
}

//여기서 정의된 변수와 함수를 내보내기 
export {x, add};