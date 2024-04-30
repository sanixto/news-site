import Link from 'next/link';

import { getAvailableNewsYears } from '@/lib/news';
import styles from './page.module.css';

export default function ArchivePage() {
  const links: number[] = getAvailableNewsYears();

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {links.map(link => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}