function switchDoc(type) {
  const imgElement = document.getElementById('doc-image');
  const buttons = document.querySelectorAll('.tab-btn');
  
  // 1. Matikan kelas aktif di semua tombol
  buttons.forEach(btn => btn.classList.remove('active'));
  
  // 2. Efek transisi halus saat ganti gambar
  imgElement.style.opacity = '0.3';
  
  setTimeout(() => {
    // 3. Ganti source gambar & alt teks sesuai tombol yang diklik
    if (type === 'schematic') {
      imgElement.src = 'assets/schematic/schematc2.jpeg';
      imgElement.alt = 'Schematic Design';
      buttons[0].classList.add('active');
    } else if (type === 'layout') {
      imgElement.src = 'assets/pcb/layout2.jpeg';
      imgElement.alt = 'PCB Layout';
      buttons[1].classList.add('active');
    }
    // 4. Kembalikan opacity gambar
    imgElement.style.opacity = '1';
  }, 200);
}
const docImages = {
  schematic: [
    'assets/schematic/schematc2.jpeg',
    'assets/schematic/scematic3.jpeg',
    'assets/schematic/Schematic1.jpeg',
    'assets/schematic/SCH5.png',
    'assets/schematic/SCH6.png',
    'assets/schematic/SCH7.png',
    'assets/schematic/SCH8.png' // Contoh cara menambahkan gambar ke-2 skematik
  ],
  layout: [
    'assets/pcb/layout2.jpeg',
    'assets/pcb/layout1.jpeg',
    'assets/pcb/LYT3.png',
    'assets/pcb/LYT4.png',
    'assets/pcb/LYT5.png',
    'assets/pcb/LYT6.png',
    'assets/pcb/LYT7.png',
    'assets/pcb/LYT8.png',
    'assets/pcb/LYT9.png' // Contoh cara menambahkan gambar ke-2 pcb layout
  ]
};

let currentCategory = 'schematic';
let currentIndex = 0;

// Fungsi inisialisasi awal saat web dimuat
function initSlider() {
  updateSliderDisplay();
}

function switchCategory(category) {
  currentCategory = category;
  currentIndex = 0; // Reset balik ke halaman pertama tiap pindah tab
  
  // Update kelas active pada tombol tab
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (category === 'schematic') document.getElementById('tab-schematic').classList.add('active');
  if (category === 'layout') document.getElementById('tab-layout').classList.add('active');
  
  updateSliderDisplay();
}

function nextImg() {
  const totalFiles = docImages[currentCategory].length;
  // Geser indeks ke kanan, kalau mentok balik ke 0
  currentIndex = (currentIndex + 1) % totalFiles;
  updateSliderDisplay();
}

function prevImg() {
  const totalFiles = docImages[currentCategory].length;
  // Geser indeks ke kiri, kalau mentok balik ke paling akhir
  currentIndex = (currentIndex - 1 + totalFiles) % totalFiles;
  updateSliderDisplay();
}

function updateSliderDisplay() {
  const imgElement = document.getElementById('doc-image');
  const currentList = docImages[currentCategory];
  
  // Animasi fade-out ringkas
  imgElement.style.opacity = '0.3';
  
  setTimeout(() => {
    // Set file gambar berdasarkan kategori dan indeks aktif saat ini
    imgElement.src = currentList[currentIndex];
    imgElement.alt = currentCategory + ' image ' + (currentIndex + 1);
    
    // Perbarui teks indikator angka (X / Y)
    document.getElementById('current-index').innerText = currentIndex + 1;
    document.getElementById('total-index').innerText = currentList.length;
    
    imgElement.style.opacity = '1';
  }, 150);
}

// Jalankan fungsi ketika dokumen selesai dimuat di browser
window.onload = initSlider;