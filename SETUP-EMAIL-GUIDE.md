# PANDUAN SETUP GOOGLE APPS SCRIPT UNTUK EMAIL
# Personal Contact System

## LANGKAH 1: BUKA GOOGLE APPS SCRIPT

1. Buka https://script.google.com
2. Login dengan akun Google Anda
3. Klik "New Project" atau "Proyek Baru"

## LANGKAH 2: SETUP KODE

1. **Hapus kode default** di Code.gs
2. **Copy-paste** semua kode dari file `google-apps-script.js`
3. **Ganti YOUR_SPREADSHEET_ID** (opsional):
   - Buat Google Sheets baru untuk menyimpan data
   - Copy ID dari URL sheets (bagian setelah /d/ dan sebelum /edit)
   - Ganti `YOUR_SPREADSHEET_ID` dengan ID tersebut

## LANGKAH 3: DEPLOY WEB APP

1. **Klik "Deploy" > "New Deployment"**
2. **Pilih type**: Web app
3. **Execute as**: Me (your email)
4. **Who has access**: Anyone (atau Anyone in your organization)
5. **Klik "Deploy"**
6. **Copy Web App URL** yang dihasilkan

## LANGKAH 4: UPDATE URL DI INDEX.HTML

Ganti URL di index.html:
```javascript
const urlScript = 'PASTE_WEB_APP_URL_HERE';
```

## LANGKAH 5: TESTING & TROUBLESHOOTING

### A. Test Email Manual
1. Buka Apps Script
2. Pilih function `testEmailSending`
3. Ganti email test dengan email Anda
4. Klik "Run"
5. Cek console log untuk error

### B. Permissions & Authorization
1. **Saat pertama run**, akan minta izin:
   - Gmail API access
   - Google Sheets API access
2. **Klik "Review Permissions"**
3. **Pilih akun Google Anda**
4. **Klik "Allow"**

### C. Debugging Email Issues

#### Masalah Email Tidak Terkirim:
1. **Cek Console Logs**:
   - Buka Execution transcript
   - Lihat error messages
   
2. **Common Issues**:
   - Email format tidak valid
   - Gmail quota exceeded (500 emails/day)
   - Permission tidak diberikan
   - Body email kosong

3. **Solutions**:
   - Validasi format email
   - Tunggu 24 jam jika quota habis
   - Re-authorize permissions
   - Debug body email content

## LANGKAH 6: VERIFIKASI SISTEM

### Test Flow Lengkap:
1. **Isi form** di website
2. **Klik Validasi** → Input email test Anda
3. **Klik Kirim**
4. **Cek console browser** untuk debug logs
5. **Cek email inbox** (termasuk spam folder)
6. **Cek Google Apps Script logs** untuk server-side errors

### Expected Behavior:
- ✅ Form data terkirim
- ✅ Email diterima karyawan
- ✅ Notifikasi dikirim ke atasan (opsional)
- ✅ Data tersimpan di Google Sheets (opsional)

## TROUBLESHOOTING LANJUTAN

### Jika Email Tetap Tidak Terkirim:

1. **Cek Gmail Quota**:
   ```javascript
   console.log('Remaining email quota:', MailApp.getRemainingDailyQuota());
   ```

2. **Test Simple Email**:
   ```javascript
   MailApp.sendEmail('your-email@domain.com', 'Test', 'Hello World');
   ```

3. **Cek Email Bounce/Rejection**:
   - Buka Gmail Sent folder
   - Cek delivery failure notifications

4. **Alternative Email Service**:
   - Gunakan service email eksternal (SMTP)
   - Atau integrasi dengan service lain

### Jika Masih Bermasalah:
- Pastikan akun Google memiliki akses Gmail
- Coba dengan akun Google lain
- Periksa firewall/network restrictions
- Hubungi admin IT jika di corporate network

## MONITORING & MAINTENANCE

1. **Setup Trigger** untuk monitoring:
   - Daily summary reports
   - Error notifications
   
2. **Regular Checks**:
   - Email delivery rates
   - Error logs
   - Quota usage

3. **Backup Plan**:
   - Manual email sending
   - Alternative notification methods