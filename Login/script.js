// Mengambil elemen form pendaftaran dan masuk
var registerForm = document.getElementById('register-form');
var loginForm = document.getElementById('login-form');

// Menangani submit form pendaftaran
registerForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form submit

  // Mengambil nilai input pendaftaran
  var registerUsername = document.getElementById('register-username').value;
  var registerPassword = document.getElementById('register-password').value;

  // Proses pendaftaran
  // ...

  // Tampilkan pesan sukses atau gagal
  alert('Pendaftaran berhasil!');
});

// Menangani submit form masuk
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form submit

  // Mengambil nilai input masuk
  var loginUsername = document.getElementById('login-username').value;
  var loginPassword = document.getElementById('login-password').value;

  // Proses masuk
  // ...

  // Tampilkan pesan sukses atau gagal
  alert('Masuk berhasil!');
});
