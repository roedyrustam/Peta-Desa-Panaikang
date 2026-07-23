# Sistem Informasi Peta Desa Panaikang 🗺️

Aplikasi web Sistem Informasi Geografis (GIS) interaktif untuk Desa Panaikang, Kecamatan Minasatene, Kabupaten Pangkep. Peta digital ini menyajikan visualisasi data spasial wilayah desa, fasilitas umum, dan pembagian tata guna lahan dengan antarmuka pengguna yang modern dan responsif.

## 🌟 Fitur Utama

- **Peta Interaktif**: Navigasi mulus dengan dukungan zoom, pan, kompas, skala, dan mini-map (menggunakan Leaflet.js).
- **Multi-Basemap**: Berbagai pilihan peta dasar seperti Google Satellite, OpenStreetMap, Topographic, Dark/Light Mode, dan Carto Positron.
- **Visualisasi GeoJSON Multi-Layer**: Mendukung dan merender data spasial format GeoJSON untuk berbagai kategori:
  - 🏘️ Batas Wilayah Desa
  - 🏥 Fasilitas Umum (Ibadah, Pendidikan, Kesehatan, Pemerintahan, Wisata)
  - 🛣️ Jaringan Jalan
  - 🌊 Aliran Sungai
  - 🌳 Kawasan Hutan
  - 🌾 Kawasan Sawah
  - 🏡 Kawasan Pemukiman
  - ⛰️ Kawasan Karst
- **Filter Layer Kustom**: Menu dropdown dengan checkbox untuk mengaktifkan atau menonaktifkan layer tertentu sesuai kebutuhan.
- **Pencarian Cerdas (Smart Search)**: Cari lokasi atau fasilitas berdasarkan nama. Hasil pencarian akan disorot (highlight) secara visual di atas peta.
- **Ikon Dinamis & Kustom**: Penanda (marker) fasilitas otomatis menyesuaikan ikon dan warna berdasarkan fungsinya.
- **UI Modern**: Desain elegan bernuansa hijau dengan efek glassmorphism, menggunakan Tailwind CSS.

## 🛠️ Teknologi yang Digunakan

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Tailwind CSS (via CDN)
- **Mapping Engine**: [Leaflet.js](https://leafletjs.com/) v1.9.4
- **Leaflet Plugins**:
  - `leaflet-compass`: Untuk navigasi arah.
  - `leaflet-minimap`: Untuk peta inset kecil di sudut layar.
- **Font**: Fraunces, Plus Jakarta Sans, IBM Plex Mono (Google Fonts)

## 📁 Struktur Direktori

```text
├── asset/                        # Berisi seluruh file data spasial (GeoJSON)
│   ├── desaPanaikangReal.json    # GeoJSON Batas Desa
│   ├── fasilitas.json            # GeoJSON Titik Fasilitas
│   ├── jalan.json                # GeoJSON Jaringan Jalan
│   ├── kars.json                 # GeoJSON Kawasan Karst
│   ├── kawasanHutan.json         # GeoJSON Kawasan Hutan
│   ├── pemukimanReal.json        # GeoJSON Kawasan Pemukiman
│   ├── sawahReal.json            # GeoJSON Kawasan Sawah
│   └── sungai.json               # GeoJSON Aliran Sungai
├── index.html                    # File utama aplikasi (HTML + JS terintegrasi)
└── README.md                     # Dokumentasi project
```

## 🚀 Cara Menjalankan (Instalasi)

Aplikasi ini bersifat sisi-klien (client-side) sepenuhnya dan tidak memerlukan instalasi backend atau build tools khusus.

1. Clone repositori ini atau unduh kode sumber (ZIP).
2. Buka folder proyek.
3. Jalankan `index.html` menggunakan salah satu cara berikut:
   - **Ekstensi Live Server** di VS Code.
   - Buka langsung file `index.html` menggunakan web browser (Google Chrome, Firefox, Safari, dll).
   *Catatan: Penggunaan Live Server disarankan agar file `fetch` JSON dapat berjalan dengan baik (menghindari error CORS protocol `file://`).*

## 💡 Kustomisasi

- **Menambahkan Data GeoJSON Baru**:
  Letakkan file `.json` di folder `asset/`, kemudian panggil menggunakan fungsi `fetch()` dan `L.geoJSON()` di dalam `index.html` seperti contoh layer yang sudah ada.
- **Mengubah Warna Tema**:
  Warna tema utama diatur di konfigurasi Tailwind pada bagian atas `index.html` (`tailwind = { config: { ... } }`). Silakan ubah variabel warna pada bagian `colors`.

---
*Proker KKN - Sistem Informasi Peta Desa Panaikang*