// Official "Sign in with Google" button rendered by Google Identity Services.
// Loads the GIS script on demand (once per page) so index.html stays clean.
import { useEffect, useRef, useState } from 'react';
import { useAuth, googleClientId } from '../context/AuthContext';

const GIS_SRC = 'https://accounts.google.com/gsi/client';

function loadGis(): Promise<void> {
  if (window.google?.accounts?.id) return Promise.resolve();
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${GIS_SRC}"]`);
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('gis_load_failed')), { once: true });
    });
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = GIS_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('gis_load_failed'));
    document.head.appendChild(script);
  });
}

export default function GoogleSignInButton() {
  const { signInWithCredential } = useAuth();
  const divRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const configured = !!googleClientId;

  useEffect(() => {
    if (!googleClientId) return;
    let cancelled = false;
    loadGis()
      .then(() => {
        if (cancelled || !divRef.current || !window.google?.accounts?.id) return;
        window.google.accounts.id.initialize({
          client_id: googleClientId,
          callback: (response: { credential?: string }) => {
            if (cancelled) return;
            if (!response?.credential || !signInWithCredential(response.credential)) {
              setFailed(true);
            }
          },
        });
        window.google.accounts.id.renderButton(divRef.current, {
          theme: 'outline',
          size: 'large',
          shape: 'pill',
          width: 320,
        });
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Hidden entirely without a client id — same contract as the old button.
  if (!configured) return null;

  return (
    <div className="flex flex-col items-center gap-2">
      <div ref={divRef} className="flex justify-center [&>div]:!mx-auto" />
      {failed && (
        <p className="font-sans text-xs font-semibold text-red-600">
          Google sign-in failed to load. Check your connection and try again.
        </p>
      )}
    </div>
  );
}
