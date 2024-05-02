import Link from 'next/link';

import styles from './page.module.css';
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';
import News from '@/interfaces/news.interface';
import NewsList from '@/components/news-list';

interface FilteredNewsPageProps {
  params: {
    filter: any,
  }
}

export default async function FilteredNewsPage(props: FilteredNewsPageProps) {
  const { filter } = props.params;
  const selectedYear: number = filter?.[0];
  const selectedMonth: number = filter?.[1];

  let news: News[] = [];
  let links: number[] = await getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent: React.ReactNode = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />
  }

  const availableYears = await getAvailableNewsYears();
  const availableMoths = getAvailableNewsMonths(selectedYear);

  if (
    selectedYear && !availableYears.includes(selectedYear) ||
    selectedMonth && !availableMoths.includes(selectedMonth)
  ) {
    throw new Error('Invalid filter.');
  }

  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul>
            {links.map(link => {
              const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}