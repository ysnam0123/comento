// 아이디 상자 아래에 띄울 메시지
const idMessage = document.querySelector('.checkAlert');
// input 상자
const idBox = document.getElementById('id');

// 중복 확인 버튼
const check = document.querySelector('.check');

// 제출 버튼
const finishButton = document.querySelector('.finishButton');

// 비밀번호 입력상자
const passwordBox = document.getElementById('password');

// 비밀번호 확인 메시지를 띄울 공간
const passwordMessage = document.querySelector('.passwordMessage');

// 중복 확인 버튼 눌렀을 때
check.addEventListener('click', () => {
  // 기존 메시지 삭제
  idMessage.textContent = '';

  // 새 메시지 생성
  const idAlert = document.createElement('p');

  // 입력 값 확인
  if (idBox.value.trim() === '') {
    idAlert.textContent = 'ID를 입력하세요.'; // input이 비어있을 때
    idAlert.style.color = '#FB4141';
  } else if (idBox.value.length < 5) {
    idAlert.textContent = '5자리 이상 입력해주세요.';
    idAlert.style.color = '#FB4141';
  } else {
    idAlert.textContent = '사용 가능한 ID 입니다.'; // input에 값이 있을 때
    idAlert.style.color = '#55ae58';
  }

  idMessage.appendChild(idAlert); // 메시지 추가
});

finishButton.addEventListener('click', () => {
  // 기존 메시지 삭제
  passwordMessage.textContent = '';

  // 메시지 p 태그 생성
  const passwordAlert = document.createElement('p');
  passwordAlert.classList.add('tooltip'); // 말풍선 클래스 추가

  // 비밀번호 입력 값
  const password = passwordBox.value;
  // 사용자 정보
  let user = [];

  if (password.length < 7) {
    passwordAlert.textContent =
      '비밀번호는 7자리 이상, 영어 대소문자,숫자,특수문자 @,#가 포함되어야 합니다.';
  } else if (
    (password.includes('#') || password.includes('@')) &&
    /[A-Z].*[0-9]/.test(password)
  ) {
    passwordAlert.textContent = '사용 가능한 비밀번호입니다.';
    user.push(idBox.value, password);
  } else {
    passwordAlert.textContent =
      '비밀번호는 7자리 이상, 영어 대소문자,숫자,특수문자 @,#가 포함되어야 합니다.';
  }
  passwordMessage.appendChild(passwordAlert);
});

// // 이메일 인증 버튼
// const checkEmail = document.getElementById('checkEmail');
// const verify = document.querySelector('.verifyEmail');
// checkEmail.addEventListener('click', () => {
//   const verifyText = document.createElement('div');
//   const verifyEmail = document.createElement('input');
//   verifyEmail.type = 'text';
//   verifyEmail.placeholder = '인증번호를 입력하세요.';

//   const timeout = document.createElement('p');
//   timeout.textContent = '03:00';
//   timeout.classList.add('limitTime');

//   verify.appendChild(verifyText);
//   verify.appendChild(verifyEmail);
//   verify.appendChild(timeout);
// });
