# Indo45 Video Platform

## 📂 Struktur
- `/` → Halaman publik (nonton video)
- `/admin` → Halaman admin (login + upload video)

## 🚀 Deploy ke Vercel/Netlify
1. Upload project ini ke GitHub atau drag-drop ke [Vercel](https://vercel.com) / [Netlify](https://app.netlify.com/drop).
2. Pastikan Firebase config di `app.js` (publik & admin) sudah diisi dengan data project kamu.

## 🔑 Firebase Setup
- Aktifkan **Firebase Auth** (Email & Password).
- Aktifkan **Firebase Storage** (buat folder `videos/`).
- Ganti `YOUR_API_KEY`, `YOUR_PROJECT_ID`, dll dengan data asli dari Firebase Console.
