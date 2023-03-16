var length = +prompt('정사각형을 그립니다. 높이는 얼마입니까?');

var star='';
for(var i=0;i<length;i++){
    for(var j=0;j<length;j++){
        star +=`* `;
    }
    star +=`\n`;
}