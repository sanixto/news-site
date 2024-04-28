import Link from "next/link";

import styles from './index.module.css';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/news">News</Link></li>
        </ul>
      </nav>
    </header>
  );
}
