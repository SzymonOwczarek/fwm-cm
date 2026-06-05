import { Block } from 'payload'

export const BlogOverviewBlock: Block = {
  slug: 'blog-overview',
  labels: {
    singular: 'Blog Intelligence Feed',
    plural: 'Blog Intelligence Feeds',
  },
  fields: [
    {
      name: 'systemLabel',
      type: 'text',
      defaultValue: '// ARCHIVE_INTEL_FEED',
    },
    {
      name: 'heading',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'posts',
      type: 'array',
      minRows: 4,
      maxRows: 5,
      fields: [
        { name: 'tag', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'category', type: 'text', required: true },
        { name: 'excerpt', type: 'textarea', required: true },
        { name: 'date', type: 'text', required: true },
        {
          name: 'status',
          type: 'select',
          defaultValue: 'PUBLISHED',
          options: [
            { label: 'Published', value: 'PUBLISHED' },
            { label: 'Archived', value: 'ARCHIVED' },
            { label: 'External', value: 'EXTERNAL' },
          ],
        },
      ],
    },
  ],
}
