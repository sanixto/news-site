import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation'

import styles from './page.module.css';
import { DUMMY_NEWS } from '@/dummy-news';
import News from '@/interfaces/news.interface';;

interface NewsDetailPageProps {
  params: {
    newsSlug: string,
  }
}

export default function NewsDetailPage(props: NewsDetailPageProps) {
  const { newsSlug } = props.params;
  const newsItem: News | undefined = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article>
      <header>
        <div className={styles.image}>
          <Link href={`/news/${newsItem.slug}/image`}>
            <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill />
          </Link>
        </div>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}