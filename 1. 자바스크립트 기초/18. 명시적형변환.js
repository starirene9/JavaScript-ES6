var x = 30, y = 40;

var z = '' + x + y; // 숫자를 string 전환 빈문자열을 많이 씀 
console.log(z); // 3040

// 회원 로그인 여부 확인
// 브라우저 로컬 스토리지에 토큰이 존재하면 로그인한 것임

function isLogin() { 
    //ACCESS_TOKEN : 3224sldkfjas;dflkja; <--로그인한 경우 
    //ACCESS_TOKEN : null <-- 로그인 안 한 경우
    //getItem : 해당 값이 있으면 값을 가져오고 없으면 null
    return !!localStorage.getItem('ACCESS_TOKEN');  // 있으면 true
}