let memory = [];

const addMemory = document.querySelector('.addMemory');
addMemory.addEventListener('click', () => {
  if (
    result.includes('+') ||
    result.includes('-') ||
    result.includes('/') ||
    result.includes('*')
  ) {
    return;
  }
  if (result === '') {
    return;
  }

  memory.push(result);
  console.log(memory);
});

const deleteMemory = document.querySelector('.deleteMemory');
deleteMemory.addEventListener('click', () => {
  memory.shift();
  console.log(memory);
});

const loadMemory = document.querySelector('.loadMemory');
let currentMemoryIndex = 0; // 현재 메모리 인덱스

loadMemory.addEventListener('click', () => {
  if (memory.length === 0) {
    return; // 메모리가 비었으면 아무 동작도 하지 않음
  }

  // 현재 메모리 값을 화면에 표시
  const currentMemory = memory[currentMemoryIndex]; // 현재 메모리 값 가져오기
  resultScreen.textContent = `${currentMemory}`; // 화면에 표시
  result = currentMemory.toString(); // 메모리 값을 문자열로 변환하여 result에 저장

  // 인덱스 업데이트 (순환하도록 설정)
  currentMemoryIndex = (currentMemoryIndex + 1) % memory.length;
});
