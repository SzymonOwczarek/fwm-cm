import { Block } from 'payload'

export const ArchitectureBlueprintBlock: Block = {
  slug: 'architecture-blueprint',
  labels: {
    singular: 'Architecture Blueprint',
    plural: 'Architecture Blueprints',
  },
  fields: [
    {
      name: 'systemLabel',
      type: 'text',
      admin: { placeholder: '// CORE_ENGINE_BLUEPRINT' },
    },
    { name: 'heading', type: 'text' },
    { name: 'description', type: 'textarea' },
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'num', type: 'text', label: 'Step Number (e.g. 01)' },
        { name: 'category', type: 'text', label: 'Category (e.g. SCHEMA)' },
        { name: 'title', type: 'text', label: 'Title' },
        { name: 'description', type: 'textarea', label: 'Description' },
      ],
    },
  ],
}

export const MetricsBentoBlock: Block = {
  slug: 'metrics-bento',
  labels: {
    singular: 'Metrics Bento Grid',
    plural: 'Metrics Bento Grids',
  },
  fields: [
    { name: 'systemLabel', type: 'text', admin: { placeholder: '// CAPABILITY_MATRIX_LOG' } },
    { name: 'heading', type: 'text' },
    {
      name: 'cards',
      type: 'array',
      minRows: 4,
      maxRows: 4,
      fields: [
        { name: 'tag', type: 'text' },
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'footerLabel', type: 'text' },
        {
          name: 'footerValue',
          type: 'text',
          admin: { description: 'For tags, use comma separated values' },
        },
      ],
    },
  ],
}

export const BenefitsContentControlBlock: Block = {
  slug: 'benefits-content-control',
  fields: [
    { name: 'systemLabel', type: 'text', admin: { placeholder: '// DECOUPLED_ADMIN_ADVANTAGE' } },
    { name: 'heading', type: 'text' },
    { name: 'description', type: 'textarea' },
    {
      name: 'benefits',
      type: 'array',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
      ],
    },
  ],
}

export const BenefitsSpeedMetricsBlock: Block = {
  slug: 'benefits-speed-metrics',
  fields: [
    {
      name: 'systemLabel',
      type: 'text',
      admin: { placeholder: '// PERFORMANCE_FINANCIAL_METRIC_FEED' },
    },
    { name: 'heading', type: 'text' },
    { name: 'description', type: 'textarea' },
    {
      name: 'metrics',
      type: 'array',
      fields: [
        { name: 'metric', type: 'text', label: 'Technical Tag (e.g., 01 // ...)' },
        { name: 'stat', type: 'text', label: 'Statistic (e.g., -32%)' },
        { name: 'benefit', type: 'text', label: 'Benefit Title' },
        { name: 'description', type: 'textarea', label: 'Description' },
        { name: 'codeLog', type: 'text', label: 'Code Log (e.g., sys.vitals...)' },
      ],
    },
  ],
}

export const SecurityScannerBlock: Block = {
  slug: 'security-scanner',
  fields: [
    {
      name: 'systemLabel',
      type: 'text',
      admin: { placeholder: '// DEFENSE_MITIGATION_SIMULATOR' },
    },
    { name: 'heading', type: 'text' },
    { name: 'description', type: 'textarea' },
    {
      name: 'vectors',
      type: 'array',
      fields: [
        {
          name: 'slug',
          type: 'text',
          required: true,
          admin: { description: 'e.g. sql, ddos, plugin' },
        },
        { name: 'label', type: 'text', label: 'Terminal Label (e.g. SQL_INJECTION_TEST)' },
        { name: 'title', type: 'text', label: 'Display Title (e.g. Data Injections)' },
        { name: 'vulnerability', type: 'textarea' },
        { name: 'remediation', type: 'textarea' },
        { name: 'status', type: 'text', admin: { placeholder: 'MITIGATED' } },
        {
          name: 'logs',
          type: 'array',
          fields: [{ name: 'log', type: 'text', required: true }],
        },
      ],
    },
  ],
}

export const OmniChannelAPIBlock: Block = {
  slug: 'omni-channel-api',
  fields: [
    { name: 'systemLabel', type: 'text', admin: { placeholder: '// DECOUPLED_DATA_DISTRIBUTION' } },
    { name: 'heading', type: 'text' },
    { name: 'description', type: 'textarea' },
    {
      name: 'codeSnippet',
      type: 'code',
      admin: {
        language: 'json',
        description: 'The JSON payload to display in the terminal',
      },
    },
    {
      name: 'endpoints',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'text', required: true },
        { name: 'status', type: 'text', required: true, admin: { placeholder: 'CONNECTED' } },
      ],
    },
  ],
}

export const WebhookEcosystemBlock: Block = {
  slug: 'webhook-ecosystem',
  fields: [
    { name: 'systemLabel', type: 'text', admin: { placeholder: '// INTEROPERABILITY_GRID' } },
    { name: 'heading', type: 'text' },
    {
      name: 'integrations',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'logo', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
