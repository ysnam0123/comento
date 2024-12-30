// 할 일 목록 Ordered list
const taskList = document.getElementById('taskList');
// 버튼을 눌렀을 때 리스트 추가하기
const addTaskButton = document.querySelector('.addTaskButton');

//할 일 추가하는 함수
function addTask() {
  const newTask = document.getElementById('addTask'); //입력 힐드
  const taskValue = newTask.value.trim(); //필드에 입력된 값
  if (taskValue) {
    // 리스트 만들기
    const createTask = document.createElement('li');
    createTask.textContent = taskValue;
    // 할일 완료 버튼 만들기
    const finishButton = document.createElement('button');
    finishButton.textContent = '완료';
    finishButton.classList.add('check');
    finishButton.addEventListener('click', () => {
      createTask.style.textDecoration = 'line-through';
    });
    //삭제 버튼 만들기
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('deleteButton'); // 삭제 버튼에 클래스 추가
    deleteButton.addEventListener('click', () => {
      createTask.remove(); //버튼을 눌렀을때 리스트 삭제하기
    });

    createTask.appendChild(finishButton);
    createTask.appendChild(deleteButton); //li 안에 삭제버튼 추가하기
    taskList.appendChild(createTask); //ol 안에 li 추가하기

    newTask.value = ''; // 입력값 비우기
  } else {
    alert('할 일을 입력하세요!');
  }
}
addTaskButton.addEventListener('click', addTask);

// Enter 키로 할 일 추가
document.addEventListener('keydown', (event) => {
  if (event.isComposing || event.key !== 'Enter') {
    // IME 조합 중이거나 Enter 키가 아닐 경우 무시
    return;
  }
  addTask();
});
