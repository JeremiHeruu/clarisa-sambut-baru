
    // Ambil query string dari URL
    const params = new URLSearchParams(window.location.search);
    // Ambil nilai 'to' dari query string
    const recipientName = params.get('to');

    // Cek apakah recipientName tidak null, lalu tampilkan
    if (recipientName) {
        // Ganti isi elemen dengan ID 'recipient-name' dengan nama penerima
        document.getElementById('recipient-name').textContent = decodeURIComponent(recipientName);
    }

