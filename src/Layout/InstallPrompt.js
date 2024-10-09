// InstallPrompt.js
import React, { useEffect, useState } from 'react';

const InstallPrompt = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShowPrompt(true);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'dismissed') {
                localStorage.setItem('installPromptDismissed', 'true');
            }
            setShowPrompt(false);
            setDeferredPrompt(null);
        }
    };

    // Check if the prompt should be shown
    useEffect(() => {
        if (localStorage.getItem('installPromptDismissed')) {
            setShowPrompt(false);
        }
    }, []);

    return (
        showPrompt && (
            <div style={styles.prompt}>
                <p style={styles.message}>Install Supply Master for a better experience!</p>
                <button style={styles.button} onClick={handleInstallClick}>Install Now</button>
            </div>
        )
    );
};

const styles = {
    prompt: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#f39c12',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
    },
    message: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#fff',
        margin: '0 0 10px 0',
    },
    button: {
        fontSize: '16px',
        padding: '10px 20px',
        fontWeight: 'bold',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
    },
};

export default InstallPrompt;
