/* eslint-disable @next/next/no-img-element */
import { getPastWork } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import styles from "@/styles/PastWork.module.scss"

export default async function PastWork({ params }: { params: { slug: string } }) {
  const pastWorkPageContent = await getPastWork(params.slug)

  return (
    <>
      <h1>{pastWorkPageContent.name}</h1>
      <div className={styles.text}>
        <PortableText value={pastWorkPageContent.text} />
        {pastWorkPageContent.images &&
          pastWorkPageContent.images.map((image: any) => {
            const { imageClass, optimisedImageUrl } = getClassAndSource(image)
            return (
              <img
                key={image.id}
                src={optimisedImageUrl}
                alt={pastWorkPageContent.name}
                className={imageClass}
                loading="lazy"
              />
            )
          })}
      </div>
    </>
  )
}

function getClassAndSource(image: any): { imageClass: string; optimisedImageUrl: string } {
  const imageIsLandscape = isLandscape(image.dimensions.width, image.dimensions.height)
  const optimisedImageUrl = optimiseImageSize(imageIsLandscape, image.url)
  const imageClass = getImageClass(imageIsLandscape)
  return {
    imageClass,
    optimisedImageUrl,
  }
}

function optimiseImageSize(imageIsLandscape: boolean, url: string): string {
  let imageUrlWithMaxSizing: string

  if (imageIsLandscape) {
    imageUrlWithMaxSizing = url + "?w=500"
  }

  imageUrlWithMaxSizing = url + "?h=1000"
  return imageUrlWithMaxSizing
}

function isLandscape(width: number, height: number) {
  return width > height
}

function getImageClass(imageIsLandscape: boolean): string {
  let imageClass
  if (imageIsLandscape) {
    imageClass = styles.landscapeImage
  }
  imageClass = styles.portraitImage
  return imageClass
}
