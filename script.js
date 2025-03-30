document.addEventListener("DOMContentLoaded", function () {
    let message = document.getElementById("birthdayMessage");
    message.style.opacity = "1";
});

document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bgMusic");
    let playButton = document.getElementById("playMusicBtn");

    playButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playButton.textContent = "Stop";
        } else {
            audio.pause();
            playButton.textContent = "Start";
        }
    });
});

if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "Selamat ulang tahun, Rere! 🎉🎂";

    // Simpan status kalau countdown sudah selesai
    sessionStorage.setItem("countdown_done", "true");

    // Arahkan ke halaman utama setelah 3 detik
    setTimeout(() => {
        window.location.href = "index.html";
    }, 3000);
}