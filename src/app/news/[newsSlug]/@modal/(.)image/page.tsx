import Image from 'next/image';
import { notFound } from 'next/navigation';

import { DUMMY_NEWS } from '@/dummy-news';
import News from '@/interfaces/news.interface';
import styles from './page.module.css';

interface InterceptedImagePageProps {
  params: {
    newsSlug: string,
  }
}


export default function InterceptedImagePage(props: InterceptedImagePageProps) {
  const { newsSlug } = props.params;
  const newsItem: News | undefined = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className={styles['modal-backdrop']} />
      <dialog className={styles.modal} open>
        <div className={styles.image}>
          <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill />
        </div>
      </dialog>
    </>
  )
}