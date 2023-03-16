

// 10 ~0까지 아래로 카운트 다운
var count =10;

console.log(count);
count--;
// 이렇게 10번 반복하면 10 - 0 까지 카운트 다운이 되긴하지만  

// 루프 개념 : 카운트가 0이상일 동안에 이걸 하겠다
while (count>= 0) {
    console.log(count);
    count--;
}
//코드는 위에서 아래로 내려오지만, while로 다시 올라가서 아래 위 반복 : 횟수를 모를 때 사용 --ex) 스페이스 바를 뗄떼까지 반복 

// 1부터 10까지의 누적 총합 구하기 공식~! (10번 반복해서 1부터 10까지 덧셈 구하면 됨)

var total =0; 
var n=1; // 1을 담을 제어 변수 (초기값: begin의 개념 : 1부터~)
While (n<=10) { //2. 조건식 (끝값 : end)
    
    total += n;// 반복하고 싶은 코드 : total에 n을 누적 

    n++; //3. 증감식 (단계: step)
}
console.log(`총합 : ${total}`);
// =====기억해야할 세가지 begin end 증감식


// 4-7까지의 합 구하고 싶으면 
var total=0; 
var n=4; //begin 
while(n<=7){ //end
    total+= n;
    n++; //증감식
}

//1~100까지의 홀수의 누적 총합 구하기 
var total=0;
var n=1; //begin
while(n<=100){ //end
    if(n%2===1){ //반복 하고 싶은것 : 조건을 줘서 
        total += n
    } 
    n++; //증감식 
}
console.log(`총합: ${total}`);