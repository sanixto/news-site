import NewsList from "@/components/main-header/news-list";
import News from "@/interfaces/news.interface";
import { getNewsForYear } from "@/lib/news";

interface FilteredNewsPageProps {
  params: {
    year: number,
  }
}

export default function FilteredNewsPage(props: FilteredNewsPageProps) {
  const newsYear: number = props.params.year;
  const news: News[] = getNewsForYear(newsYear);

  return (
    <NewsList news={news} />
  );
}