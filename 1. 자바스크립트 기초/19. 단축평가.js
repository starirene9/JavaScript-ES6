// 단축평가 : 논리평가를 빨리한다. 

// OR 연산 : 제일 먼저 발견하는 첫번째 truthy를 찾음 -> 반환
console.log('hello' || 'world'); //hello
console.log(0 || '안녕'); //안녕

// AND 연산 : 첫번째 falsy를 반환 
console.log('=============');
console.log('HELLO' && 'WORLD'); //WORLD
console.log(null && '메롱'); //null


/*

<h1>안녕하세요 우리 홈페이지에 오신거 환영합니다</h1>
isLogin() && <h2>xxx님 안녕하세요! </h2> // isLogin() true이면 오른쪽 h2를 출력 
//isLogin() true 이면 h2를 내보냄 false 이면 h1 만 나옴 

쿠폰당첨플래그 && sendCoupon() // 앞이 true 이면 sendCoupon()보냄

isMyArticle()  && <button>수정</button>

*/