//나머지 연산 2
console.log(27 % 5);

//뒤의 숫자가 더 크면 앞에 숫자가 나머지가 된다. 4
console.log(4%10);

//연산이 안 됨 Nan 
console.log(77%0);

// 나머지 0 뒤의 숫자가 더 크면 앞에 숫자가 나머지가 된다.
console.log(0%77);

//거듭제곱 연산 : 2의 3승
var num = 2;
console.log(num ** 3);

//증감 연산자
var x = 3;
x++; //단항 연산자
++x;
x--;
--x;

console.log(`x: ${x}`);

// 전위 연산, 후위 연산
var n1 =10;
var n2 = n1++;
//그냥 갔는데 뒤에서 올려서 n1이 11 n2가 10
console.log(`n1: ${n1}, n2:${n2}`);

var n3 =10;
var n4 = ++n3;
// 올리고 가서 둘다 11
console.log(`n3: ${n3}, n4:${n4}`);

x +=3; //x=x+3; x에 3를 더해서 대입하세요

x +=1; // x = x+1 (연산이 두 번: 오른쪽 계산, 왼쪽에 값 대입)
x++; // 연산이 1번, 속도가 빠름 

var z =10;

console.log(z-=5); // z에 5를 빼서 대입하세요 
console.log(z);