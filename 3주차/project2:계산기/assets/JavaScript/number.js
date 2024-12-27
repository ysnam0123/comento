const numberButtons = document.querySelectorAll('.number');
const resultScreen = document.querySelector('.result');
let result = '';

const offButton = document.querySelector('.offbutton');
const onButton = document.querySelector('.onbutton');
const clearButton = document.querySelector('.clear');

// OFF
offButton.onclick = function () {
  resultScreen.style.color = '#d8d2c2'; // 화면 텍스트 색상 변경
};

// ON
onButton.onclick = function () {
  resultScreen.style.color = 'black';
  result = '';
  resultScreen.textContent = '0';
};

// 숫자 버튼
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    result += number; // 계산식 문자열에 숫자 추가
    resultScreen.textContent = result;
  });
});

// CLEAR 버튼
clearButton.addEventListener('click', () => {
  result = '';
  resultScreen.textContent = '0';
});

// plus
const plus = document.querySelector('.plus');
plus.addEventListener('click', () => {
  result += plus.textContent;
  resultScreen.textContent = result;
});

// minus
const minus = document.querySelector('.minus');
minus.addEventListener('click', () => {
  result += minus.textContent;
  resultScreen.textContent = result;
});

// multiply
const multiply = document.querySelector('.multiply');
multiply.addEventListener('click', () => {
  result += multiply.textContent;
  resultScreen.textContent = result;
});

//divide
const divide = document.querySelector('.divide');
divide.addEventListener('click', () => {
  result += divide.textContent;
  resultScreen.textContent = result;
});

// = 버튼
const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
  const equalResult = eval(result);
  resultScreen.textContent = equalResult;
  result = equalResult.toString(); // 결과값을 다시 문자열로 바꾸어 다음 계산에 이용
});
// document.addEventListener('keydown', (event) => {
//   if (event.key === 'Enter') {
//     const equalResult = eval(result); // 계산 실행
//     resultScreen.textContent = equalResult; // 결과 표시
//     result = equalResult.toString(); // 다음 계산을 위해 문자열로 저장
//   }
// });
