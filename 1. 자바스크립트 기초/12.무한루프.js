
var n = 1;
while (true) { //무한 루프에서 While(true)가 좀더 명시적이다. 
    console.log(n++);
    if(n === 10) break; //break 가 꼭 있어야하고 없으면 악성코드이다. 
}
console.log(`안녕하세요`);

// for(;;) {
//     console.log(n++);
//     if(n === 10) break; // 나가는 출구를 항상 만들어 줘야함. 
// }
// console.log(`안녕하세요`);
// 나갈 구멍이 없는 악성 코드 이다. 