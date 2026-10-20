
const formBuku = document.getElementById("formBuku");
const daftarBuku = document.getElementById("daftarBuku");

formBuku.addEventListener("submit", function (event) {
    event.preventDefault();

    const judul = document.getElementById("judul").value.trim();
    const penulis = document.getElementById("penulis").value.trim();
    const kodeBuku = document.getElementById("isbn").value.trim();

    if (!judul || !penulis || !kodeBuku) {
        alert("Semua data buku wajib diisi.");
        return;
    }

    const baris = document.createElement("tr");

    [judul, penulis, kodeBuku].forEach(function (nilai) {
        const kolom = document.createElement("td");
        kolom.textContent = nilai;
        baris.appendChild(kolom);
    });

    daftarBuku.appendChild(baris);
    formBuku.reset();
});
