//구구단 3단 출력
//1. 손수 어떻게 쓸지 생각
// 3 * 1 = 3 
// 3 * 2 =6
// 1부터 9까지 올라가는 변하는 수(line) => 변수 설정  
var line = 1;
var level = 3; 
// 단수를 바꾸고 싶으면 level 변수 삽입 
// 사용자에게 단을 입력 받고 싶으면 ? level에 +prompt() 적용
//랜덤으로 단을 넣고 싶으면 ? 랜덤함수 적용 
while (line <= 9) {
    console.log(`level * ${line} = ${level * line}`);
    line++;
}

// for 문으로 돌리면?
// for(var line = 1; line <= 9 ; line++){
//     console.log(`3 * ${line} = ${3 * line}`);
// }

//===========================================
// 구구단 2단부터 9단까지 출력 시 : 레벨의 값만 바뀌고 나머지는 다 똑같음 

for (var level = 2; level <= 9; level++) { // 단수를 제어 

    for (var line = 1; line <= 9; line++) {
        console.log(`${level} x ${line} = ${level * line}`);
    }
    console.log('================')
}

//========================
var x = 1 ;

for(var i = 0; i < 3; i++){
    console.log(); //얘는 3바퀴 돔 
    for(var j = 0; j < 4; j++){
        console.log(`hello${x++}`); // 안 쪽은 중첩 : 3*4=12바퀴 돎
    }
    console.log(); //바깥쪽 : 3바퀴 돔 
}
