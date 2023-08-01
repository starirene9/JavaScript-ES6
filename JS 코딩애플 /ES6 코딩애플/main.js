 // 간단한 2D 게임 만들기 
 // 1. 화면에 네모, 원 그릴 수 있어야 함 
 // 2. 프레임마다 코드실행 가능해야 함 -> 이동 시 가시적으로 움직일 것 
 // 3. collision check 할 수 있어야 함 -> 충돌 시 체력 -1 혹은 사라질 것 

 var canvas = document.getElementById('canvas');
 var ctx = canvas.getContext('2d');

 canvas.width = window.innerWidth - 100;
 canvas.height = window.innerHeight - 100;
 //  ======canvas 사용시 여기까지 기본으로 입력해야하는 값 

 //  등장 캐릭터의 속성부터 obejct 자료에 정리해두면 편리 

 //  공룡 

 var img2 = new Image();
 img2.src = 'dinosaur.png';

 var dino = {
     x: 10,
     y: 200,
     width: 50,
     height: 50,
     draw() {
         ctx.fillStyle = 'green';
         // 초록색 네모 
         //  ctx.fillRect(this.x, this.y, this.width, this.height);
         // 10,10 좌표에 100*100의 네모 -> 확장성을 위해 하드코딩하지 않음
         ctx.drawImage(img2, this.x, this.y)
     }
 }
 // dino.x = 100; 하면 x 축으로 이동하는데 애니메이션은 아님 
 // 1초에 60번 정도 x++ 해주어야 함 -> request animation frame 이라는 함수 있음 

 var img1 = new Image();
 img1.src = 'cactus.png';

 // 장애물 -> 막 뽑아내는 기계인 class 사용 
 class Cactus {
     constructor() {
         this.x = 500; // 왼쪽 500 (x좌표)
         this.y = 200; // 위 200 (y좌표)
         this.width = 50; // 사이즈
         this.height = 50;
     }
     draw() {
         ctx.fillStyle = 'red';
         //  ctx.fillRect(this.x, this.y, this.width, this.height); // hitbox : 충돌했을때 사건이 일어나는 경우 
         ctx.drawImage(img1, this.x, this.y)
     }
 }

 //  var cactus = new Cactus(); //생성자 사용 문법 -> 인스턴스 cactus 생성 됨 
 //  cactus.draw()


 // ===== 프레임마다 코드실행 파트 =====

 var timer = 0;
 // 게임은 초가 아닌 프레임 단위로 사용 
 var cactus여러개 = [];
 var 점프timer = 0;
 var animation;

 // request animation frame 이라는 함수 사용 
 function 프레임마다실행할코드() {
     animation = requestAnimationFrame(프레임마다실행할코드)
     timer++;

     ctx.clearRect(0, 0, canvas.width, canvas.height);
     // 위의 것 처럼 하면 길게 잔상이 남지 않음 => 지우고 그리고 반복 

     // 2~3초에 한 번씩 장애물 실행
     if (timer % 200 === 0) { //200 프레임(144, 60 헤르츠)마다 한 번씩 그려 줌(컴터마다 다름)
         var cactus = new Cactus();
         cactus여러개.push(cactus);
         // 장애물 만들때마다 cactus여러개(array)에 담아서 보관 시 장애물 여러개 관리 용이 
     }

     // array에 있던거 다 draw() 해주기
     cactus여러개.forEach((a, i, o) => {
         // x좌표가 0 미만이면 제거 
         if (a.x < 0) {
             o.splice(i, 1)
         }
         a.x--;
         // 하나씩 꺼내서 좌측으로 이동시킨 후 draw 

         충돌하냐(dino, a);
         // 주인공과 모든 장애물 충돌체크는 이곳에서 

         a.draw(); 
     })

     if (점프중 == true) {
         dino.y -= 2; // 점프 기능 y축 -> 근데 스페이스 바를 누르면 작동해야함 
         점프timer++; // 점프하고나서 1씩 증가하며 얼마만큼의 시간이 흘렀는지 측정 가능 
     }
     if (점프중 == false) { 
         if (dino.y < 200) // 최저 높이 걸어 주기 
             dino.y += 2; // 점프 중이 아니면 아래로 이동 
     }
     // 100 프레임 지나면 dino.y -- 점프 그만해주기 
     if (점프timer > 100) { // 점프를 시작한 후 100 프레임 이상의 시간이 흐르면 
         점프중 = false; // 점프 중단
         점프timer = 0 // 리셋 
     }

     dino.draw()
 }

 프레임마다실행할코드();


 // 스페이스 바를 누르면 작동해야함
 var 점프중 = false;
 document.addEventListener('keydown', function (e) {
     if (e.code === 'Space') {
         점프중 = true;
        //  스페이스 바를 누르면 점프중이 사실임 
     }
 })


 // 3. 충돌체크하기 -> 좌표 계산하기 
 // 1) x 오른쪽 좌표와 왼쪽 좌표를 빼서 음수면 만났다
 // 위에서 만나는 경우 
 // 2) y좌표와 장애물의 위의 y 좌표를 뺴서 음수면 충돌 판정 

 // 충돌확인 함수 
 function 충돌하냐(dino, cactus) {
     var x축차이 = cactus.x - (dino.x + dino.width)
     var y축차이 = cactus.y - (dino.y + dino.height)
     if (x축차이 < 0 && y축차이 < 0) {
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         cancelAnimationFrame(animation) // 애니메이션 중단됨 
     }
 }

//  Q. 점프 여러번 금지?

// Q. 공룡이 달리는 것처럼 보이게? -> 두개의 이미지를 번갈아 가며 

// Q. 배경 다가오는건?

// Q. 장애물이 나타나는 간격을 랜덤하게? -> 랜덤함수

// Q. 점수표기는?

// Q. 시간 지날 때 점수도 오르는 기능은?