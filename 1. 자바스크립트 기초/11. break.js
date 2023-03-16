
// 50000번의 루프 중 1~10 사이의 랜덤 숫자 중에서 
// 3이 나오면 반복을 중간에 멈추고 싶다.
for(var i=0; 1 <50000; i++){
    var rn=Math.floor(Math.random()*10)+1; 
    //반복문 안으로 들어가야함 안 그러면 똑같은 수로 5만번 돌아서 무한루프 빠짐 
    console.log(rn);
    if(rn === 3) {
        console.log(`반복문 종료 : ${i}`);
        break;  
        // 중간에 찾으면 반복문 강제 종료 
        // break 하단의 코드 모두 취소 됨 : 칼 같이 나감
    }
}

// 중첩 반복문에서의 break 작동

for(var i=0;i<3;i++){
    for(var j=0;j<2;j++){
        if(i === j) {
            break;  //break는 내부만 강제 종료 시킨다.  
        }
        console.log(`[${i},${j}]`);
    }
}
console.log(`=================`);
// i : 0 1 2 
// j : 0 1
// 6 바퀴 