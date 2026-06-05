import { Block } from 'payload'

export const HomeHeroBlock: Block = {
  slug: 'homeHero',
  labels: {
    singular: 'Developer Hero Section',
    plural: 'Developer Hero Sections',
  },
  fields: [
    {
      name: 'systemStatus',
      type: 'text',
      defaultValue: 'STABLE_READY',
      admin: { description: 'Status message shown in the top badge' },
    },
    {
      name: 'headingStart',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'headingHighlight',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'subheading',
      type: 'textarea',
      localized: true,
      required: true,
    },
    {
      name: 'primaryCtaText',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'EXECUTE_STRATEGY_INIT',
    },
    {
      name: 'secondaryCtaText',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'VIEW_COMPOSED_STACK()',
    },
    {
      name: 'metrics',
      type: 'array',
      minRows: 3,
      maxRows: 3,
      labels: {
        singular: 'Metric Card',
        plural: 'Metric Cards',
      },
      fields: [
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'Layers', value: 'layers' },
            { label: 'Cpu', value: 'cpu' },
            { label: 'Radio', value: 'radio' },
          ],
          required: true,
        },
        { name: 'label', type: 'text', required: true },
        { name: 'value', type: 'text', localized: true, required: true },
      ],
    },
    {
      name: 'codePanelDatabase',
      type: 'text',
      defaultValue: 'PostgreSQL_Pool',
      admin: { description: 'Database value shown on line 4 of the code panel' },
    },
  ],
}
