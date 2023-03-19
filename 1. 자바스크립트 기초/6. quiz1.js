
// //x - y까지의 누적합
// var x = +prompt('첫번째 숫자를 입력!');
// var y = +prompt('두번째 숫자를 입력!');

// //y값이 x 보다 커도 괜찮음 
// if (x > y) {
//     //swap
//     var t;
//     t = x;
//     x = y;
//     y = t;
// }

// var total = 0;
// var n = x; //여기랑 begin 

// while(n <= y) { //여기를 바꾸면 됨 end
//     //반복코드
//     total += n; 
//     n++; //증감식 
// }
// console.log(`${x} ~ ${y}까지의 누적합: ${total}`);

// //==============================================

// var total = 0;
// for(var n = x;n <= y;n++){
//     total += n;
// }
// console.log(`${x} ~ ${y}까지의 누적합: ${total}`);