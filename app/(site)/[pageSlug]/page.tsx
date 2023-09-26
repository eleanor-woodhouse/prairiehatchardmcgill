import { getExtraPage } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"

export default async function Page({ params }: { params: { pageSlug: string } }) {
  const page = await getExtraPage(params.pageSlug)

  return (
    <div>
      <h1>{page.name}</h1>
      <div>
        <PortableText value={page.content} />
      </div>
    </div>
  )
}
