import Link from 'next/link';
import Image from 'next/image';

import styles from './page.module.css';
import { DUMMY_NEWS } from '@/dummy-news';

export default function NewsPage() {
  return (
    <>
      <h1>News page</h1>
      <ul className={styles.list}>
        {DUMMY_NEWS.map(newsItem => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <div className={styles.image}>
                <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill />
              </div>
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}