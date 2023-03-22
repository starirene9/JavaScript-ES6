//indexOf, includes 매소드 구현 

var NOT_FOUND = -1;

// 배열의 특정 데이터의 인덱스를 구하는 함수 
function myIndexOf(arr, element) {

    for (var i = 0; i < arr.length; i ++) {
        if (element === arr[i]) { // 찾았다는 뜻 
            return i; // 찾았으니 탈출 
        }
    }
    return -1; //못찾으면 
}

var foodList = ['짜장면', '탕수육', '고추잡채', '족발'];
var idx = myIndexOf(foodList, '탕수육'); // idx : 1 


// 배열의 특정 데이터의 인덱스를 구하는 함수 
function myIncludes (arr, element) {

    return myIndexOf(arr, element) !== -1; // 함수의 재활용 
    //족발의 인덱스 3번과 -1과 다르니? 응 달라 => true
    //foodList에 없는 파스타의 인덱스 -1과 -1이 다르니? => false 를 리턴 

    //========================================
    // for (var i = 0; i < arr.length; i ++) {
    //     if (element === arr[i]) { 
    //         return true; // 있음 
    //     }
    // }
    // return false; // 없음 
}