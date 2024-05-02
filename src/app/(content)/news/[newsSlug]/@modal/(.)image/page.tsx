import Image from 'next/image';
import { notFound } from 'next/navigation';

import News from '@/interfaces/news.interface';
import styles from './page.module.css';
import ModalBackdrop from '@/components/modal-backdrop';
import { getNewsItem } from '@/lib/news';

interface InterceptedImagePageProps {
  params: {
    newsSlug: string,
  }
}

export default async function InterceptedImagePage(props: InterceptedImagePageProps) {
  const { newsSlug } = props.params;

  const newsItem: News | undefined = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className={styles.modal} open>
        <div className={styles.image}>
          <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill />
        </div>
      </dialog>
    </>
  )
}