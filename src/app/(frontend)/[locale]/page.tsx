// src/app/(frontend)/[locale]/page.tsx
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { blocksMap } from '@/components/blocks'

interface HomepageProps {
  params: Promise<{
    locale: string
  }>
}

// Fetch the dedicated homepage document from Payload CMS
async function getHomepageData(locale: string) {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    locale: locale as any,
    where: {
      slug: {
        equals: 'index',
      },
    },
    limit: 1,
  })

  return result.docs[0] || null
}

export default async function Homepage({ params }: HomepageProps) {
  const { locale } = await params
  const page = await getHomepageData(locale)

  // If you haven't created the homepage in the admin panel yet, trigger a 404
  if (!page) {
    notFound()
  }

  return (
    <main className="bg-zinc-950 text-white min-h-screen">
      {/* Loop through and render the blocks assigned to the homepage layout */}
      {page.layout?.map((block: any, index: number) => {
        const BlockComponent = blocksMap[block.blockType as keyof typeof blocksMap]

        if (!BlockComponent) {
          console.warn(`Block type "${block.blockType}" is missing from blocksMap registry.`)
          return null
        }

        // Spreads your custom Payload strings, arrays, and fields directly into the React component props
        return <BlockComponent key={block.id || index} {...block} />
      })}
    </main>
  )
}
