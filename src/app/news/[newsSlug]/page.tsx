import Image from 'next/image';

import styles from './page.module.css';
import { DUMMY_NEWS } from '@/dummy-news';
import News from '@/interfaces/news.interface';

interface NewsDetailPageProps {
  params: {
    newsSlug: string,
  }
}

export default function NewsDetailPage(props: NewsDetailPageProps) {
  const { newsSlug } = props.params;
  const newsItem: News = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug);

  return (
    <article>
      <header>
        <div className={styles.image}>
          <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill />
        </div>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <main>
        <p>{newsItem.content}</p>
      </main>
    </article>
  );
}