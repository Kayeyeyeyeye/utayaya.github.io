let currentMessage = 0;

const messages = [
    {
        text: "Aku cuma mau bilang, aku bakal selalu ada buat kamu, kayak kamu yang selalu ada buat aku. Jadi kalau ada apa apa, aku minta tolong buat jujur ke aku dan minta tolong ke aku juga yah.. Makasih banget udah selalu bikin aku ngerasa dihargain. Kamu itu spesial banget buat aku, mwahhhhh❤️🤍.",
        image: "image/cat.png"
    },

    {
        text: "Aku mau berterimakasih karena kamu mau bisa membagi waktu mu buat aku walau di sela sela kesibukan dan segela urusan kamu. Makasih ya, aku bener-bener ngerasa beruntung punya kamu yang selalu ada buat aku.",
        image: "image/cat.png"
    },
    {
        text: "Kamu kerennn. Di tengah semua kesibukanmu, kamu masih kasih perhatian ke aku. Gimanapun kamu fokus ke kerjaan juga ya, aku tau kamu pasti ga tega sama aku, tapi aku berusaha ngertiin kok. Makasih yah, sayang.",
        image: "image/cat.png"
    },
    {
        text: "Aku tau kamu capek bangettt, tapi kamu selalu berusaha buat bikin aku tetep ngerasa diperhatiin. Makasih ya sayang ku cinta ku, kamu selalu bikin aku ngerasa istimewa.",
        image: "image/cat.png"
    },

    {
        text: "Kamu jangan sampai ga makan ya, jangan lupa jaga kesehatan ya sayang. Aku khawatir sama kamu, tapi kamu selalu bilang gapapa gapapa. Makasih udah selalu bikin aku nggak khawatir.",
        image: "image/cat.png"
    },

];

function nextMessage() {
    currentMessage++;
    if (currentMessage >= messages.length) {
        currentMessage = 0;
    }
    
    const messageBox = document.getElementById('message-box');
    messageBox.classList.remove('visible'); // Hapus kelas visible untuk efek fade-out

    setTimeout(() => {
        document.getElementById('message-text').innerHTML = messages[currentMessage].text;
        document.getElementById('message-image').src = messages[currentMessage].image;
        messageBox.classList.add('visible'); // Tambahkan kelas visible untuk efek fade-in
    }, 500); // Waktu delay sesuai dengan durasi transisi
}

// Memanggil nextMessage agar pesan pertama ditampilkan saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    nextMessage(); // Memanggil fungsi untuk menampilkan pesan pertama
});
