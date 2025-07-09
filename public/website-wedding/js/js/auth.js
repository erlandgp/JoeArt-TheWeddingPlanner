// auth.js - Shared authentication state management

// Check login state on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeAuthState();
});

// Function to check and update authentication state
function initializeAuthState() {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        updateUserUI(userEmail);
    }
}

// Function to update UI based on login state
function updateUserUI(email) {
    const headerActions = document.querySelector('.header-actions');
    if (!headerActions) return;

    // Store user email in localStorage
    if (email) {
        localStorage.setItem('userEmail', email);
    } else {
        localStorage.removeItem('userEmail');
        resetAuthUI();
        return;
    }

    headerActions.innerHTML = `
        <div class="user-dropdown">
            <button class="user-btn">
                <i class="fas fa-user-circle"></i>
                ${email.split('@')[0]}
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="dropdown-menu">
                <a href="#"><i class="fas fa-user"></i> Profil</a>
                <a href="#"><i class="fas fa-cog"></i> Pengaturan</a>
                <a href="#" id="logoutBtn"><i class="fas fa-sign-out-alt"></i> Keluar</a>
            </div>
        </div>
    `;
    
    // Add dropdown toggle functionality
    const userBtn = headerActions.querySelector('.user-dropdown .user-btn');
    const dropdownMenu = headerActions.querySelector('.user-dropdown .dropdown-menu');
    
    userBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.user-dropdown')) {
            dropdownMenu?.classList.remove('show');
        }
    });
    
    // Add logout functionality
    headerActions.querySelector('#logoutBtn')?.addEventListener('click', handleLogout);
}

// Function to reset auth UI to default state
function resetAuthUI() {
    const headerActions = document.querySelector('.header-actions');
    if (!headerActions) return;
    
    headerActions.innerHTML = `
        <a href="#" class="btn btn-outline" id="loginBtn">Masuk</a>
        <a href="#" class="btn btn-primary" id="registerBtn">Daftar</a>
    `;
    initializeAuthButtons();
}

// Handle logout
function handleLogout(e) {
    e.preventDefault();
    if (confirm('Apakah Anda yakin ingin keluar?')) {
        localStorage.removeItem('userEmail');
        resetAuthUI();
    }
}

// Initialize auth buttons (login/register)
function initializeAuthButtons() {
    // Login button
    document.getElementById('loginBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'index.html#login';
    });
    
    // Register button
    document.getElementById('registerBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'index.html#register';
    });
}

// Make functions available globally
window.auth = {
    updateUserUI,
    handleLogout,
    initializeAuthButtons
};
