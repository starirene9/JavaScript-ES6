var age = Math.random();
// 0이상 1미만의 랜덤 숫자를 갖다준다. 
/* 

Math.randem() 
0.0 <= ~ <1.0
Math.randem() * 100 
0.0 <= ~ <100.0 
Math.floor(Math.random()*100) //안쪽 함수가 먼저 실행됨 
0 <= ~ <100
Math.floor(Math.random()*100)+1 // Math.floor : 소숫점을 바닥에 버린다.
0 + 1 <= ~ <100 +1

공식 :x 이상 y 이하의 정수 난수
                             미만
Math.floor(Math.random() * (y - x +1 )) + x
화면 이미지 바뀔때 
*/ 

alert(`age:${age}살`);

// var age = +prompt('당신의 나이는?');
// prompt 문자를 숫자로 변환할때는 +를 붙여주면 된다. 
//입력하고 확인을 누르면 입력값을 리턴해 줄 수 있다.
// alert(`내 나이: ${ age + 1}살`);

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
else {
    alert('미성년자입니다');
}

