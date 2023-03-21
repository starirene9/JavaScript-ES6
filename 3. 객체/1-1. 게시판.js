//객체의 중첩구조
//예시 : 게시판

var articles = { // 객체 -> 배열 안에 -> 객체의 구조를 가지고 있음 
    totalCount: 25578,  //총 게시물 수 
    admin: 'abc1234', //게시판 관리자 아이디
    page: 2558, //총 페이지 수
    articleList: [ // 게시물 목록 : 배열안에 객체가 나열되어 있음  
        { // 0 번 인덱스 
            bno: 3, //글번호
            title: '가위바위보', //글제목
            writer: '김짱껨뽀',  //작성자
            content: '다덤벼 ^^', //글내용
            viewCount: 53, //조회수
            recomm: 10, //추천수
            regDate: '21-12-07' //작성일자
        }, 
        { //1 번 인덱스 : articles.articleList[1] 
             // articleList는 배열 [1]은 객체 
          
            bno: 2, //글번호
            title: '노는게', //글제목
            writer: '뽀로로',  //작성자
            content: '제일조와~~~', //글내용
            viewCount: 253, //조회수
            recomm: 11, //추천수
            regDate: '21-12-06' //작성일자
        }, 
        {
            bno: 1, //글번호
            title: '아멘', //글제목
            writer: '개신교신자',  //작성자
            content: '할렐루야', //글내용
            viewCount: 23, //조회수
            recomm: 5, //추천수
            regDate: '21-12-05' //작성일자
        }
    ]
};

console.log(articles.totalCount);
console.log(articles.articleList[1].writer);
console.log(articles.articleList[2].regDate);
//자주 쓰는것은 변수에 담는다 

var bbs = articles.articleList[2].regDate;

for (var x in articles) {
    //객체니까 in 
    // key 개수 만큼 돌아서 4바퀴 돌음 
}
for (var y of bbs) {
    //배열이니까 of 
    //bbs의 length : 3
}
// ! 체크 바람 