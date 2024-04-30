import Link from 'next/link';

import styles from './index.module.css';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <NavLink href="/news">News</NavLink>
          <NavLink href="/archive">Archive</NavLink>
        </ul>
      </nav>
    </header>
  );
}
