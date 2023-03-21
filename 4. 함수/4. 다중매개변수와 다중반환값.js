//multi parameter : 매개변수가 n개인 경우 

function add(n1, n2) {
    return n1 + n2;
}

// 집합 자료구조를 매개변수로 사용 : 배열, 객체 

// n개의 정수를 전달하면 해당 정수의 총합을 구해주는 함수 
// function addAll(numbers) {
//     var total = 0;
//     for (var n of numbers) { // 배열을 선형나열로 돌려서 더함 
//         total += n;
//     }
//     return total;
// }

// var r1 = addAll([1,3,5]); // 박스가 numbers로 들어감 : inline 방식 
// console.log(`r1 : ${r1}`);


//스프레드 (ES6)
function addAll(...numbers) { // ...붙여주면 대괄호 생략 가능 
    var total = 0;
    for (var n of numbers) { // 배열을 선형나열로 돌려서 더함 
        total += n;
    }
    return total;
}
var r1 = addAll(1, 3, 5); // [] 배열 표시 하지 않아도 됨 
console.log(`r1 : ${r1}`);


// function foo(arr1, arr2) { // 배열 여러개 표시할때는 안된다. 어디서 부터 어디까지인지 모름 

// }
// foo([10,20],[500,1000,1500]);

// 함수의 리턴값은 언제나 하나 
// 2개의 정수를 전달하면 덧셈, 뺄셈, 곱셈, 나눗셈의 결과를 리턴받고 싶음 


function operateAll(n1, n2) {
    // 일회용은 변수에 담지 않고 바로 인라인에 적기  
    return {
        plus : addAll(n1, n2),
        minus : n1 - n2,
        multiply : n1 * n2,
        divide : n1 / n2
    }; 
    // 순서가 중요하면 배열 순서 바껴도 괜찮은거면 객체 사용 
}

// result는 배열임 : 타입이 매우 중요!
var result = operateAll(10, 5); // 한번의 호출로 여러개를 리턴받은 효과가 남 
console.log(`덧셈 결과 : ${result.plus}`);
console.log(`뺄셈 결과 : ${result.minus}`);
console.log(`곱셈 결과 : ${result.multiply}`);
console.log(`나눗셈 결과 : ${result.divide}`);