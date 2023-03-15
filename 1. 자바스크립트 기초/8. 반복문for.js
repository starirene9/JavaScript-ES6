//횟수 지정 반복문 5바퀴 루프
// for은 세개가 모여있어서 몇 바퀴 돌지 바로 보임 

var i=0; //1. 제어변수 선언

while(i <= 5) { //2. 조건식  //5. 다시 while 로 올라온다. 
    console.log('hello');  //3. 반복실행(얘가 먼저 실행 )
    i++; //4. 증감식 
}

for(var i=0;i <=5; i++) { //4 i++
    console.log('hello'); //3
}