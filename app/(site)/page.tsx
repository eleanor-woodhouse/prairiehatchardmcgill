/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home.module.scss"
import { getHomepage } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"

export default async function Home() {
  const homepageContent = await getHomepage()

  return (
    <div>
      <h1 className={styles.secondHead}>{homepageContent.header}</h1>
      <PortableText value={homepageContent.text} />
      <img src={homepageContent.image} alt={homepageContent.name} className={styles.homeImage} loading="lazy" />
    </div>
  )
}
