// PWA Features
class PWAHandler {
    constructor() {
        this.deferredPrompt = null;
        this.init();
    }

    init() {
        this.registerServiceWorker();
        this.setupInstallPrompt();
        this.setupShare();
    }

    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registered:', registration);
                    this.checkForUpdates(registration);
                })
                .catch(error => {
                    console.error('ServiceWorker registration failed:', error);
                });
        }
    }

    checkForUpdates(registration) {
        registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    this.showUpdateToast();
                }
            });
        });
    }

    setupInstallPrompt() {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            this.showInstallButton();
        });

        window.addEventListener('appinstalled', () => {
            this.deferredPrompt = null;
            this.hideInstallButton();
            this.showToast('App installed successfully!', 'success');
        });
    }

    showInstallButton() {
        const installBtn = document.getElementById('installBtn');
        if (installBtn) {
            installBtn.style.display = 'block';
            installBtn.onclick = () => this.promptInstall();
        }
    }

    hideInstallButton() {
        const installBtn = document.getElementById('installBtn');
        if (installBtn) {
            installBtn.style.display = 'none';
        }
    }

    promptInstall() {
        if (this.deferredPrompt) {
            this.deferredPrompt.prompt();
            this.deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted install');
                }
                this.deferredPrompt = null;
            });
        }
    }

    setupShare() {
        if (navigator.share) {
            const shareBtn = document.getElementById('shareBtn');
            if (shareBtn) {
                shareBtn.style.display = 'block';
                shareBtn.onclick = () => this.shareApp();
            }
        }
    }

    shareApp() {
        if (navigator.share) {
            navigator.share({
                title: 'Economics Daily',
                text: 'Discover how economic principles shape our everyday decisions',
                url: window.location.href
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href)
                .then(() => this.showToast('Link copied to clipboard!', 'success'))
                .catch(() => this.showToast('Failed to copy link', 'error'));
        }
    }

    showUpdateToast() {
        const toast = document.createElement('div');
        toast.className = 'toast update-toast';
        toast.innerHTML = `
            <p>New version available!</p>
            <button onclick="location.reload()">Update</button>
        `;
        document.getElementById('toastContainer').appendChild(toast);
        setTimeout(() => toast.remove(), 10000);
    }

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.getElementById('toastContainer').appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// Initialize PWA
let pwaHandler;
document.addEventListener('DOMContentLoaded', () => {
    pwaHandler = new PWAHandler();
});
