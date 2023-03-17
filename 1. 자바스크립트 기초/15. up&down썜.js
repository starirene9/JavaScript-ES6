// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

// =======case 1 =============
// 실제 정답 
// var secret = Math.floor(Math.random() * 100) + 1; // 랜덤 한수는 변하면 안됨 
// console.log(secret); //콘솔에 확인하기 위한 용도 

// while (true) {
//     // 숫자를 입력 받고 검사 하는 범위가 반복 되어야 한다 : 이 부분만 while로 둘르기
//     // 사용자 입력 답
//     var answer = +prompt(`숫자를 입력하세요![1 ~ 100]`); // 사용자 편의성 올리기

//     if (secret === answer) {
//         alert(`정답입니다!`);
//         break; // 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료
//     } else if (secret > answer) {
//         alert(`UP!!`);
//     } else {
//         alert(`DOWN!!`);
//     }
// }

// //======= case 2 =============
// 사용자들은 입력 기회가 5번으로 제한된다. 
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

// //사용자의 초기 입력 기회 
// var INITCOUNT = 5; // 상수는 대문자 작성하고 고칠때 f2, f6 사용 
// //사용자의 입력 기회 : 입력이 끝나는 시점에 줄어들어야 함 
// var countDown = INITCOUNT; 
// //init 값 5를 왼쪽 countdown에 저장 후 뒤에서 -- 한다. 

// var secret = Math.floor(Math.random() * 100) + 1; 
// console.log(secret); 

// while (true) {

//     var answer = +prompt(`숫자를 입력하세요![1 ~ 100]`); // 입력 끝나는 시점

//     countDown--; //에 숫자를 하나 줄어든다.

//     if (secret === answer) {
//         alert(`정답입니다! ${INITCOUNT-countDown}번만에 맞췄습니다.`);
//         break; 
//     } else if (secret > answer) {
//         alert(`UP!!`);
//     } else {
//         alert(`DOWN!!`);
//     }

//     // 추가 게임 종료 조건 : 카운트 다운 남은거 없니? 
//     if (countDown<=0) {
//         alert(`응 너 졌어~~ 정답은 ${secret}이었음ㅋㅋㅋ`);
//         break; // 졌으면 게임을 종료시킴. 
//     } else {
//         alert(`${countDown}번의 기회가 남았습니다.`);
//     }
// }


//사용자는 게임 시작전에 난이도를 설정할 수 있다. 
// 난이도는 상, 중, 하 난이도가 존재하며 난이도별 입력 횟수제한이 다르다.
// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.



while (true) {

    var HIGH = 1,
        MIDDLE = 2,
        LOW = 3;
    //레벨도 상수 쓰는게 좋음

    var INITCOUNT; // 상수는 대문자 작성

    while (true) {
        var level = +prompt('난이도를 선택하세요!\n [1. 상(3번의 기회) 2. 중(6번의 기회) 3. 하(10번의 기회)');
        if (level === HIGH) {
            INITCOUNT = 3;
        } else if (level === MIDDLE) {
            INITCOUNT = 6;
        } else if (level === LOW) {
            INITCOUNT = 10;
        } else {
            alert(`난이도를 숫자로 다시 입력하세요!`);
            continue;
        }
        break;
    } //마지막 제대로 입력 안 한경우 다시 돌아가게 하기 위해 무한 루프

    // 사용자의 남은 입력 기회
    var countDown = INITCOUNT;

    var secret = Math.floor(Math.random() * 100) + 1;
    console.log(secret);

    //입력 최소값, 최대값 : 반복하면 안 되는 구간 
    var minValue = 1,
        maxValue = 100;

    //게임 종료 플래그 
    var gameEndFlag = false;  
    // 게임종료가 되지 않은 상태이기 때문에 false로 설정 : 게임 종료 되는 시점에 true

    while (true) {

        var answer = +prompt(`숫자를 입력하세요![${minValue} ~ ${maxValue}]`); // 입력 끝나는 시점

        //입력이 범위안의 값인가?
        if (answer < minValue || answer > maxValue) {
            alert(`범위 안의 값을 입력하세요!`);
            continue; //위로 올려 보내기 
        }

        countDown--; //에 숫자를 하나 줄어든다.

        if (secret === answer) {
            alert(`정답입니다! ${INITCOUNT-countDown}번만에 맞췄습니다.`);
            gameEndFlag = true;
            break;
        } else if (secret > answer) {
            alert(`UP!!`);
            minValue = answer + 1;
        } else {
            alert(`DOWN!!`);
            maxValue = answer - 1;
        }

        // 추가 게임 종료 조건 : 카운트 다운 남은거 없니? 
        if (countDown <= 0) {
            alert(`응 너 졌어~~ 정답은 ${secret}이었음ㅋㅋㅋ`);
            gameEndFlag = true;
            break; // 졌으면 게임을 종료시킴. 
        } else {
            alert(`${countDown}번의 기회가 남았습니다.`);
        }
    }  //end game loop // while 문 끝남
    if(gameEndFlag) {
        var exitFlag = confirm(`한 판 더?`);
        if(!exitFlag) { //exitFlag === false와 똑같은 거임 : 취소를 누름 
            alert(`수고하셨습니다!`);
            break;
        }
    }
} //end all game loop // confirm 묻는 부분