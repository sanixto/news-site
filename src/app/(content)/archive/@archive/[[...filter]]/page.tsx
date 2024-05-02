import Link from 'next/link';
import { Suspense } from 'react';

import styles from './page.module.css';
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';
import News from '@/interfaces/news.interface';
import NewsList from '@/components/news-list';

async function FilterHeader({year, month}: {year: number, month?: number}) {
  const availableYears = await getAvailableNewsYears();
  const availableMoths = getAvailableNewsMonths(year);
  let links: number[] = availableYears;

  if (
    year && !availableYears.includes(year) ||
    month && !availableMoths.includes(month)
  ) {
    throw new Error('Invalid filter.');
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {links.map(link => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredNews({year, month}: {year: number, month?: number}) {
  let news: News[] = [];

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent: React.ReactNode = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />
  }

  return newsContent;
}

interface FilteredNewsPageProps {
  params: {
    filter: any,
  }
}

export default async function FilteredNewsPage(props: FilteredNewsPageProps) {
  const { filter } = props.params;
  const selectedYear: number = filter?.[0];
  const selectedMonth: number = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filter...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth}/>
      </Suspense>
    </>
  );
}