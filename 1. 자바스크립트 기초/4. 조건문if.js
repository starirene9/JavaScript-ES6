

var age = Math.random();
// 0이상 1미만의 랜덤 숫자를 갖다준다. 
alert(`age:${age}살`);

Math.random() 
0.0 <= ~ <1.0 (0이상 1미만의 숫자)
Math.random() * 100 
0.0 <= ~ <100.0 (0이상 100미만의 숫자)
Math.floor(Math.random()*100) //Math.floor (소수점을 버림) <-> Math.ceil // 안쪽 함수가 먼저 실행됨 
0 <= ~ <100 (0이상 100미만의 정수)
Math.floor(Math.random()*100)+1 // Math.floor : 소숫점을 바닥에 버린다.
0 + 1 <= ~ <100 +1 (1부터 100까지의 랜덤 정수를 만들어냄~!)

공식 :x 이상 y 이하의 정수 난수
                            y이하 난수정수  x이상
Math.floor(Math.random() * (y - x +1 )) + x
//  랜덤 슬라이드 및 사진 바뀔때 난수 공식 사용해야함. 

//117 - 147 랜덤 숫자 구하기 
Math.floor(Math.random(31)*)+117


var age = +prompt('당신의 나이는?');
// prompt 문자는 모든 데이터를 string 으로 받기에.. 숫자로 변환할때는 +를 붙여주면 된다. 
//입력하고 확인을 누르면 입력값을 리턴해 줄 수 있다.
alert(`내 나이: ${ age + 1}살`);

if(age > 19) {
    alert('성인입니다.');
    alert('주류를 구매할 수 있습니다.');
    //왠만하면 한 줄이라고 블록을 짓기 + 추가되는 코드가 있을 수 있음 
}
else if(age >= 17 ){
    alert('고딩입니다');
}
else if(age >=14){
    alert('중딩입니다');
}
else if(age >=8){
    alert('중딩입니다');
}
else {
    alert('미성년자입니다');
}
// else if 로 해서 그룹으로 묶어줘야지 다음으로 넘어가지 않음 
