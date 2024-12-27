const numberButtons = document.querySelectorAll('.number');
const resultScreen = document.querySelector('.result'); // 화면에 표시할 요소
let result = ''; // 계산식 저장 변수

const offButton = document.querySelector('.offbutton');
const onButton = document.querySelector('.onbutton');
const clearButton = document.querySelector('.clear');

// OFF 버튼 클릭 이벤트
offButton.onclick = function () {
  resultScreen.style.color = '#d8d2c2'; // 화면 텍스트 색상 변경
};

// ON 버튼 클릭 이벤트
onButton.onclick = function () {
  resultScreen.style.color = 'black'; // 텍스트 색상 복원
  result = ''; // 계산식 초기화
  resultScreen.textContent = '0'; // 화면에 "0" 표시
};

// 숫자 버튼 클릭 이벤트
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const number = button.textContent; // 버튼의 텍스트 값 가져오기
    result += number; // 계산식 문자열에 숫자 추가
    resultScreen.textContent = result; // 화면에 계산식 표시
  });
});

// CLEAR 버튼 클릭 이벤트
clearButton.addEventListener('click', () => {
  result = ''; // 계산식 초기화
  resultScreen.textContent = '0'; // 화면 초기화
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
