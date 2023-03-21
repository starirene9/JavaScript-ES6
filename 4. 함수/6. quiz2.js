/*
    Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
       반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/

function calcNumbersTotalAndAverage(...numbers) { //[90, 80, 100, 90] 배열로 들어감 
    var total = 0;
    for (var n of numbers) { // 배열을 선형나열로 돌려서 더함 
        total += n;
    }
    var avg =  Math.ceil(total / numbers.length);
    return {
        total,
        avg
    };
}

var result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);



