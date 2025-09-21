# Personal Contact System

## 📋 Deskripsi
Sistem Personal Contact adalah aplikasi web untuk mengelola data dan percakapan personal contact karyawan di PT. Sapta Indra Sejati. Sistem ini menyediakan form untuk input data pribadi, topik pembahasan, dan validasi atasan dengan sistem email otomatis.

## ✨ Fitur Utama

### 🔐 Validasi Form
- Validasi email dengan konfirmasi
- Cek kelengkapan data mandatory
- Preview email sebelum dikirim

### 📧 Sistem Email Otomatis
- Email konfirmasi ke karyawan
- Template profesional dengan ringkasan data lengkap
- Notifikasi ke atasan (opsional)
- Sistem debugging untuk troubleshooting email

### 📊 Data Management
- Input data pribadi (nama, NRP, jabatan, dll)
- Kategori topik pembahasan (pribadi, keluarga, pekerjaan)
- Pemilihan atasan dari daftar yang tersedia
- Integrasi dengan Google Sheets (opsional)

### 🎨 User Interface
- Design responsif untuk desktop dan mobile
- Interface yang user-friendly
- Logo perusahaan terintegrasi
- Validasi real-time dengan indikator visual

## 🚀 Live Demo
GitHub Pages: `https://[username].github.io/Personal-Contact`

## 🛠️ Teknologi yang Digunakan
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Google Apps Script
- **Email**: Gmail API via Google Apps Script
- **Storage**: Google Sheets (opsional)
- **Hosting**: GitHub Pages

## 📁 Struktur File
```
Personal-Contact/
├── index.html              # Form utama
├── style.css               # Styling CSS
├── script.js               # JavaScript (legacy signature)
├── google-apps-script.js   # Server-side code
├── logo-alamtri.png        # Logo institusi
├── Picture1.png            # Logo perusahaan
├── SETUP-EMAIL-GUIDE.md    # Panduan setup email
└── README.md               # Dokumentasi ini
```

## ⚙️ Cara Setup

### 1. Clone Repository
```bash
git clone https://github.com/[username]/Personal-Contact.git
cd Personal-Contact
```

### 2. Setup Google Apps Script
1. Buka [Google Apps Script](https://script.google.com)
2. Buat project baru
3. Copy-paste kode dari `google-apps-script.js`
4. Deploy sebagai Web App
5. Copy URL yang dihasilkan

### 3. Update Configuration
Edit `index.html`, ganti URL di bagian:
```javascript
const urlScript = 'PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
```

### 4. Deploy ke GitHub Pages
1. Push ke repository GitHub
2. Buka Settings > Pages
3. Pilih source: Deploy from a branch
4. Pilih branch: main
5. Klik Save

## 📧 Konfigurasi Email

### Mapping Email Atasan
Sistem sudah include mapping nama atasan ke email:
- 34 atasan dengan email @saptaindra.co.id
- Email validation otomatis
- Error handling untuk email tidak valid

### Template Email
- Subject: "Personal Contact - Konfirmasi Data Terkirim"
- Format profesional dengan logo dan branding
- Ringkasan lengkap data yang disubmit
- Status validasi dan informasi next step

## 🔧 Troubleshooting

### Email Tidak Terkirim
1. Cek console browser untuk error
2. Verifikasi Google Apps Script permissions
3. Cek Gmail quota (500 email/day)
4. Lihat panduan lengkap di `SETUP-EMAIL-GUIDE.md`

### Form Validation Error
1. Pastikan semua field mandatory terisi
2. Validasi format email karyawan
3. Klik tombol "Validasi" sebelum submit

### JavaScript Errors
1. Cek browser compatibility (modern browser recommended)
2. Disable ad-blocker yang mungkin memblokir script
3. Clear browser cache

## 📱 Compatibility
- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (responsive design)

## 👥 Tim Pengembangan
- **Developer**: GitHub Copilot Assistant
- **Company**: PT. Sapta Indra Sejati
- **Version**: 1.0.0

## 📄 License
© 2024 PT. Sapta Indra Sejati. All rights reserved.

## 📞 Support
Untuk pertanyaan teknis atau bantuan setup:
- Hubungi IT Department
- Atau buka issue di repository ini

## 🔄 Update Log

### v1.0.0 (Latest)
- ✅ Removed digital signature functionality
- ✅ Added email validation system
- ✅ Professional email templates
- ✅ Google Apps Script integration
- ✅ Responsive design improvements
- ✅ Comprehensive error handling
- ✅ Setup documentation

---

**Status**: ✅ Production Ready | 🚀 Deployed | 📧 Email System Active