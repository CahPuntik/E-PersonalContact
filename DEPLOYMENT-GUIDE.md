# 🚀 PANDUAN DEPLOYMENT GITHUB
# Personal Contact System

## LANGKAH 1: COMMIT & PUSH KE GITHUB

### A. Add & Commit Changes
```bash
# Masuk ke folder project
cd "c:\Users\slame\OneDrive\DATA KERJA\Folder VS Code\Personal Contact"

# Add semua file yang berubah
git add .

# Commit dengan pesan yang jelas
git commit -m "feat: Complete Personal Contact system with email validation

- Removed digital signature functionality
- Added email validation with professional templates  
- Integrated Google Apps Script for email sending
- Added comprehensive setup documentation
- Responsive design with company branding
- Ready for production deployment"
```

### B. Push ke GitHub
```bash
# Push ke repository (pastikan sudah setup remote)
git push origin main
```

## LANGKAH 2: SETUP GITHUB REPOSITORY

### A. Jika Belum Ada Repository
1. **Buka [GitHub](https://github.com)**
2. **Klik "New Repository"**
3. **Repository name**: `Personal-Contact`
4. **Description**: `Personal Contact System - PT. Sapta Indra Sejati`
5. **Public/Private**: Pilih sesuai kebutuhan
6. **✅ Add README.md**: Sudah ada
7. **Klik "Create Repository"**

### B. Connect Local ke GitHub
```bash
# Add remote repository (ganti [username] dengan username GitHub Anda)
git remote add origin https://github.com/[username]/Personal-Contact.git

# Push pertama kali
git branch -M main
git push -u origin main
```

## LANGKAH 3: AKTIVASI GITHUB PAGES

### A. Setup GitHub Pages
1. **Buka repository** di GitHub
2. **Klik tab "Settings"**
3. **Scroll ke bagian "Pages"**
4. **Source**: Deploy from a branch
5. **Branch**: main
6. **Folder**: / (root)
7. **Klik "Save"**

### B. Akses Website
- **URL akan menjadi**: `https://[username].github.io/Personal-Contact`
- **Tunggu 5-10 menit** untuk deployment pertama
- **Status deployment** bisa dicek di tab "Actions"

## LANGKAH 4: SETUP GOOGLE APPS SCRIPT

### A. Update URL di Website
1. **Edit file `index.html`**
2. **Ganti URL script** (line ~289):
   ```javascript
   const urlScript = 'https://script.google.com/macros/s/YOUR_ACTUAL_WEB_APP_URL/exec';
   ```

### B. Deploy Google Apps Script
1. **Buka [Google Apps Script](https://script.google.com)**
2. **New Project**
3. **Copy kode** dari `google-apps-script.js`
4. **Deploy > New Deployment**
5. **Type**: Web app
6. **Execute as**: Me
7. **Who has access**: Anyone
8. **Deploy**
9. **Copy Web App URL**

## LANGKAH 5: UPDATE & REDEPLOY

### A. Update Configuration
```bash
# Edit index.html dengan URL yang benar
# Commit perubahan
git add index.html
git commit -m "update: Configure Google Apps Script URL for production"
git push origin main
```

### B. Verify Deployment
- **Website**: `https://[username].github.io/Personal-Contact`
- **Form functionality**: Test input & validation
- **Email system**: Test dengan email Anda sendiri

## 🎯 CHECKLIST DEPLOYMENT

### ✅ Pre-Deployment
- [ ] All files committed and pushed
- [ ] README.md updated dengan info project
- [ ] Google Apps Script URL configured
- [ ] Email templates tested

### ✅ GitHub Setup
- [ ] Repository created/updated
- [ ] GitHub Pages activated
- [ ] Custom domain configured (optional)
- [ ] Repository visibility set correctly

### ✅ Post-Deployment
- [ ] Website accessible via GitHub Pages URL
- [ ] Form validation working
- [ ] Email system functional
- [ ] Mobile responsive design verified
- [ ] Logo & branding displayed correctly

## 🔧 TROUBLESHOOTING DEPLOYMENT

### Website Tidak Bisa Diakses
1. **Cek tab "Actions"** untuk status deployment
2. **Tunggu 10-15 menit** untuk propagasi
3. **Clear browser cache** dan coba lagi
4. **Cek setting Pages** apakah sudah benar

### Form Tidak Berfungsi
1. **Update Google Apps Script URL** di index.html
2. **Test Google Apps Script** secara terpisah
3. **Cek browser console** untuk error JavaScript
4. **Verifikasi permissions** Google Apps Script

### Email Tidak Terkirim
1. **Ikuti panduan** di `SETUP-EMAIL-GUIDE.md`
2. **Test dengan email sederhana** di Google Apps Script
3. **Cek quota Gmail** (500 email/day limit)
4. **Verifikasi email format** input user

## 🌐 CUSTOM DOMAIN (OPSIONAL)

### Setup Custom Domain
1. **Beli domain** (example: personalcontact.company.com)
2. **GitHub Pages Settings**:
   - Custom domain: yourdomainname.com
   - Enforce HTTPS: ✅
3. **DNS Configuration**:
   - Add CNAME record: [subdomain] → [username].github.io
   - Wait for DNS propagation (24-48 hours)

## 📊 MONITORING & MAINTENANCE

### Regular Checks
- **Weekly**: Test form functionality
- **Monthly**: Check email delivery rates
- **Quarterly**: Update dependencies & security

### Analytics (Optional)
- **Google Analytics**: Add tracking code
- **GitHub Insights**: Monitor repository traffic
- **User Feedback**: Collect & address issues

## 🆘 EMERGENCY ROLLBACK

Jika ada masalah serius:
```bash
# Rollback ke commit sebelumnya
git log --oneline  # Lihat history commit
git revert [commit-hash]  # Revert commit bermasalah
git push origin main
```

---

## 📞 SUPPORT DEPLOYMENT

**Jika mengalami kesulitan:**
1. **Cek GitHub Actions** untuk detail error
2. **Review console browser** untuk error frontend
3. **Test Google Apps Script** secara terpisah
4. **Hubungi IT support** perusahaan

**Status Website**: https://[username].github.io/Personal-Contact ✅