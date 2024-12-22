const epl = document.querySelector('.england .changetimebutton');
epl.onclick = function () {
  /* 자신의 버튼만 색이 들어오도록 설정 */
  epl.style.backgroundColor = 'white';
  bundesliga.style.backgroundColor = '#fff0dc';
  laliga.style.backgroundColor = '#fff0dc';

  /* 전체 배경 색 */
  const container0 = document.querySelector('.container0');
  container0.style.backgroundColor = 'white';

  /* 시계, 알람 리스트 상자 배경색*/
  const alarmList = document.querySelectorAll('.box');
  alarmList.forEach((element) => {
    element.style.backgroundColor = 'rgb(50,4,58)';
    element.style.color = 'white';
  });

  /* 알람 추가 상자 색 */
  const timeSelector = document.querySelector('.time-selector');
  timeSelector.style.backgroundColor = 'rgb(95, 185, 249)';
  timeSelector.style.color = 'white';

  /* option select 태그 */
  const select = document.querySelectorAll('select');
  select.forEach((select) => {
    select.style.backgroundColor = 'white';
    select.style.color = 'black';
  });

  const addbutton = document.querySelector('.addbutton');
  addbutton.style.backgroundColor = 'white';
  addbutton.style.color = 'black';
};

/*
rgb(193,42,36) : 빨간색
rgb(26,30,36) : 차콜색
rgb(53,56,60) : 어두운 회색
rgb(174,175,177) : 살짝 밝은 회색
*/
const bundesliga = document.querySelector('.germany .changetimebutton');
bundesliga.onclick = function () {
  /* 자신의 버튼만 색이 들어오도록 설정 */
  bundesliga.style.backgroundColor = 'rgb(174,175,177)';
  epl.style.backgroundColor = '#fff0dc';
  laliga.style.backgroundColor = '#fff0dc';

  /* 전체 배경 색 */
  const container0 = document.querySelector('.container0');
  container0.style.backgroundColor = 'rgb(53,56,60)';

  /* 시계, 알람 리스트 상자 배경색*/
  const alarmList = document.querySelectorAll('.box');
  alarmList.forEach((element) => {
    element.style.backgroundColor = 'rgb(193,42,36)';
    element.style.color = 'white';
  });

  /* 알람 추가 상자 색 */
  const timeSelector = document.querySelector('.time-selector');
  timeSelector.style.backgroundColor = 'rgb(174,175,177)';
  timeSelector.style.color = 'white';

  /* option select 태그 */
  const select = document.querySelectorAll('select');
  select.forEach((select) => {
    select.style.backgroundColor = 'white';
    select.style.color = 'black';
  });

  /* 추가 버튼 */
  const addbutton = document.querySelector('.addbutton');
  addbutton.style.backgroundColor = 'rgb(193,42,36)';
  addbutton.style.color = 'white';
};

/*
rgb(236,90,78) : 다홍색
rgb(147,95,246) : 보라색
rgb(247,247,247) : 살짝 밝은 회색
*/
const laliga = document.querySelector('.spain .changetimebutton');
laliga.onclick = function () {
  /* 자신의 버튼만 색이 들어오도록 설정 */
  laliga.style.backgroundColor = 'rgb(236,90,78)';
  epl.style.backgroundColor = '#fff0dc';
  bundesliga.style.backgroundColor = '#fff0dc';

  /* 전체 배경 색 */
  const container0 = document.querySelector('.container0');
  container0.style.backgroundColor = 'white';

  /* 시계, 알람 리스트 상자 배경색*/
  const alarmList = document.querySelectorAll('.box');
  alarmList.forEach((element) => {
    element.style.backgroundColor = 'rgb(236,90,78)';
    element.style.color = 'white';
  });

  /* 알람 추가 상자 색 */
  const timeSelector = document.querySelector('.time-selector');
  timeSelector.style.backgroundColor = 'rgb(173,173,173)';
  timeSelector.style.color = 'rgb(147,95,246)';

  /* option select 태그 */
  const select = document.querySelectorAll('select');
  select.forEach((select) => {
    select.style.backgroundColor = 'white';
    select.style.color = 'rgb(147,95,246)';
  });

  /* 추가 버튼 */
  const addbutton = document.querySelector('.addbutton');
  addbutton.style.backgroundColor = 'rgb(236,90,78)';
  addbutton.style.color = 'white';
};
