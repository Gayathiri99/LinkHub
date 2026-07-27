document.addEventListener('DOMContentLoaded', () => {
  const authButtons = document.getElementById('authButtons');
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');

  if (!authButtons) return;

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    if (loginBtn) loginBtn.remove();
    if (registerBtn) registerBtn.remove();

    const logoutBtn = document.createElement('a');
    logoutBtn.href = 'index.html';
    logoutBtn.className = 'register-btn';
    logoutBtn.id = 'logoutBtn';
    logoutBtn.textContent = 'Logout';
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('isLoggedIn');
    });

    authButtons.appendChild(logoutBtn);
  }
});
