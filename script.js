// Array untuk menyimpan produk yang ditambahkan ke keranjang
let keranjang = [];

// Mengupdate jumlah dan total di header
function updateKeranjang() {
    let jumlah = keranjang.length;
    let total = keranjang.reduce((acc, item) => acc + item.harga, 0);

    // Update tampilan jumlah dan total di header
    document.getElementById("keranjangJumlah").textContent = jumlah;
    document.getElementById("keranjangTotal").textContent = `Rp ${total.toLocaleString()}`;

    // Update tampilan item di halaman keranjang
    const keranjangItemsElement = document.getElementById("keranjangItems");
    keranjangItemsElement.innerHTML = ''; // Kosongkan list terlebih dahulu

    // Tampilkan setiap item yang ada di keranjang
    keranjang.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nama} - Rp ${item.harga.toLocaleString()}`;
        keranjangItemsElement.appendChild(li);
    });

    // Update total harga di halaman keranjang
    document.getElementById("keranjangTotalHarga").textContent = `Total: Rp ${total.toLocaleString()}`;
}

// Menangani klik pada tombol "Beli Sekarang"
document.querySelectorAll('.beli').forEach(button => {
    button.addEventListener('click', (event) => {
        // Ambil elemen produk yang terkait dengan tombol
        let productElement = event.target.closest('.product');
        let nama = productElement.getAttribute('data-nama');
        let harga = parseInt(productElement.getAttribute('data-harga'));

        // Tambahkan produk ke keranjang
        keranjang.push({ nama, harga });

        // Update keranjang di tampilan
        updateKeranjang();
    });
});

