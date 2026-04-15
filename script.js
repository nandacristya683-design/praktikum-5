document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const hasil = document.getElementById("hasil");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const nohp = document.getElementById("nohp").value.trim();
        const kategori = document.getElementById("kategori").value;
        const pesan = document.getElementById("pesan").value.trim();

        // Validasi input kosong
        if (nama === "" || email === "" || nohp === "" || kategori === "" || pesan === "") {
            alert("Semua field harus diisi!");
            return;
        }

        // Validasi email
        if (!email.includes("@")) {
            alert("Email tidak valid!");
            return;
        }

        // Tampilkan hasil
        hasil.innerHTML = `
            <div style="border:1px solid #ccc; padding:10px; margin-top:20px;">
                <h3>Data yang Dikirim:</h3>
                <p><strong>Nama:</strong> ${nama}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Telepon:</strong> ${nohp}</p>
                <p><strong>Kategori:</strong> ${kategori}</p>
                <p><strong>Pesan:</strong> ${pesan}</p>
            </div>
        `;

        alert("Data berhasil dikirim!");
        form.reset();
    });

    document.getElementById("nama").addEventListener("input", function () {
        console.log("user sedang mengetik nama");
    });
});