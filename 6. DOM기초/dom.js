//브라우저 엔진이 html을 다 쪼개서 js로 변환 

// <div id='box'>
//   <input id='abc' class='zzz xxx vvv' type='text'>
// </div
let box, input;

box = {
    tagName: 'div',
    attributes: {
        id: 'box'
    },
    children: [input],
    // parentNode: document.body
};

input = {
    tagName: 'input',
    attributes: {
        id: 'abc',
        classList: ['zzz', 'xxx', 'vvv'],
        type: 'text'
    },
    parentNode: box
};

console.log(input.parentNode);