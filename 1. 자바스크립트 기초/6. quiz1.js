//x - y까지의 누적합
var x = +prompt('첫번째 숫자를 입력!');
var y = +prompt('두번째 숫자를 입력!');

if (x > y) {
    //swap
    var t;
    t = x;
    x = y;
    y = t;
}

var total = 0;
var n = x; //여기랑 

while(n <= y) { //여기를 바꾸면 됨 
    //반복코드
    total += n;
    n++;
}
console.log(`${x} ~ ${y}까지의 누적합: ${total}`);
