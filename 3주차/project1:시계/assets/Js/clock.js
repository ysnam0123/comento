// 배터리 줄어들게하기
let currentBattery = 100; // 함수 외부에서 초기화

function batteryDown() {
  const battery = document.querySelector('.battery');
  const clock = document.querySelector('#clock');

  if (currentBattery >= 65) {
    battery.textContent = `배터리 : ${currentBattery}%`; // 텍스트 업데이트
    currentBattery--; // 배터리 감소
    battery.style.color = '#5CB338';
  } else if (currentBattery >= 30) {
    battery.textContent = `배터리 : ${currentBattery}%`; // 텍스트 업데이트
    currentBattery--; // 배터리 감소
    battery.style.color = '#FFC145';
  } else if (currentBattery >= 1) {
    battery.textContent = `배터리 : ${currentBattery}%`; // 텍스트 업데이트
    currentBattery--; // 배터리 감소
    battery.style.color = '#FB4141';
  } else {
    clearInterval(intervalId); // setInterval 중지
    battery.textContent = `배터리 : 0%`; // 배터리 0%로 표시
    clock.style.backgroundColor = 'black'; // clock 배경색 변경
    clock.style.color = 'black'; // clock 글자색 변경
  }
}

const intervalId = setInterval(batteryDown, 1000); // 반복 실행

// 현재 시간
function updateClock() {
  const currentDate = new Date();

  const formattedDate = `${currentDate.getFullYear()}-${String(
    currentDate.getMonth() + 1
  ).padStart(2, '0')}-${String(currentDate.getDate()).padStart(
    2,
    '0'
  )} ${String(currentDate.getHours()).padStart(2, '0')}:${String(
    currentDate.getMinutes()
  ).padStart(2, '0')}:${String(currentDate.getSeconds()).padStart(2, '0')}`;

  const clockElement = document.getElementById('clock');
  clockElement.textContent = formattedDate;
}

// 1초마다 updateClock 호출해서 초가 바뀌도록
setInterval(updateClock, 1000);
updateClock();

// 시
const selectHour = document.getElementById('hour');
for (let i = 0; i < 24; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = `${i}시`;
  selectHour.appendChild(option);
}

// 분
const selectMinute = document.getElementById('minute');
for (let i = 0; i < 60; i += 5) {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = `${i}분`;
  selectMinute.appendChild(option);
}

// 알람 리스트 참조
const alarmList = document.getElementById('alarmList');

// 알람 추가 버튼
const addButton = document.querySelector('.addbutton');
addButton.addEventListener('click', () => {
  const selectedHour = selectHour.value; // 선택된 시 값
  const selectedMinute = selectMinute.value; // 선택된 분 값

  // 최대 3개의 알람만 허용
  if (alarmList.childElementCount >= 4) {
    alert('알람은 최대 3개까지 설정할 수 있습니다.');
    return; // 함수 종료
  }

  // 새로운 알람 생성
  const newAlarm = document.createElement('li');
  newAlarm.textContent = `${selectedHour}시 ${selectedMinute}분`;
  newAlarm.style.marginBottom = '5px';
  newAlarm.style.textAlign = 'right';
  newAlarm.style.fontSize = '20px';
  // 알람 리스트에 추가
  alarmList.appendChild(newAlarm);
});
