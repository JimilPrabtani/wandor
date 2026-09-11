// Deep adapter: RUM adapter at a real seam. Two adapters justify it:
// real AWS RUM (prod) + no-op adapter (local dev / unconfigured builds).
// # ponytail: config passed at call site, not read directly; seam is external.
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

export function initRumNoOp(): void {
  // Second adapter: no-op. Justifies the RUM seam.
}
