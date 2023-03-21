//명시적형변환 : 타입변화해서 이득 얻을게 있어야됨 
/*
    문자열 변환 : String(), .toString(), '' (빈문자열 더하기)
    숫자 : Number(), parseInt() 정수, parseFloat() 실수, + 붙이기
*/
var x = 30, y = 40;

var z = '' + x + y; // 빈문자열을 앞에다가 두면 String으로 전환  
console.log(z); // 3040

// 회원 로그인 여부 확인
// 브라우저 로컬 스토리지에 토큰이 존재하면 로그인한 것임

function isLogin() { 
    //ACCESS_TOKEN : 3224sldkfjasdflkja; <--로그인한 경우 
    //ACCESS_TOKEN : null <-- 로그인 안 한 경우
    //getItem : 해당 값이 있으면 값을 가져오고 없으면 null
    return !!localStorage.getItem('ACCESS_TOKEN');  
    // 값이 있으면 true - false - "true" 를 리턴 
    // 값이 없으면 null을 리턴하니까 false -> true -> false 를 리턴 
}