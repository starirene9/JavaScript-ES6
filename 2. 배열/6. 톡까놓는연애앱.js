alert(`\다나카의 '이상형과 무조건 데이트앱'\ 에 오신것을 환영합니다.\n톡 까놓고 입력해주세요.`);

var WOMAN = 1,
    MAN = 2,
    SECRET = 3;

while (true) {

    var 여자 = 1;

    var sex = +prompt(`본인의 성별을 선택해주세요.\n[ 1. 여자 2. 남자 3. 밝히고 싶지 않음 ]`);
    if (sex === WOMAN) {
        var datingLists = ['다나카', '싸가지재벌', '꼰대', '평범남'];
        alert(`성별 : \'여자'\를 선택하셨습니다.\n누가 나에게 데이트 신청을 했는지 확인해볼까요~?`);
    } else if (sex === MAN) {
        var datingLists = ['수지', '싸가지재벌', '꼰대', '평범녀'];
        alert(`성별 : \'남자'\를 선택하셨습니다.\n누가 나에게 데이트 신청을 했는지 확인해볼까요~?`);
    } else if (sex === SECRET) {
        var datingLists = ['동물애호가', '하리수', '싸가지재벌', '샘스미스'];
        alert(`성별 : \'밝히고 싶지 않음'\을 선택하셨습니다.\n누가 나에게 데이트 신청을 했는지 확인해볼까요~?`);
    } else {
        alert(`성별을 제대로 입력해주세요.`);
        continue;
    }
    break;
}


while (true) {

    var choice = prompt(`[${datingLists}] 중 원치 않는 데이트 상대를 입력하세요.\n원하는 상대가 없으면 \'꺼져'\ 라고 입력하세요.`);

    if (choice === '꺼져') {
        alert(`다음에 더 좋은 매칭 준비하겠습니다. 감사합니다.\n♡♥︎♡♥︎♡♥︎♡♥︎♡♥︎♡♥︎♡♥︎♡♥︎♡♥︎♡`);
        break;
    }

    var delMember = datingLists.indexOf(choice);

    if (delMember === -1) {
        alert(`${choice} 은/는 잘못된 이름입니다. 다시 입력해 주세요.`);
        continue;
    } else {
        datingLists.splice(delMember, 1);
        alert(`${choice}님이 삭제되었습니다.\n현재 남은 상대 : [${datingLists}]`);
    }

    while (datingLists.length === 2) {

        var answer = prompt(`혹시 대체하고 싶은 상대가 있으신가요?\n[네], [아니오] 중 입력하세요.`);

        if (answer === '네') {
            var modMember = prompt(`[${datingLists}]수정할 상대를 입력하세요`);
            if (datingLists.includes(modMember)) {
                var newDatingName = prompt(`새로운 데이트 상대를 입력하세요.`);

                datingLists[datingLists.indexOf(modMember)] = newDatingName;
                alert(`새로운 데이트 상대로 수정 완료! \n현재 남은 상대 : [${datingLists}]`)
            }

        } else if (answer === '아니오') {
            alert(`기존 데이트 상대로 진행합니다.`);
        } else {
            alert(`네 혹은 아니오를 입력하세요.`);
            continue;
        }
        break;
    }

    if (datingLists.length === 1) {
        alert(`${datingLists}님과 매칭되셨습니다.\n즐거운 데이트 하세요!\n♡♥︎♡♥︎♡♥︎♡♥︎♡♥︎♡♥︎♡`);
        break;
    }
}