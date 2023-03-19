/*
    시스템은 1~20사이의 무작위의 정수 2개를 생성하여 
    덧셈 문제를 출제해야 한다.

    사용자는 출제된 문제의 정답을 입력할 수 있어야 한다.

    시스템은 사용자의 입력값을 확인해서 정답인지 오답인지를
    알려줘야 한다.

    시스템은 지속적으로 다른 문제를 출제하여 사용자가 0을 입력할 때까지
    답을 계속 입력받고 검증해줘야 한다. => 무한루프 
*/





var correctCount = 0,
    wrongCount = 0;

var i = 1;

while (true) {

    random1 = Math.floor(Math.random() * 21) + 1;
    random2 = Math.floor(Math.random() * 21) + 1;

    var answer = +prompt(`즐겁게 문제를 푸시다가 지겨우면 0을 누르세요
                            \n=====================
                            \nQ${i++}. ${random1} + ${random2} = ??`); //i++ 내부에서 선언 가능하다 

    if (answer === 0) {
        alert(`게임을 종료합니다.`);
        break;
    }

    var realAnswer = random1 + random2;

    if (answer === realAnswer) {
        correctCount++;
        alert(`정답입니다!`);
    } else {
        wrongCount++;
        alert(`틀렸어요~`);
    }
    
}
alert(`정답횟수 : ${correctCount}회, 틀린횟수 : ${wrongCount}회`);






// //문제 번호 : 바깥에 있어야됨 안그러면 while 안에서 반복을 돌때 계속 1이됨 
// var questionNumber = 1;

// //정답횟수, 오답횟수
// var correctCount = 0,
//     wrongCount = 0;

// var message = `~~~~~~~~ 난이도를 설정합니다 ~~~~~~~~~~~~
// [1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]`;
// var level = +prompt(message);

// //난이도에 따른 숫자 최대값
// var maxNumber;

// if (level === 1) {
//     maxNumber = 100;
// } else if (level === 2) {
//     maxNumber = 50;
// } else if (level === 3) {
//     maxNumber = 20;
// } else {
//     maxNumber = 9999;
// }

// while (true) {

//     //랜덤 정수 2개 생성 : 안에 있어야 수가 겹치지 않음
//     var fistNumber = Math.floor(Math.random() * maxNumber) + 1;
//     var secondNumber = Math.floor(Math.random() * maxNumber) + 1;

//     //랜덤 부호를 결정할 정수 생성 : 0 1 2 랜덤 숫자 생성 
//     var markNum = Math.floor(Math.random() * 3);

//     //기호를 저장할 변수 
//     var mark;

//     //실제 정답
//     var realAnswer;

//     if (markNum === 0) {
//         mark = '+';
//         realAnswer = fistNumber + secondNumber;
//     } else if (markNum === 1) {
//         if (fistNumber === secondNumber) continue; //skip 올려보내기
//         //같다면 다시 올려서 새 수 받기 안그러면 값이 0이 나와서 종료될 가능성이 있음 
//         else if (fistNumber < secondNumber) {
//             //두번째 숫자가 큰 경우 옮기기 => 뺄셈의 경우 앞의 수가 무조건 크게 만듬 
//             //swap
//             var temp = fistNumber;
//             fistNumber = secondNumber;
//             secondNumber = temp;
//         }
//         mark = '-';
//         realAnswer = fistNumber - secondNumber;
//     } else {
//         mark = 'x';
//         realAnswer = fistNumber * secondNumber;
//     }

//     while (true) {
//         //사용자에게 문제를 내고 정답을 입력받기
//         var userAnswer = prompt(`Q${questionNumber++}. ${fistNumber}${mark}${secondNumber}=??`);
//         //여기서 안에서 ++ 붙이기, 출력 하고 나서 하나씩 증가. ++의 위치 중요~!
//         //prompt 앞에 + 빼야함 


//         if (userAnswer === '') {
//             continue; //위 끝까지 올라가지 않게 여기에서만 반복하도록 
//         } else {
//             userAnswer = +userAnswer;
//             break;
//         }
//     }

//     // 게임 종료 조건 
//     if (userAnswer === 0) {
//         alert(`게임을 종료합니다!`);
//         break;
//     }

//     //정답 검증
//     if (userAnswer === realAnswer) {
//         alert(`정답입니다!`);
//         correctCount++;
//     } else {
//         alert(`틀렸습니다!`);
//         wrongCount++;
//     }
// } //end each game
// alert(`정답 횟수 : ${correctCount}회, 틀린 횟수: ${wrongCount}회`)



// //2. 문제 번호 : 바깥에 있어야됨 안그러면 while 안에서 반복을 돌때 계속 1이됨 
// var questionNumber = 1;

// //정답횟수, 오답횟수 while 바깥 쪽 선언 : 아니면 기껏 누적했는데 다시 돌아올때 또 0됨 
// var correctCount = 0,
//     wrongCount = 0;

// while (true) {

//     //랜덤 정수 2개 생성 : 안에 있어야 수가 겹치지 않음
//     var fistNumber = Math.floor(Math.random() * 20) + 1;
//     var secondNumber = Math.floor(Math.random() * 20) + 1;

//     //사용자에게 문제를 내고 정답을 입력받기
//     var userAnswer = +prompt(`Q${questionNumber++}. ${fistNumber}+${secondNumber}=??`);
//     //여기서 안에서 ++ 붙이기, 출력 하고 나서 하나씩 증가. ++의 위치 중요~!
//     if (userAnswer === 0) {
//         alert(`게임을 종료합니다!`);
//         break;
//     }
//     //실제 정답
//     var realAnswer = fistNumber + secondNumber;

//     //정답 검증
//     if (userAnswer === realAnswer) {
//         alert(`정답입니다!`);
//         correctCount++; //정답인 경우에 correctCount 증가 -> 선언 되어야함
//     } else {
//         alert(`틀렸습니다!`);
//         wrongCount++; //정답인 경우에 wrongCount 증가 
//     }
// } //end each game
// alert(`정답 횟수 : ${correctCount}회, 틀린 횟수: ${wrongCount}회`)




// //  1. //문제 번호 : 바깥에 있어야됨 안그러면 while 안에서 반복을 돌때 계속 1이됨 
// // var questionNumber = 1;

// // while (true) {

// //     //랜덤 정수 2개 생성 : 안에 있어야 반복문이 실행 될 떄 새로운 수가 생성
// //     var fistNumber = Math.floor(Math.random() * 20) + 1;
// //     var secondNumber = Math.floor(Math.random() * 20) + 1;

// //     //사용자에게 문제를 내고 정답을 입력받기
// //     var userAnswer = +prompt(`Q${questionNumber++}. ${fistNumber}+${secondNumber}=??`);
// //     //후위에 ++ 붙이기, 출력 하고 나서 하나씩 증가. ++의 위치 중요~!
// //     if (userAnswer === 0) { // if 두번 쌉가능 
// //         alert(`게임을 종료합니다!`);
// //         break;
// //     }
// //     //실제 정답
// //     var realAnswer = fistNumber + secondNumber;

// //     //정답 검증
// //     if (userAnswer === realAnswer) {
// //         alert(`정답입니다!`);
// //     } else {
// //         alert(`틀렸습니다!`);
// //     }
// // }