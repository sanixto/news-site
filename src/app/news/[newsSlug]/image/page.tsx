import Image from 'next/image';
import { notFound } from 'next/navigation';


import { DUMMY_NEWS } from '@/dummy-news';
import News from '@/interfaces/news.interface';
import styles from './page.module.css';

interface ImagePageProps {
  params: {
    newsSlug: string,
  }
}


export default function ImagePage(props: ImagePageProps) {
  const { newsSlug } = props.params;
  const newsItem: News | undefined = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className={styles.image}>
      <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill/>
    </div>
  )
}