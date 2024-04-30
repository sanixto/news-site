import Link from 'next/link';
import Image from 'next/image';

import styles from './index.module.css';
import News from '@/interfaces/news.interface';

interface NewsListProps {
  news: News[],
}

export default function NewsList({news}: NewsListProps) {
  return (
    <ul className={styles.list}>
      {news.map(newsItem => (
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
  );
}