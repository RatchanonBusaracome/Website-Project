var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
var isPaused = false; // เพิ่มตัวแปร isPaused เพื่อเก็บสถานะของเกม

// เพิ่ม event listener สำหรับปุ่ม Spacebar
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        jump();
    } else if (event.code === 'KeyP') { // เพิ่มเงื่อนไขสำหรับปุ่ม pause
        togglePause(); // เรียกใช้ฟังก์ชัน togglePause เมื่อกดปุ่ม P
    }
});

function jump() {
    if (character.classList == "animate" || isPaused) { // เพิ่มเงื่อนไขให้ตัวละครสามารถกระโดดได้เมื่อเกมไม่ได้หยุด
        return;
    }
    character.classList.add("animate");
    setTimeout(function() {
        character.classList.remove("animate");
    }, 300);
}

var checkDead = setInterval(function() {
    if (!isPaused) { // เพิ่มเงื่อนไขเพื่อตรวจสอบว่าเกมไม่ได้หยุด
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

        // เพิ่มเงื่อนไขในการตรวจสอบการชน
        if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
            block.style.animation = "none";
            alert("Game Over. score: " + Math.floor(counter / 100));
            counter = 0;
            block.style.animation = "block 1s infinite linear";
        } else {
            counter++;
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
        }
    }
}, 10);

function togglePause() {
    isPaused = !isPaused; // เปลี่ยนค่า isPaused ระหว่าง true และ false
    if (isPaused) {
        clearInterval(checkDead); // หยุดเกมเมื่อกดปุ่ม pause
    } else {
        checkDead = setInterval(updateGame, 10); // เริ่มเกมใหม่เมื่อกดปุ่มเล่นต่อ
    }
}
