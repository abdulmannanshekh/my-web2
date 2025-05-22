
function updateClock() {
  const now = new Date();
  document.getElementById("clock").innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

fetch('https://api.aladhan.com/v1/gToH?date=22-05-2025')
  .then(res => res.json())
  .then(data => {
    document.getElementById("hijri-date").innerText = `হিজরি তারিখ: ${data.data.hijri.date}`;
  });

fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/bn-bukhari/1.json')
  .then(res => res.json())
  .then(data => {
    const h = data.hadith[0];
    document.getElementById("hadith-box").innerHTML = `<h3>হাদিস</h3><p>${h.text}</p>`;
  });

fetch("https://api.quran.com/v4/verses/by_key/1:1?language=bn")
  .then(res => res.json())
  .then(data => {
    document.getElementById("quran-verse").innerText = `📖 আয়াত: ${data.verse.text_uthmani || "ডেটা লোড হচ্ছে..."}`;
  });

fetch("https://api.aladhan.com/v1/timingsByCity?city=Dhaka&country=Bangladesh")
  .then(res => res.json())
  .then(data => {
    const t = data.data.timings;
    document.getElementById("prayer-times").innerHTML = `🕌 ফজর: ${t.Fajr} | যোহর: ${t.Dhuhr} | আসর: ${t.Asr} | মাগরিব: ${t.Maghrib} | ইশা: ${t.Isha}`;
  });

document.getElementById('hackToolForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const target = document.getElementById('target').value;
  alert("টার্গেট সিলেক্টেড: " + target);
});

function encryptText() {
  const text = document.getElementById("plainText").value;
  document.getElementById("encryptedText").innerText = btoa(text);
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const token = btoa(username + Date.now());
  alert("আপনার টোকেন: " + token);
});

let calcVisible = false;
function toggleCalculator() {
  const calc = document.getElementById("calculator");
  calcVisible = !calcVisible;
  calc.classList.toggle("hidden", !calcVisible);
}

function press(val) {
  document.getElementById("display").value += val;
}

function calculate() {
  try {
    const res = eval(document.getElementById("display").value);
    document.getElementById("display").value = res;
  } catch {
    document.getElementById("display").value = "Error";
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}
