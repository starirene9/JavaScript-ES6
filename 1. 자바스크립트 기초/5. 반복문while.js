

// 10 ~ 0 카운트 다운
var count =10;

// console.log(count);
// count--;
// 이 짓을 열번 반복하면 10 - 0 까지 카운트 다운이 됨 

while (count>= 0) {
    console.log(count);
    count--;
}
// 음악 중지버튼을 누를때까지 
// 항상 위에서 아래로 내려갔다가 다시 올라가는 구조로 감 
// 횟수를 모르면 while 횟수를 알면 for을 쓰면 된다. 

//1~10까지 누적총합
var total =0;
var n=1; //제어변수 (초기값: begin)
While (n<=10) { //조건식 (끝값 : end)
    //반복코드만 바꿔주면 된다 
    total += n;
    n++; //증감식 (단계: step)
}
console.log(`총합 : ${total}`);
