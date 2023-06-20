document.getElementById('register-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah form untuk submit

  // Mendapatkan nilai input username dan password
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;

  // Lakukan validasi registrasi (misalnya, memeriksa kecocokan password atau unik username)
  if (username && password) {
    alert('Registration successful!');
    // Tambahkan logika untuk menyimpan data registrasi ke database atau melakukan tindakan lainnya
  } else {
    alert('Username and password are required!');
  }
});
