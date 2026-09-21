# Menampilkan logo di Google

Semua halaman portofolio sudah menunjuk ke `favicon.png` (96 × 96 piksel), yang dibuat dari `logo.png`. Unggah file ikon ini bersama halaman HTML yang diperbarui.

## Pengaturan domain utama GitHub Pages

Google memilih satu favicon untuk setiap hostname. Jika portofolio berada di subfolder `https://timothy1016.github.io/.../`, favicon juga perlu ditentukan pada halaman utama `https://timothy1016.github.io/`. Pengaturan di subfolder saja tidak cukup.

Pada sumber GitHub Pages untuk domain utama (biasanya repositori `timothy1016.github.io`):

1. Salin `favicon.png` ke direktori publik utama.
2. Tambahkan tag berikut di dalam `<head>` halaman utama, menggantikan tag favicon lama jika ada:

```html
<link rel="icon" type="image/png" sizes="96x96" href="/favicon.png">
```

3. Publikasikan perubahan dan pastikan halaman utama serta `https://timothy1016.github.io/favicon.png` dapat diakses tanpa login dan tidak diblokir untuk crawler.
4. Di Google Search Console, inspeksi URL `https://timothy1016.github.io/` lalu pilih Request indexing.

Google dapat memerlukan beberapa hari hingga beberapa minggu untuk memproses ulang; kemunculan favicon tidak dijamin.

Publikasi selesai pada 20 September 2026 melalui koneksi GitHub:

- Portofolio: https://timothy1016.github.io/Portofolio-Profesional-TimothyNathanielLaurencio/
- Domain utama: https://timothy1016.github.io/
- Ikon utama: https://timothy1016.github.io/favicon.png
- Repositori domain utama: https://github.com/Timothy1016/timothy1016.github.io
- Commit portofolio: 275b9eb2091953bb0cf5399d6c525a6fe3a34967
- Commit homepage: 6712092be074ee07206cf4f874976a3b55d2a6c0

Favicon diperbarui pada enam halaman versi online tanpa mengganti konten lainnya dengan versi lokal. Folder lokal dan repositori online memiliki perbedaan lain; jangan menimpa seluruh halaman online untuk pembaruan favicon berikutnya.

Homepage domain utama dan logo 96 × 96 sudah diverifikasi melalui browser. Request indexing di Google Search Console belum dilakukan.

Referensi: https://developers.google.com/search/docs/appearance/favicon-in-search
