import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true, // Publicly readable
  },
  fields: [
    {
      name: 'logoText',
      type: 'text',
      required: true,
      localized: true,
      defaultValue: 'CORE_ENGINE',
    },
    {
      name: 'navItems',
      type: 'array',
      maxRows: 6,
      labels: {
        singular: 'Navigation Item',
        plural: 'Navigation Items',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          localized: true, // Translates "Services" to "Usługi" seamlessly
        },
        {
          name: 'link',
          type: 'text',
          required: true,
          admin: {
            description: 'Relative path (e.g., /services or /contact)',
          },
        },
      ],
    },
    {
      name: 'ctaText',
      type: 'text',
      localized: true,
      defaultValue: 'INIT_PROJECT_IO',
    },
    {
      name: 'ctaLink',
      type: 'text',
      defaultValue: '/contact',
    },
  ],
}
