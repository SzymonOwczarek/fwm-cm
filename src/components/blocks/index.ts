import { ArchitectureBlueprintView } from './ArchitectureBlueprintView'
import { MetricsBentoGrid } from './Bento'
import { BenefitsContentControl } from './BenefitsContentControl'
import { BenefitsSpeedMetrics } from './BenefitsSpeedMetrics'
import { SecurityScanner } from './SecurityScanner'
import { OmniChannelAPI } from './OmniChannelApi'
import { WebhookEcosystem } from './WebhookEcosystem'
import { HomeHero } from './home/HomeHero'

export const blocksMap = {
  'home-hero': HomeHero,
  'architecture-blueprint': ArchitectureBlueprintView,
  'metrics-bento': MetricsBentoGrid,
  'benefits-content-control': BenefitsContentControl,
  'benefits-speed-metrics': BenefitsSpeedMetrics,
  'security-scanner': SecurityScanner,
  'omni-channel-api': OmniChannelAPI,
  'webhook-ecosystem': WebhookEcosystem,
}
