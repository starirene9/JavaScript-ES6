/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
   입력받은 값들을 배열에 순차적으로 저장합니다.
   
2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/

var inputs = [];
var total = 0;
while (true) {
   var input = prompt(`숫자를 입력해주세요\n중단하시길 원하면 \'그만'\ 이라고 입력하세요.`);

   if (input === '그만') {
      break;
   }

   inputs.push(input);
   total += +input;

}
alert(`입력하신 숫자 : [${inputs}]\n숫자의 총합:${total}`)



// //숫자를 저장할 배열 : while 내부에 있으면 자꾸 빈 데이터로 돌아감 
// var s = [];

// while (true) {

//     //일단 숫자도 문자열로 입력 받음 
//     var inputData = prompt(`숫자를 입력하세요.\n그만두려면 \'그만\'이라고 입력하세요!`); // 특수문자 표기 

//     if (inputData === '그만') break;

//     //배열에 데이터 저장 : '그만'은 s에 넣으며 안되므로 break 밑에 있어야함 
//     s.push(+inputData);
//     //push는 array만 사용 가능. 뒤에다가 하나씩 입력 
//     //inputData 검사 시 String문자 이므로 앞에 + 넣어서 숫자로 형변환 하여 저장 

// }
// // console.log(inputData);
// // alert(s);

// //총합 구하기 

// var total = 0; //총합을 저장할 변수 
// //담을 변수 of 배열               
// for (var n of s) {
//     total += n;
// }
// // console.log(s);
// alert(`입력한 숫자 목록[${s}]\n 입력한 숫자 총합 : ${total}`);