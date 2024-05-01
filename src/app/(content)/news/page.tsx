import NewsList from '@/components/news-list';
import News from '@/interfaces/news.interface';

export default async function NewsPage() {
  const host: string = process.env.HOST!;
  const port: string = process.env.SERVER_PORT!;
  const response: Response = await fetch(`http://${host}:${port}/news`);

  if (!response.ok) throw new Error('Failed to fetch news.');

  const news: News[] = await response.json();

  return (
    <>
      <h1>News page</h1>
      {<NewsList news={news} />}
    </>
  );
}