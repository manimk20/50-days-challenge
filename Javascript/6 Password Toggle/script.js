function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.querySelector('.toggle-btn');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleBtn.textContent = 'Hide';
    } else {
      passwordInput.type = 'password';
      toggleBtn.textContent = 'Show';
    }
  }