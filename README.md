# Maison Rasa (React + Vite)

Website landing page **Maison Rasa — Indonesian Haute Cuisine & Fine Dining**, dibangun dari desain Figma (referensi: `maison rasa design.pdf`) menggunakan struktur komponen yang sudah disiapkan.

## Menjalankan proyek

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build produksi ke folder dist/
npm run lint     # ESLint
```

## Struktur

```
src/
  App.jsx                  # merakit seluruh section + state "feast"
  index.css                # font, design token, tipografi & utilitas global
  App.css                  # styling tiap section + responsive breakpoints
  main.jsx                 # entry point (tidak diubah)
  data/dishes.js           # data 8 menu + kategori filter (sumber tunggal)
  components/
    Navbar.jsx             # navigasi anchor + menu mobile + sticky state
    Hero.jsx               # hero dengan CTA menu & reservasi
    About.jsx              # Our Culinary Heritage
    Menu.jsx               # grid menu + filter kategori
    MenuCard.jsx           # kartu hidangan + tombol Add to Feast
    Gallery.jsx            # galeri foto suasana restoran
    Location.jsx           # alamat, jam buka, peta & Open Map
    Reservation.jsx        # form reservasi -> WhatsApp
    Footer.jsx             # navigasi, jam layanan, newsletter
    Icons.jsx              # ikon SVG inline
public/
  images/                  # aset foto & peta hasil ekstraksi dari desain Figma
  fonts/                   # Montserrat & Lora (self-hosted, tidak perlu CDN)
  maison-rasa-menu.pdf     # menu degustasi yang bisa diunduh
  favicon.svg              # monogram MR
```

## Palet & tipografi

- Rosewood `#6B0B0C`, Coffee Bean `#2D120D`, Lemon Chiffon `#FFF8CA`, Botticelli `#CDE3E8`
- Gold `#F4B400` — aksen tombol utama sesuai desain Figma
- Lora (heading), Montserrat (UI/body), keduanya tersimpan lokal di `public/fonts`

## Interaksi

- Navbar: anchor ke setiap section, menu hamburger di tablet/mobile, background menggelap saat scroll.
- Menu: filter kategori; tombol **Add to Feast** menandai hidangan dan jumlahnya ikut ke form reservasi.
- Reservasi: input tervalidasi, lalu membuka `wa.me` dengan pesan terisi otomatis.
- **Open map**: Google Maps untuk Jalan Teuku Umar No. 18, Menteng.
- Newsletter footer: feedback sukses setelah submit.

## Catatan untuk kolaborasi

- Konfigurasi Vite, `index.html`, dan `main.jsx` dipertahankan; `vite.config.js` hanya ditambah `server.allowedHosts` agar live preview Arena bisa diakses.
- Nomor WhatsApp dan tautan sosial mengikuti desain (`+62 21 3918 889`, `@maisonrasa.jkt`). Perbarui bila ada nomor/Halaman resmi baru.
- Perubahan dibuat lokal di branch `main`. Sebelum push, lakukan `git pull --rebase` dan review konflik dengan anggota kelompok.
