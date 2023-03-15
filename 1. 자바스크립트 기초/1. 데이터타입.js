// var sentence = '<ul>\n\t<li>\n\t\t<a>ddd<\a>';
var sentence =`
<ul>
    <li>
        <a>hhh</a>
    </li>
</ul>
`;
// 반면 물결 쓰면 띄어쓰기 그대로 적용된다.
console.log(sentence);

var month =4;
var day =5;
var anniversary = '식목일';

// var message = month + '월 '
// +day + '일은 '
// +anniversary + '입니다. ';

var message = `${month}월 ${day}일은 ${anniversary}입니다.`
console.log(message);
// 자바스크립트는 그냥 백틱만 있다고 생각하자.

//논리
var flag = false;
console.log(typeof flag);