alert(`다나카의 연애 고수 앱에 오신것을 환영합니다.\n톡 까놓고 입력해주세요.`);

var Woman = 1,
    Man = 2,
    Secret = 3; //성별 숫자를 상수로 선언 

while (true) {
    var sex = +prompt(`본인의 성별을 선택해주세요.\n[ 1. 여자 2. 남자 3. 밝히고 싶지 않음 ]`);
    if (sex === Woman) {
        var datingLists = ['다나카', '싸가지재벌', '똑똑한 꼰대', '평범남'];
        alert(`'여자'를 선택하셨습니다.\n기분 좋은 매칭을 시작해볼까요?`);
    } else if (sex === Man) {
        var datingLists = ['수지', '싸가지재벌', '똑똑한 꼰대', '평범녀'];
        alert(`'남자'를 선택하셨습니다.\n기분 좋은 매칭을 시작해볼까요?`);
    } else if (sex === Secret) {
        var datingLists = ['동물애호가', '하리수', '박애주의자', '샘스미스'];
        alert(`'밝히고 싶지 않음'을 선택하셨습니다.\n기분 좋은 매칭을 시작해볼까요?`);
    } else {
        alert(`성별을 제대로 입력해주세요.`);
        continue;
    }
    break;
}

while (true) {
    var choice = prompt(`[${datingLists}] 중 원치 않는 데이트 상대를 입력하세요.\n♡♥︎♡♥︎♡♥︎♡♥︎♡♥︎♡♥︎♡♥︎♡♥︎♡♥︎♡\n중단하시길 원하시면 \'꺼져'\ 라고 입력하세요.`);

    var delMember = datingLists.indexOf(choice);

    if (choice === '꺼져') {
        alert(`다음에 더 좋은 매칭 준비하겠습니다. 감사합니다.`);
        break;
    }

    if (delMember === -1) {
        alert(`${choice} 은/는 잘못된 이름입니다. 다시 입력해 주세요.`);
    } else {
        datingLists.splice(delMember, 1);
        alert(`${choice}님이 삭제되었습니다.\n현재 남은 상대 : [${datingLists}]`);
    }

    if (datingLists.length === 1) {
        alert(`${datingLists}님과 매칭되셨습니다.\n즐거운 데이트 하세요!`);
        break;
    }
}
