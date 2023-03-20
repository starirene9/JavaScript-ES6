

//객체 리터럴(값)
var dog = {
    //프로퍼티(속성 명사) 작성
    name: '뽀삐',
    kind: '진돗개',
    age: 3,
    injection : true,
    favorite :  ['산책', '간식'],
    hate : null,
    playwithChild : function(){}
    // 'for waiting' : 11, 
    //key(띄어쓰기 안될때는 ''붙여주면 됨 ) : value 라고 부름 (아무거나 다 넣어도 됨)
};

var cat = {
    //프로퍼티(속성 명사) 작성
    name: '콩순이',
    kind: '블랙 러시안',
    age: 2,
    injection : true,
    favorite :  ['낮잠자기', '방어지럽히기'],  //배열 타입 
};

console.log(typeof cat);

//객체에 저장된 데이터 참조 .은 -의 라고 해석하면 됨 
console.log(dog.name);
console.log(cat.favorite);

console.log(dog.favorite[0]);

dog.favorite.push('꼬리 흔들기'); // 타입이 중요~! 배열에 추가 됨 
console.log(dog);

dog.favorite.slice(1).splice(1,1);
console.log(dog);