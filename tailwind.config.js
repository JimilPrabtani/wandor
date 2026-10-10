/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Apple system stack first: real SF Pro on Apple devices (cannot be
        // self-hosted per license), Inter as the metric-compatible fallback
        // elsewhere, then platform defaults.
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"SF Pro Display"', '"Segoe UI"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"Segoe UI"', 'Inter', 'system-ui', 'sans-serif'],
        // Wordmark only: the original distressed-typewriter wandor logo.
        logo: ['"Special Elite"', '"Courier New"', 'serif'],
      },
      colors: {
        wandor: {
          dark: '#0a0a0a',
          text: '#1d1d1f',
          muted: '#6e6e73',
          prompt: '#905831',
        }
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'cinematic': 'cubic-bezier(0.22, 1, 0.36, 1)',
      }
    },
  },
  plugins: [],
}
