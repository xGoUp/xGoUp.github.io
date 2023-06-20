function register() {
  // Mengambil nilai input pendaftaran
  var registerUsername = document.getElementById('register-username').value;
  var registerPassword = document.getElementById('register-password').value;

  // Proses pendaftaran
  // ...

  // Tampilkan pesan sukses atau gagal dengan animasi
  showMessage('Pendaftaran berhasil!');
}

function login() {
  // Mengambil nilai input masuk
  var loginUsername = document.getElementById('login-username').value;
  var loginPassword = document.getElementById('login-password').value;

  // Proses masuk
  // ...

  // Tampilkan pesan sukses atau gagal dengan animasi
  showMessage('Masuk berhasil!');
}

function showMessage(message) {
  var messageElement = document.createElement('div');
  messageElement.className = 'message';
  messageElement.textContent = message;
  document.body.appendChild(messageElement);

  setTimeout(function() {
    messageElement.classList.add('fade-out');
    setTimeout(function() {
      messageElement.remove();
    }, 1000);
  }, 2000);
}
