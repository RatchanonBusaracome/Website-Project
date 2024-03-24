// script.js

const clickBtn = document.getElementById('click-btn');
const actionBtn = document.getElementById('action-btn'); // เปลี่ยนชื่อตัวแปรจาก startBtn เป็น actionBtn
const scoreDisplay = document.getElementById('count');
const timerDisplay = document.getElementById('timer');

let score = 0;
let timeLeft = 10;
let timer;
let gameStarted = false;

actionBtn.addEventListener('click', function() {
  if (!gameStarted) {
    startGame();
  } else {
    restartGame(); // เรียกใช้ฟังก์ชัน restartGame() หากเกมได้เริ่มแล้ว
  }
});

clickBtn.addEventListener('click', function() {
  if (gameStarted) {
    incrementScore();
  }
});

function incrementScore() {
  score++;
  scoreDisplay.textContent = score;
}

function startGame() {
  gameStarted = true;
  actionBtn.textContent = 'Restart'; // เปลี่ยนข้อความบนปุ่มเป็น 'Restart'
  score = 0;
  timeLeft = 11;
  updateTimer();
  timer = setInterval(updateTimer, 1000);
}

function restartGame() {
  score = 0;
  timeLeft = 11;
  updateTimer();
  clearInterval(timer);
  actionBtn.textContent = 'Start'; // เปลี่ยนข้อความบนปุ่มเป็น 'Start'
  gameStarted = false; // เปลี่ยนสถานะเกมกลับเป็นยังไม่เริ่ม
}

function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = `Time Left: ${timeLeft}`;
  if (timeLeft === 0) {
    clearInterval(timer);
    alert(`Game Over! Your score is ${score}`);
    actionBtn.textContent = 'Start'; // เปลี่ยนข้อความบนปุ่มเป็น 'Start' เมื่อเกมจบ
    gameStarted = false; // เปลี่ยนสถานะเกมกลับเป็นยังไม่เริ่ม
  }
}
