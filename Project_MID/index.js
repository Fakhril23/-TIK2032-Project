// Menampilkan konten satu per satu
document.addEventListener('DOMContentLoaded', function() {
    const kontenItems = document.querySelectorAll('.konten1, .konten2, .konten3');
    let delay = 0;
    kontenItems.forEach(function(item) {
        item.style.animationDelay = delay + 's';
        delay += 2; // Sesuaikan dengan durasi animasi mengetik
    });
});
