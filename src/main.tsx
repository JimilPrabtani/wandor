import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initRum } from './lib/rum'

// Deep adapter: config object passed at seam (two adapters: real AWS + no-op)
initRum({
  appMonitorId: import.meta.env.VITE_RUM_APP_MONITOR_ID,
  identityPoolId: import.meta.env.VITE_RUM_IDENTITY_POOL_ID,
  guestRoleArn: import.meta.env.VITE_RUM_GUEST_ROLE_ARN,
  region: import.meta.env.VITE_RUM_REGION,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
