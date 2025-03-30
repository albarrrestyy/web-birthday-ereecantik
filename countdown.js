// Tentukan tanggal akhir countdown
const countdownDate = new Date("2025-08-23T00:00:00").getTime();

// Update timer setiap detik
const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Hitung hari, jam, menit, detik
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Tampilkan hasil di HTML
    document.getElementById("countdown").innerHTML = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;

    // Hentikan timer jika waktu habis
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Selamat ulang tahun, Rere! 🎉🎂";
    }
}, 1000);