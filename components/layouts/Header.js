import Link from 'next/link'
import styles from '../../styles/Header.module.css'
const Header = () => (
  <header className={styles.header}>
        <Link href="/">
            <img className={styles.logo} src="/apple-icon.png"/>
        </Link>
    <h1 className={styles.title}>TU MARCA</h1>
  </header>
)

export default Header
