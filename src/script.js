
const formBuku = document.getElementById("formBuku");
const daftarBuku = document.getElementById("daftarBuku");
const cariBuku = document.getElementById("cariBuku");
const pesanKosong = document.getElementById("pesanKosong");

// Menambahkan data buku
formBuku.addEventListener("submit", function (event) {
    event.preventDefault();

    const judul = document.getElementById("judul").value.trim();
    const penulis = document.getElementById("penulis").value.trim();
    const kodeBuku = document.getElementById("isbn").value.trim();

    if (!judul || !penulis || !kodeBuku) {
        alert("Semua data buku wajib diisi.");
        return;
    }

    // Mencegah kode buku yang sama
    const semuaBaris = daftarBuku.querySelectorAll("tr");
    const kodeSudahAda = Array.from(semuaBaris).some(function (baris) {
        return baris.cells[2].textContent.toLowerCase() === kodeBuku.toLowerCase();
    });

    if (kodeSudahAda) {
        alert("Kode buku sudah digunakan. Gunakan kode lain.");
        return;
    }

    // Membuat baris buku baru
    const baris = document.createElement("tr");

    [judul, penulis, kodeBuku].forEach(function (nilai) {
        const kolom = document.createElement("td");
        kolom.textContent = nilai;
        baris.appendChild(kolom);
    });

    daftarBuku.appendChild(baris);

    formBuku.reset();

    // Terapkan pencarian yang sedang aktif
    tampilkanHasilPencarian();
});

// Mencari buku berdasarkan judul, penulis, atau kode
function tampilkanHasilPencarian() {
    const kataKunci = cariBuku.value.trim().toLowerCase();
    const semuaBaris = daftarBuku.querySelectorAll("tr");
    let jumlahDitemukan = 0;

    semuaBaris.forEach(function (baris) {
        const isiBaris = baris.textContent.toLowerCase();
        const cocok = isiBaris.includes(kataKunci);

        baris.style.display = cocok ? "" : "none";

        if (cocok) {
            jumlahDitemukan++;
        }
    });

    pesanKosong.hidden = jumlahDitemukan > 0;
}

// Jalankan pencarian setiap kali pengguna mengetik
cariBuku.addEventListener("input", tampilkanHasilPencarian);
