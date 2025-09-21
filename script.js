document.addEventListener('DOMContentLoaded', function() {
    // Cek apakah canvas tanda tangan ada
    const canvas = document.getElementById('signatureCanvas');
    if (!canvas) {
        console.log('Canvas tanda tangan tidak ditemukan - fitur tanda tangan tidak aktif');
        return; // Keluar dari fungsi jika canvas tidak ada
    }
    
    console.log('Canvas tanda tangan ditemukan - menginisialisasi fitur tanda tangan');
    
    // Inisialisasi canvas tanda tangan (canvas sudah dideklarasi di atas)
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    
    // Set canvas size properly
    function resizeCanvas() {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Event listeners untuk tanda tangan
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    // Untuk perangkat touch
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', stopDrawing);
    
    function handleTouchStart(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousedown', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }
    
    function handleTouchMove(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousemove', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }
    
    function startDrawing(e) {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
    
    function draw(e) {
        if (!isDrawing) return;
        
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
        
        // Simpan tanda tangan sebagai data URL
        document.getElementById('signature').value = canvas.toDataURL();
    }
    
    function stopDrawing() {
        isDrawing = false;
    }
    
    // Tombol hapus tanda tangan
    document.getElementById('clearSignature').addEventListener('click', function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById('signature').value = '';
    });
    
    // Handle form submission
    document.getElementById('employeeForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validasi tanda tangan
        if (!document.getElementById('signature').value) {
            alert('Harap berikan tanda tangan digital Anda');
            return;
        }
        
        // Di sini Anda bisa menambahkan kode untuk mengirim data form
        // Contoh: simpan ke localStorage atau kirim ke server
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        console.log('Form submitted:', formObject);
        alert('Form berhasil disubmit!');
        
        // Reset form jika perlu
        // this.reset();
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
    
    // Tombol simpan draft
    document.getElementById('saveDraft').addEventListener('click', function() {
        const formData = new FormData(document.getElementById('employeeForm'));
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Simpan ke localStorage
        localStorage.setItem('draftForm', JSON.stringify(formObject));
        alert('Draft berhasil disimpan!');
    });
    
    // Load draft jika ada
    const savedDraft = localStorage.getItem('draftForm');
    if (savedDraft) {
        const draft = JSON.parse(savedDraft);
        for (const key in draft) {
            const element = document.querySelector(`[name="${key}"]`);
            if (element) {
                element.value = draft[key];
            }
        }
        
        // Load tanda tangan jika ada
        if (draft.signature) {
            const img = new Image();
            img.src = draft.signature;
            img.onload = function() {
                ctx.drawImage(img, 0, 0);
            };
        }
    }
});