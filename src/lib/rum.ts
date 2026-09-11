// RUM adapter. Single adapter; the unset-config early return is the local-dev path.
// # ponytail: config passed at call site, not read directly
import { AwsRum, type AwsRumConfig } from 'aws-rum-web'

export interface RumConfig {
  appMonitorId?: string
  identityPoolId?: string
  guestRoleArn?: string
  region?: string
}

export function initRum(config: RumConfig = {}): void {
  const { appMonitorId, identityPoolId, guestRoleArn, region } = config
  if (!appMonitorId || !identityPoolId || !guestRoleArn || !region) return

  try {
    const cfg: AwsRumConfig = {
      sessionSampleRate: 1,
      identityPoolId,
      guestRoleArn,
      endpoint: `https://dataplane.rum.${region}.amazonaws.com`,
      telemetries: ['errors', 'performance', 'http'],
      allowCookies: false,
      enableXRay: false,
    }
    new AwsRum(appMonitorId, '1.0.0', region, cfg)
  } catch {
    // Monitoring must never break the app.
  }
}
