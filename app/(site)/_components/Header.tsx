import Link from "next/link"
import styles from "@/styles/Root.module.scss"

export default function Header() {
  return (
    <>
      <Link href="/">
        <header>
          <h1 className={styles.headerTitle}>
            PrairieHatchardMcGill<span className={styles.dotcom}>.com</span>
          </h1>
        </header>
      </Link>
    </>
  )
}
