import NewsList from "@/components/news-list";
import News from "@/interfaces/news.interface";
import { getLatestNews } from "@/lib/news";

export default function LatestNewsPage() {
  const latesNews: News[] = getLatestNews();
  return (
    <>
      <h2>Latest News Page</h2>
      <NewsList news={latesNews}/>
    </>
  );
}
