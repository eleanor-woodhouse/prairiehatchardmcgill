import { getNavTree } from "@/sanity/sanity-utils"
import Link from "next/link"
import styles from "@/styles/Nav.module.scss"

export default async function Nav() {
  const navTree = await getNavTree()
  return (
    <div className={styles.nav}>
      <div className={styles.sectionsContainer}>
        {navTree.sections &&
          navTree.sections.map((section: any) => (
            <div key={section._key} className={styles.section}>
              <h3 className={styles.heading}>{section.title}</h3>
              {section.links &&
                section.links.map((link: any) => {
                  let fullPath: string
                  if (link.target._type === "pastWork") {
                    fullPath = `pastwork/${link.target.slug}`
                  } else {
                    fullPath = link.target.slug
                  }
                  return (
                    <li key={link._key}>
                      <Link key={link._id} href={`/${fullPath}`}>
                        {link.target.name}
                      </Link>
                    </li>
                  )
                })}
            </div>
          ))}
      </div>
      <div className={styles.otherLinks}>
        {navTree.links &&
          navTree.links.map((link: any) => {
            return (
              <li key={link._key} className={styles.otherLink}>
                <Link key={link._id} href={`/${link.target.slug}`}>
                  {link.target.name}
                </Link>
              </li>
            )
          })}
      </div>
    </div>
  )
}
