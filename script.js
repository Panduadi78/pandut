const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(link => link.classList.remove('active'));
        item.classList.add('active');
    });
});


document.querySelectorAll('.toggle-info').forEach(item => {
    item.addEventListener('click', () => {
        const extraInfo = item.parentElement.querySelector('.extra-info'); // Cari .extra-info di dalam parent
        const currentHeight = extraInfo.style.maxHeight;
        
        // Toggle konten
        if (currentHeight) {
            extraInfo.style.maxHeight = null; // Sembunyikan
        } else {
            extraInfo.style.maxHeight = extraInfo.scrollHeight + "px"; // Tampilkan
        }
    });
});

const username = localStorage.getItem('username'); // Misalnya data disimpan di localStorage

const welcomeMessage = document.getElementById('welcome-message');

if (username) {
    welcomeMessage.textContent = "Welcome, " + username;
} else {
    welcomeMessage.textContent = "Welcome to the website";
}

    function saveUsername() {
        const username = document.getElementById('usernameInput').value;
        if (username) {
            localStorage.setItem('username', username); 
            window.location.href = "h2.html"; 
        } else {
            alert("Please enter a username.");
        }
    }

    document.querySelector('.cta-btn').addEventListener('click', function() {
        const logoutMenu = document.getElementById('logoutMenu');
        logoutMenu.style.display = logoutMenu.style.display === 'none' ? 'block' : 'none'; // Toggle menu logout
    });
    
    function logout() {
        localStorage.removeItem('username'); // Menghapus username dari local storage
        window.location.href = "index.html"; // Mengarahkan ke halaman login
    }
    
    
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        const scrollTopBtn = document.getElementById("scrollTopBtn");
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }
    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    function toggleServiceInfo(index) {
        const serviceInfo = document.querySelectorAll('.service-info');
        const activeInfo = serviceInfo[index];
        activeInfo.classList.toggle('show-info');
        setTimeout(() => {
            activeInfo.classList.remove('show-info');
        }, 3000); 
    }
    