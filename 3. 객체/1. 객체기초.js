

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
    name: '콩순이',
    kind: '블랙 러시안',
    age: 2,
    injection : true,
    favorite :  ['낮잠자기', '방어지럽히기'],  //배열 타입 
};

console.log(typeof cat); //object

//객체에 저장된 데이터 참조 .은 '-의' 라고 해석하면 됨 
console.log(dog.name);
console.log(cat.favorite);

console.log(dog.favorite[0]);

dog.favorite.push('꼬리 흔들기'); // 타입이 중요~! 배열의 끝에 추가 됨 
console.log(dog);
console.log('===================');
dog.favorite.slice(1).splice(1,1); //배열이라서 가능
console.log(dog.favorite);

//프로퍼티 참조 2
console.log(dog.injection);
console.log(dog['injection']);
console.log(dog['injection']);
//둘다 결과는 똑같으나 42번라인 처럼 써야할 때가 있다. 

//key를 변수에 저장
var fv = 'favorite';
console.log(cat.fv); // undefined
console.log(cat[fv]); // 변수를 참조하는거니까 따옴표 쓰면 안됨 

//프로퍼티 값 수정 
dog.age = 4;
cat.favorite[1] = '실뭉치';

dog['injection'] =  false;
console.log(dog);

//프로퍼티 동적 추가 : 그냥 쓰면 됨 
cat.owner = '구빛나'; // 기존에 속성 property가 있었으면 수정 , 없었으면 추가 

//프로퍼티 삭제 : delete 
delete cat.owner;
console.log(cat);

console.log('=========================');

//프로퍼티 존재 유무 확인 : 수정할때 
//키를 반드시 문자열로 표기해야함 
var ageFlag = 'age' in cat; 
console.log(ageFlag);//있으면 true 없으면 false

//master라는 프로퍼티가 없으면 추가해라
if(!('master' in cat)) {
    cat['master'] = '구빛나';
}

// var m = 'master'; //변수면 그대로 ''없이 쓴다 
// if(!(m in cat)) {
//     cat[m] = '구빛나';
// }

console.log('========================');
//객체를 순회하는 반복문

//of 는 배열 in 은 객체 
for(var k in dog ) {
    console.log(k); //key를 반복해서 추출해줌 
    console.log(dog[k]); // value를 추출하는데, ''이 들어가면 안되서 무조건 얘는 dog[k]식으로 써줘야함 
//dog[k]는 dog.key값이라서 value를 추출한다고 보면 됨 
}

