import { UI } from './ui.js';

// Initialize App
window.addEventListener('DOMContentLoaded', () => {
  UI.init();

  // Register and manage Service Worker lifecycle for immediate PWA updates
  if ('serviceWorker' in navigator) {
    let isRefreshing = false;

    // Automatic reload when a new service worker takes control
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!isRefreshing) {
        isRefreshing = true;
        console.log('GymFlow: Nuevo ServiceWorker tomó el control. Recargando app con mejoras...');
        window.location.reload();
      }
    });

    navigator.serviceWorker.register('sw.js')
      .then(reg => {
        console.log('GymFlow ServiceWorker registrado con éxito:', reg.scope);

        // 1. If an updated worker is already waiting, trigger it immediately
        if (reg.waiting) {
          showUpdateNotification(reg.waiting);
          reg.waiting.postMessage({ type: 'SKIP_WAITING' });
        }

        // 2. Listen for newly discovered updates
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (!newWorker) return;

          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('GymFlow: Nueva versión instalada en segundo plano.');
              showUpdateNotification(newWorker);
              newWorker.postMessage({ type: 'SKIP_WAITING' });
            }
          });
        });

        // 3. Proactively check for updates on app resume (mobile home screen foreground)
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible') {
            reg.update().catch(err => console.debug('Verificación de actualización silenciosa:', err));
          }
        });

        // 4. Periodic background update check every 20 minutes
        setInterval(() => {
          reg.update().catch(err => console.debug('Verificación periódica SW:', err));
        }, 20 * 60 * 1000);
      })
      .catch(err => {
        console.warn('Error al registrar ServiceWorker:', err);
      });
  }
});

function showUpdateNotification(worker) {
  const toast = document.getElementById('pwa-update-toast');
  if (toast) {
    toast.style.display = 'flex';
  }
}
