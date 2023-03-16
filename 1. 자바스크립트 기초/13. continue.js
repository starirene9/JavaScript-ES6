for(var i=1; i<=10; i++){
    if(i%2===0) continue; //i 가 짝수면 skip 하고 계속 하세요 
    console.log(i);
}
console.log(`반복문 중료!`);

//continue 를 skip이라고 생각하자. 
//break는 밑에 있는거 취소~!

while(true) {
    var n =+prompt(`숫자를 입력!`);

    if(n===0) break;  // 끝났지롱 
    else if(n===1) continue; // 메롱메롱 안거림 나머지 수는 메롱 메롱
// 1일때 메롱메롱 스킵된다. 
    alert(`메롱메롱`);
}
alert(`끝났지롱`);