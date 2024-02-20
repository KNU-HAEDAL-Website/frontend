// page.tsx
'use client'

import { useEffect, useRef } from 'react';
import { usePageStore } from '@/store/scroll-page'
import ScrollLayout from '@/components/mainPage/scroll-layout';
import TitlePage from '@/components/mainPage/title-page';
import DetailPage from '@/components/mainPage/detail-page';
import ActivityPage from '@/components/mainPage/activity-page';
import SubmitPage from '@/components/mainPage/submit-page';

const pages = [
  { page: <TitlePage />, key: 'titlePage' },
  { page: <DetailPage />, key: 'detailPage' },
  { page: <ActivityPage />, key: 'activityPage' },
  { page: <SubmitPage />, key: 'submitPage' }
];

export default function Home() {
  const { selectedPage, setSelectedPage, totalPageNumber } = usePageStore();
  const prevScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < prevScrollY.current && selectedPage > 0) {
        // 위로 스크롤하고 이전 페이지가 있는 경우
        setSelectedPage(selectedPage - 1);
      } else if (currentScrollY > prevScrollY.current && selectedPage < totalPageNumber - 1) {
        // 아래로 스크롤하고 다음 페이지가 있는 경우
        setSelectedPage(selectedPage + 1);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selectedPage, setSelectedPage, totalPageNumber]);

  return (
    <div className='h-full'>
      {pages.map(({page, key}, index) => (
        <ScrollLayout key={key} pageIndex={index} selectedPage={selectedPage}>
          {page}
        </ScrollLayout>
      ))}
    </div>
  );
}
