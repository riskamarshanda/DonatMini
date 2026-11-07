// Toggle Mobile Navigation Menu (Tombol Menu HP)
const menuToggle = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Ketika tombol garis tiga diklik, aktifkan menu navigasi di HP
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Menutup menu otomatis ketika salah satu link diklik di mode mobile
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

console.log("Website UMKM DonatMini.co berhasil dimuat!");