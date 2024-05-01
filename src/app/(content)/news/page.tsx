import NewsList from '@/components/news-list';
import News from '@/interfaces/news.interface';
import { getAllNews } from '@/lib/news';

export default async function NewsPage() {
  const news: News[] = await getAllNews();
  return (
    <>
      <h1>News page</h1>
      {<NewsList news={news} />}
    </>
  );
}