// // 별 모양그리기 

// var height = +prompt('정사각형 상자 한 면의 길이를 정수로 입력하시오.');
// starMark = '';

// for (var i=0; i<height ; i++) {
//     for (var j=0; j<height ; j++) {
//         starMark += '* ';
//     }
//     starMark += `\n`;
// }
// alert(starMark);



//구구단 3단 출력

// var result = '';

// for (var line = 1; line <= 9; line++) { // 9번 반복한다. 
//     console.log(`3 X ${line} = ${3*line}`);
// }


// 구구단 2단부터 9단까지 출력 시 : 레벨의 값만 바뀌고 나머지는 다 똑같음 

// var result = '';

// for (var n=2; n<=9 ;n++) {
//     for (var line = 1; line <= 9; line++) { // 9번 반복한다. 
//         console.log(`${n} X ${line} = ${n*line}`);
//     }
//     console.log(`====================`);
// }




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

// var length = +prompt(`한 변의 길이?`);

// var star = ``;

// for (var i=0; i<length; i++){ // 줄을 만들고 
//     for (var j =0; j<length; j++) { // 별을 제어 
//         star += `* `; //*** 
//     }
//     star += `\n`; // 나왔을때 엔터쳐서 줄 바꿈 
// }
// alert(star);