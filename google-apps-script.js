// Google Apps Script untuk Personal Contact System
// Deploy sebagai Web App dengan akses "Anyone" atau "Anyone in organization"

function doPost(e) {
  try {
    console.log('Received POST request');
    
    // Ambil parameter dari request
    const params = e.parameter;
    
    // Debug: Log semua parameter yang diterima
    console.log('Parameters received:', params);
    
    // Data form utama
    const formData = {
      tanggal: params.tanggal || '',
      lokasi: params.lokasi || '',
      nama: params.nama || '',
      nrp: params.nrp || '',
      jabatan: params.jabatan || '',
      masa_kerja: params.masa_kerja || '',
      alamat: params.alamat || '',
      status: params.status || '',
      topik_pribadi: params.topik_pribadi || '',
      topik_keluarga: params.topik_keluarga || '',
      topik_pekerjaan: params.topik_pekerjaan || '',
      kesimpulan: params.kesimpulan || '',
      atasan: params.atasan || ''
    };
    
    // Data email
    const emailData = {
      subject: params.emailSubject || 'Personal Contact - Konfirmasi Data Terkirim',
      body: params.emailBody || '',
      to: params.emailTo || params.karyawanEmail || '',
      atasanName: params.atasanName || '',
      atasanEmail: params.atasanEmail || '',
      karyawanEmail: params.karyawanEmail || ''
    };
    
    console.log('Form data:', formData);
    console.log('Email data:', emailData);
    
    // 1. Simpan data ke Google Sheets (opsional)
    const savedToSheet = saveToSheet(formData, emailData);
    
    // 2. Kirim email
    const emailSent = sendEmail(emailData);
    
    // 3. Return response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Data berhasil disimpan dan email dikirim',
        emailSent: emailSent,
        savedToSheet: savedToSheet,
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error in doPost:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        error: error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmail(emailData) {
  try {
    console.log('Attempting to send email to:', emailData.to);
    
    // Validasi email
    if (!emailData.to || !isValidEmail(emailData.to)) {
      console.error('Invalid email address:', emailData.to);
      return false;
    }
    
    // Cek apakah body email ada
    if (!emailData.body) {
      console.error('Email body is empty');
      return false;
    }
    
    // Kirim email
    MailApp.sendEmail({
      to: emailData.to,
      subject: emailData.subject,
      body: emailData.body,
      name: 'Personal Contact System',
      replyTo: emailData.atasanEmail || 'noreply@saptaindra.co.id'
    });
    
    console.log('Email sent successfully to:', emailData.to);
    
    // Opsional: Kirim notifikasi ke atasan
    if (emailData.atasanEmail && isValidEmail(emailData.atasanEmail)) {
      try {
        MailApp.sendEmail({
          to: emailData.atasanEmail,
          subject: 'Personal Contact - Notifikasi Data Baru',
          body: `Yth. ${emailData.atasanName},\n\nAda data Personal Contact baru yang memerlukan validasi Anda.\n\nEmail konfirmasi telah dikirim ke karyawan: ${emailData.to}\n\nTerima kasih,\nSistem Personal Contact`,
          name: 'Personal Contact System'
        });
        console.log('Notification sent to supervisor:', emailData.atasanEmail);
      } catch (supervisorEmailError) {
        console.error('Failed to send notification to supervisor:', supervisorEmailError);
        // Tidak mengembalikan error karena email utama sudah terkirim
      }
    }
    
    return true;
    
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

function saveToSheet(formData, emailData) {
  try {
    // GANTI 'YOUR_SPREADSHEET_ID' dengan ID Google Sheets Anda
    // Atau buat spreadsheet baru dan ambil ID-nya
    const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID'; // <-- GANTI INI
    
    if (SPREADSHEET_ID === 'YOUR_SPREADSHEET_ID') {
      console.log('Spreadsheet ID not configured, skipping sheet save');
      return false;
    }
    
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    
    // Jika ini adalah baris pertama, tambahkan header
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp', 'Tanggal', 'Lokasi', 'Nama', 'NRP', 'Jabatan', 
        'Masa Kerja', 'Alamat', 'Status', 'Topik Pribadi', 'Topik Keluarga', 
        'Topik Pekerjaan', 'Kesimpulan', 'Atasan', 'Email Karyawan', 'Email Atasan'
      ]);
    }
    
    // Tambahkan data
    sheet.appendRow([
      new Date(),
      formData.tanggal,
      formData.lokasi,
      formData.nama,
      formData.nrp,
      formData.jabatan,
      formData.masa_kerja,
      formData.alamat,
      formData.status,
      formData.topik_pribadi,
      formData.topik_keluarga,
      formData.topik_pekerjaan,
      formData.kesimpulan,
      formData.atasan,
      emailData.karyawanEmail,
      emailData.atasanEmail
    ]);
    
    console.log('Data saved to sheet successfully');
    return true;
    
  } catch (error) {
    console.error('Error saving to sheet:', error);
    return false;
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Fungsi untuk testing (opsional)
function testEmailSending() {
  const testEmailData = {
    subject: 'Test Email dari Personal Contact System',
    body: 'Ini adalah email test untuk memastikan sistem berjalan dengan baik.',
    to: 'test@example.com', // Ganti dengan email test Anda
    atasanName: 'Test Supervisor',
    atasanEmail: 'supervisor@test.com',
    karyawanEmail: 'test@example.com'
  };
  
  const result = sendEmail(testEmailData);
  console.log('Test email result:', result);
  return result;
}