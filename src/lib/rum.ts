// CloudWatch RUM: real-user monitoring. No-op unless every VITE_RUM_* value is
// set, so local dev and unconfigured builds skip it entirely. The client is
// bundled (aws-rum-web) rather than loaded from AWS's CDN so the CSP needs no
// script-src exception.
import { AwsRum, type AwsRumConfig } from 'aws-rum-web'

export function initRum(): void {
  const appMonitorId = import.meta.env.VITE_RUM_APP_MONITOR_ID
  const identityPoolId = import.meta.env.VITE_RUM_IDENTITY_POOL_ID
  const guestRoleArn = import.meta.env.VITE_RUM_GUEST_ROLE_ARN
  const region = import.meta.env.VITE_RUM_REGION

  if (!appMonitorId || !identityPoolId || !guestRoleArn || !region) return

  try {
    const config: AwsRumConfig = {
      sessionSampleRate: 1,
      identityPoolId,
      guestRoleArn,
      endpoint: `https://dataplane.rum.${region}.amazonaws.com`,
      telemetries: ['errors', 'performance', 'http'],
      allowCookies: false,
      enableXRay: false,
    }
    new AwsRum(appMonitorId, '1.0.0', region, config)
  } catch {
    // Monitoring must never break the app.
  }
}
