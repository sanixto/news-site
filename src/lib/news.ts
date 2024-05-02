import sql from 'better-sqlite3';

import News from '@/interfaces/news.interface';

const db = sql('data.db');

export async function getAllNews(): Promise<News[]> {
  const news: News[] = db.prepare('SELECT * FROM news').all() as News[];
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news;
}

export async function getNewsItem(slug: string): Promise<News> {
  const newsItem: News = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug) as News;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return newsItem;
}

export async function getLatestNews(): Promise<News[]> {
  const latestNews: News[] = db
    .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
    .all() as News[];
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return latestNews;
}

export async function getAvailableNewsYears(): Promise<number[]> {
  const years: number[] = (db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all() as { year: number }[])
    .map(year => year.year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return years;
}

export function getAvailableNewsMonths(year: number): number[] {
  return (db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year) as { month: number }[])
    .map(month => month.month);
}

export async function getNewsForYear(year: number): Promise<News[]> {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year) as News[];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}

export async function getNewsForYearAndMonth(year: number, month: number): Promise<News[]> {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month) as News[];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}