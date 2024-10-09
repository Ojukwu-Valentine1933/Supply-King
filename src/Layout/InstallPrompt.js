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

    useEffect(() => {
        if (localStorage.getItem('installPromptDismissed')) {
            setShowPrompt(false);
        }
    }, []);

    return (
        showPrompt && (
            <div style={styles.modal}>
                <div style={styles.modalContent}>
                    <h2 style={styles.title}>Install Vego Supplies for a better experience!</h2>
                    <button style={styles.installButton} onClick={handleInstallClick}>
                        Install Now
                    </button>
                </div>
            </div>
        )
    );
};

const styles = {
    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        zIndex: 1000,
        marginTop: "0px 10px 0px 10px"
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    title: {
        color: 'black',
        marginBottom: '20px',
    },
    installButton: {
        fontSize: '16px',
        padding: '10px 20px',
        fontWeight: 'bold',
        backgroundColor: '#b22222', // Your specified button color
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default InstallPrompt;
