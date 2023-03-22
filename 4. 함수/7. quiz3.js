/*
 1. 키(cm)와 몸무게(kg)을 인수로 전달받아 
 2. bmi지수를 계산하여 반환함과 동시에 
 3. bmi가 25.0이상이면 "당신은 과체중입니다." 
    18.5이하면 "당신은 저체중입니다." 
    나머지는 "당신은 정상체중입니다."를 출력하는 
    CalcBMI라는 함수를 정의하고 호출하세요. 
 # bmi 계산식 : 몸무게(kg) / (키(m) * 키(m)) 
 # 출력 예시: 
 "키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"
 */

function calcBMI(height, weight) {

   var kg = weight;
   var m = height / 100; // cm를 m로 변환함 
   var bmi = kg / (m * m);

   if (bmi >= 25.0) {
      console.log('당신은 과체중입니다.');
   } else if (bmi <= 18.5) {
      console.log('당신은 저체중입니다.');
   } else {
      console.log('당신은 정상체중입니다.');
   }

   return bmi;
}

// 자리수 반올림 함수
function round(number, digit) { //myBmi 인수가 number이라는 매개변수에 저장 되서 ~
   /* 3째짜리 반올림 구하는 공식 */
   // number: 5.7788
   // * 1000 = 5778.8 => round함수로 깍고 
   // 반올림 = 5779
   // / 1000 = 5.779

   // 2째자리까지  Math.round(number * 10 ** 2) / 10 ** 2
   // 3째자리까지  Math.round(number * 10 ** 3) / 10 ** 3
   // digit째자리  Math.round(number * 10 ** digit) / 10 ** digit

   return Math.round(number * 10 ** digit) / 10 ** digit;

}

var h = 178.4,
   w = 78.2;
var myBmi = calcBMI(h, w); //return 값 bmi 를 myBmi에 담는다. 

console.log(`키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${round(myBmi, 2)}입니다.`);
// 당신은 정상체중입니다.
// 키 -> 178.4cm, 체중 -> 78.2kg의 체질량지수는 24.57(digit 소수 2째짜리까지, 3째짜리는 소수점 이후 세자리까지)입니다.