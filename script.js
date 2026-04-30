
let wrongCount = 0;

function checkPassword() {
  const password = document.getElementById("password").value;
  const hint = document.getElementById("hint");
  const music = document.getElementById("bgmusic");

  const correctAnswers = [
    "01/02/2569",
    "01/02/69",
    "01022569",
    "010269",
    "1",
    "01",
    "0102",
    "010269"
  ];

  if (correctAnswers.includes(password)) {
  music.play();

  const box = document.getElementById("successBox");
  box.classList.add("show");

  // 💖 ทำให้ทั้งหน้าค่อยๆจาง
  document.body.style.transition = "0.5s ease";
  setTimeout(() => {
    document.body.style.opacity = "0";
    document.body.style.transform = "scale(1.02)";
  }, 2500);

  // 💫 ค่อยเปลี่ยนหน้า
  setTimeout(() => {
    window.location.href = "page2.html";
  }, 3000);

} else {
  wrongCount++;

  const hint = document.getElementById("hint");

  if (wrongCount === 1) {
    hint.innerText = "คำใบ้: ลองนึกดีๆสิเธอ วันเกิดเธอป่าวน่าา 💭";
  }

  if (wrongCount === 2) {
    hint.innerText = "💔 ผิดอีกแล้วนะดื้อ หรือวันเกิดเค้าอิอิ...";

    const sound = new Audio("wrong.mp3");
    sound.play().catch(()=>{});
  }

  if (wrongCount === 3) {
    hint.innerText = "😢 ผิด 3 ครั้งแล้วนะดื้ออเสียใจอ่ะ ตั้งใจหน่อยจิ";

    const sound = new Audio("wrong.mp3");
    sound.play().catch(()=>{});

    document.body.style.animation = "shake 0.3s";

    setTimeout(() => {
      document.body.style.animation = "";
    }, 300);
  }

  // 💥 เพิ่มใหม่: ครั้งที่ 4
  if (wrongCount === 4) {
  hint.innerText = "เค้าหยอกเล่น เค้าไม่แกล้งแล้วน้าาาดื้ออ 😆 \nรหัสคือวันที่เราเริ่มเป็นแฟนกันวันแรกเลยย \n01/02/2569 ";

  const heart = document.getElementById("bigHeart");
  const black = document.getElementById("blackScreen");

  // 💖 โชว์หัวใจ
  heart.innerText = "💖";
  heart.style.opacity = "1"; // 🔥 สำคัญ
  heart.classList.add("show");

  // ⏳ รอ 2 วิ
  setTimeout(() => {
    heart.innerText = "💔";

    heart.classList.remove("show");

    void heart.offsetWidth; // 💥 แก้ปัญหาหลัก

    heart.classList.add("break");

  }, 2000);

  // 🌑 จอดำ
  setTimeout(() => {
    black.style.opacity = "1";
  }, 2600);

  // 🔄 รีเซ็ต
  setTimeout(() => {
    black.style.opacity = "0";
    heart.classList.remove("break");
    heart.style.opacity = "0";
    wrongCount = 0;
  }, 4500);
}
}
}

const heartsContainer = document.querySelector(".hearts");

for (let i = 0; i < 6; i++) {
  const heart = document.createElement("span");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 10) + "px";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  heartsContainer.appendChild(heart);
}

/*พื้นหลังวิ่งๆ*/

const sparkle = document.createElement("div");
sparkle.className = "sparkle";
document.body.appendChild(sparkle);

for (let i = 0; i < 40; i++) {
    const s = document.createElement("span");
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";
    s.style.animationDelay = Math.random() * 3 + "s";
    sparkle.appendChild(s);
    
}

/*กระโดด*/ 

const intro = document.getElementById("jumpIntro");
const loop = document.getElementById("jumpLoop");

const frames = ["jump2.png", "jump3.png"];

// 🔥 1. preload รูปก่อน (สำคัญมาก)
frames.forEach(src => {
  const img = new Image();
  img.src = src;
});

let i = 0;

// ⏳ ให้รูปแรกโชว์ 5 วิ
setTimeout(() => {
  intro.style.display = "none";
  loop.style.display = "block";

  // 🔥 2. ใช้ loop แบบเนียน (แทน setInterval)
  function startLoop() {
    loop.src = frames[i];
    i = (i + 1) % frames.length;

    setTimeout(startLoop, 300);
  }

  startLoop(); // 🔥 เริ่มตรงนี้

}, 5000);

// เรียกเพลง
const bgmusic = document.getElementById("bgmusic");
bgmusic.play().catch(()=>{}); // มือใหม่บางเบราว์เซอร์ต้อง .catch

// เก็บเวลาปัจจุบันของเพลงทุก 1 วินาที
setInterval(() => {
    localStorage.setItem("musicTime", bgmusic.currentTime);
}, 1000);



