import Link from 'next/link';

import logo from '@/assets/logo.jpg'
import styles from './page.module.css';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles.image}>
        <Image src={logo.src} alt="A newspaper" fill />
      </div>
      <h1>A News Site For The Next Generation</h1>
      <p>
        Next News is here to deliver you all the latest news - concise &
        unbiased!
      </p>

      <p>
        NextNews aims to provide you with the latest news in a concise and
        unbiased manner. We strive to deliver the news in a way that is easy to
        understand and to the point. We want to keep you informed without
        overwhelming you with unnecessary information.
      </p>

      <p>
        We employ a team of dedicated journalists who are committed to
        delivering the news in a fair and unbiased manner. Our team is
        passionate about keeping you informed and up to date with the latest
        news.
      </p>

      <p>
        <Link href="/news">Read the latest news</Link>
      </p>
    </div>
  );
}