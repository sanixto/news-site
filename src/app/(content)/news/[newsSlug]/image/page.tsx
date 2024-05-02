import Image from 'next/image';
import { notFound } from 'next/navigation';

import News from '@/interfaces/news.interface';
import styles from './page.module.css';
import { getNewsItem } from '@/lib/news';

interface ImagePageProps {
  params: {
    newsSlug: string,
  }
}

export default async function ImagePage(props: ImagePageProps) {
  const { newsSlug } = props.params;
  const newsItem: News | undefined = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className={styles.image}>
      <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill/>
    </div>
  )
}