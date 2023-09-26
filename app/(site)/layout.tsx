import type { Metadata } from "next"
import "@/styles/globals.scss"
import styles from "@/styles/Root.module.scss"
import Nav from "./_components/Nav"
import Header from "./_components/Header"
import { getBackgroundImageUrl as getBackgroundImage } from "@/sanity/sanity-utils"

export const metadata: Metadata = {
  title: "Prairie's Website",
  description: "The online home of Prairie Hatchard-McGill",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const image = await getBackgroundImage()

  return (
    <html lang="en">
      <body style={{ backgroundImage: `url(${image.imageUrl})` }}>
        <div className={styles.container}>
          <Header />
          <div className={styles.subContainer}>
            <Nav />
            <main className={styles.mainContent}>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
