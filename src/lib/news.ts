import { DUMMY_NEWS } from '@/dummy-news';
import News from '@/interfaces/news.interface';

export function getAllNews(): News[] {
  return DUMMY_NEWS;
}

export function getLatestNews(): News[] {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears(): number[] {
  return DUMMY_NEWS.reduce((years: number[], news) => {
    const year: number = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: number): number[] {
  return DUMMY_NEWS.reduce((months: number[], news) => {
    const newsYear: number = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month: number = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year: number): News[] {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year: number, month: number): News[] {
  return DUMMY_NEWS.filter((news) => {
    const newsYear: number = new Date(news.date).getFullYear();
    const newsMonth: number = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}