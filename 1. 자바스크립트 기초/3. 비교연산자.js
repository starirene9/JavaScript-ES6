
var a = 5;
var b = '5';

console.log(a == b); // 같은게 아닌데 true 라고 함 
console.log(a === b); // === 두개 짜리 없다고 생각하고 무조건 세개라고 생각
console.log(a !==b);

console.log('========================');

console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === '0');
// 다 false 떠야하는데 두개까지를 안그래...세 개짜리 써라 === 

// 문자 대소비교
console.log('========================');
console.log('ace' < 'ade');
// A:65, a:97 두 개 기억!!! B:66 소문자가 대문자 보다 숫자 큼 
console.log('cobra' < 'zebra');
// 첫판 부터 z가 이김 


