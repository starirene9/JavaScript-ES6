// var star= +prompt('정사각형을 그립니다. 높이는 얼마입니까?');

// var box='';

// for(var n = 0; n < star ; n++){
//     for(var k = 0; k < star ; k++){
//         box += '*';
//     }
//     box += '\n';
// } 
// prompt(box);


//=========================================================

//1. 한 변의 길이를 입력받는다. 
var length = +prompt(`한 변의 길이?`);

var star = ``;

//2. 
// console.log(`* * * *`);
// console.log(`* * * *`);
// console.log(`* * * *`);
// console.log(`* * * *`);
// 똑같은 코드가 4번 반복 => 횟수를 아는 for 문

for (var i=0; i<length; i++){ // 줄을 만들고 
    for (var j =0; j<length; j++) { // 별을 제어 
        star += `* `; 
    }
    star += `\n`; // 나왔을때 엔터쳐서 줄 바꿈 
}
alert(star);


