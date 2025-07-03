# Panduan Instalasi Backend Contact Management

## Persyaratan

- Node.js & npm sudah terpasang di komputer.

## Langkah Instalasi

1. **Clone repository**

```bash
# git clone <url-repo>
cd backend
```

2. **Install dependencies**

```bash
npm install

npx prisma generate

```

3. **Konfigurasi environment**

<!-- - Salin file `.env.example` menjadi `.env`
- Edit sesuai kebutuhan (database, port, dsb) -->

- buat db di mysql namanya bebas

```bash
npx prisma migrate dev

```

4. **Jalankan server**

```bash
node src/main.js
```

<!-- atau untuk development:

```bash
npm run dev
``` -->

<!-- ## Catatan

- Pastikan database sudah berjalan sebelum menjalankan server.
- Untuk detail lebih lanjut, cek dokumentasi di folder ini. -->
