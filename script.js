    // Handle URL parameters for recipient name
    const urlParams = new URLSearchParams(window.location.search);
    const recipientName = urlParams.get('kepada');
    if (recipientName) {
      document.getElementById('recipient-name').textContent = recipientName.replace(/\+/g, ' ');
    }
  
    // Countdown function
    function countdown() {
      const countDate = new Date("November 24, 2024 18:00:00").getTime();
      const now = new Date().getTime();
      const gap = countDate - now;
  
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
  
      const textDay = Math.floor(gap / day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      const textSecond = Math.floor((gap % minute) / second);
  
      document.getElementById('countdown').innerHTML =
        `<div>${textDay} <br/><p style="font-size:10px";>Hari</p></div>
         <div>${textHour} <br/><p style="font-size:10px";>Jam</p></div>
         <div>${textMinute} <br/><p style="font-size:10px";>Mnt</p></div>
         <div>${textSecond} <br/><p style="font-size:10px";>Dtk</p></div>`;
    }
  
    setInterval(countdown, 1000);
  
    // Copy to clipboard function
    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        alert('Nomor rekening berhasil disalin!');
      }).catch(err => {
        alert('Gagal menyalin nomor rekening.');
      });
    }

// play music & scroll function

document.addEventListener('DOMContentLoaded', () => {
  const openMusicBtn = document.getElementById('open-music-btn');
  const frameCover = document.getElementById('frame-cover');
  const frame1 = document.getElementById('frame-1');
  const frame2 = document.getElementById('frame-2');
  const frame3 = document.getElementById('frame-4');
  const frame4 = document.getElementById('frame-4');
  const frame7 = document.getElementById('frame-6');
  const musicControl = document.getElementById('music-control');
  const backgroundMusic = document.getElementById('background-music');

  openMusicBtn.addEventListener('click', () => {
      frameCover.style.display = 'none';
      frame1.style.display = 'flex';
      frame2.style.display = 'flex';
      frame3.style.display = 'flex';
      frame4.style.display = 'flex';
      frame7.style.display = 'flex';

      document.body.style.overflow = 'auto';
      
      backgroundMusic.play();
      musicControl.classList.remove('hidden');
  });

  musicControl.addEventListener('click', () => {
      if (backgroundMusic.paused) {
          backgroundMusic.play();
          musicControl.textContent = '⏸️';
      } else {
          backgroundMusic.pause();
          musicControl.textContent = '▶️';
      }
  });
});

document.getElementById('open-music-btn').addEventListener('click', function() {
  var frame1 = document.getElementById('frame-cover');
  var frame2 = document.getElementById('frame-1');

  frame1.classList.add('hiddentrans');
  frame2.classList.remove('hiddentrans');
  frame2.classList.add('visible');
});

        // Fungsi untuk menghapus UCAPAN / DOA / KOMENTAR
      //  function hapusSemuaItem() {
      //    localStorage.clear();
      //    alert('Semua item di localStorage telah dihapus.');
      //  }


      // EFEK TRANSISI TEKS ATAS BAWAH KANAN KIRI
      document.addEventListener('DOMContentLoaded', function () {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const elements = document.querySelectorAll('.transisi');
        elements.forEach(el => observer.observe(el));
    });


    function showFrame1() {
    document.querySelector('.container').classList.add('show-frame1');
  }


  function besar() {
    document.getElementById('gambar').classList.add('transisi-besar');
}

function kecil() {
    document.getElementById('gambar').classList.remove('transisi-besar');
}


//AWAL UCAPAN//

document.addEventListener('DOMContentLoaded', function() {
  fetchUcapan(); // Memanggil fungsi untuk mengambil semua data ucapan saat halaman dimuat
});

// Fungsi untuk mengambil semua data ucapan dari Google Sheets
function fetchUcapan() {
  var url = 'https://script.google.com/macros/s/AKfycbwkgAh29rT8jWmLQhY4Ajlvfjulgry_ojynDXYvrYKunjR7OEjy7z5gDUzRBCa4WAi9/exec'; // Ganti dengan URL Web App Google Apps Script Anda

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayAllUcapan(data); // Tampilkan semua ucapan yang diterima di halaman
    })
    .catch(error => {
      console.error('Error fetching ucapan:', error);
    });
}

// Fungsi untuk menampilkan semua ucapan di halaman
function displayAllUcapan(ucapanData) {
  var ucapanContainer = document.getElementById('ucapan');
  ucapanContainer.innerHTML = ''; // Kosongkan isi sebelumnya

  ucapanData.forEach(function(ucapan) {
    var ucapanItem = document.createElement('div');
    ucapanItem.classList.add('ucapan-item');
    ucapanItem.innerHTML = `<strong>${ucapan.nama} (${ucapan.kehadiran}):</strong><p>${ucapan.pesan}</p>`;
    ucapanContainer.appendChild(ucapanItem);
  });
}

// Fungsi untuk mengirim data ke Google Apps Script
document.getElementById('formPernikahan').addEventListener('submit', function(event) {
  event.preventDefault();

  var nama = document.getElementById('nama').value;
  var kehadiran = document.getElementById('kehadiran').value;
  var pesan = document.getElementById('pesan').value;

  var url = 'https://script.google.com/macros/s/AKfycbwkgAh29rT8jWmLQhY4Ajlvfjulgry_ojynDXYvrYKunjR7OEjy7z5gDUzRBCa4WAi9/exec'; // Ganti dengan URL Web App

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'nama': nama,
      'kehadiran': kehadiran,
      'pesan': pesan
    })
  })
  .then(response => response.text())
  .then(text => {
    document.getElementById('respon').innerHTML = 'Terima kasih, ucapan Anda sudah diterima!';
    // Tambahkan ucapan baru ke tampilan
    var ucapanContainer = document.getElementById('ucapan');
    var ucapanItem = document.createElement('div');
    ucapanItem.classList.add('ucapan-item');
    ucapanItem.innerHTML = `<strong>${nama} (${kehadiran}):</strong><p>${pesan}</p>`;
    ucapanContainer.prepend(ucapanItem); // Menambahkan ke atas daftar
    document.getElementById('formPernikahan').reset(); // Reset form setelah kirim
  })
  .catch(error => {
    document.getElementById('respon').innerHTML = 'Terjadi kesalahan, coba lagi nanti.';
    console.error('Error:', error);
  });
});

//AKHIR UCAPAN//

