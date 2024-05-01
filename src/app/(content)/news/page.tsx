'use client';

import React, { useEffect, useState } from 'react';

import NewsList from '@/components/news-list';
import News from '@/interfaces/news.interface';

export default function NewsPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [news, setNews] = useState<News[]>();

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response: Response = await fetch('http://localhost:8080/news');

      if (!response.ok) {
        setError('Failed to fetch news.');
        setIsLoading(false);
      }

      const news: News[] = await response.json();
      setIsLoading(false);
      setNews(news);
    }

    fetchNews();
  }, []);

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>{error}</p>

  return (
    <>
      <h1>News page</h1>
      {news && <NewsList news={news} />}
    </>
  );
}