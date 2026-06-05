// src/collections/Pages.ts
import { CollectionConfig } from 'payload'
import { HomeHeroBlock } from '@/blocks/home/HomeHero'
import {
  ArchitectureBlueprintBlock,
  MetricsBentoBlock,
  BenefitsContentControlBlock,
  BenefitsSpeedMetricsBlock,
  SecurityScannerBlock,
  OmniChannelAPIBlock,
  WebhookEcosystemBlock,
} from '@/blocks/LandingBlocks'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title', // Shows the page title in the admin sidebar list view
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar', // Puts the URL slug entry on the right sidebar for a cleaner view
      },
    },
    {
      name: 'layout',
      type: 'blocks', // 👈 This activates the drag-and-drop structural section builder
      blocks: [
        HomeHeroBlock, // 👈 Register your new Hero here!
        ArchitectureBlueprintBlock,
        MetricsBentoBlock,
        BenefitsContentControlBlock,
        BenefitsSpeedMetricsBlock,
        SecurityScannerBlock,
        OmniChannelAPIBlock,
        WebhookEcosystemBlock,
      ],
    },
  ],
}
