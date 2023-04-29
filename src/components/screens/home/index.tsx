import HistoryItem from '@/components/search/HistoryItem';
import React from 'react';
import SearchSection from '../../search/SearchSection';

type Props = {};

const Home = (props: Props) => {
  const user = {
    city: 'Odessa',
  };
  return (
    <div className='space-y-[40px]'>
      <SearchSection user={user} />
      <section>
        <h3 className='text-center'>Search history</h3>
        <div className='flex flex-col gap-y-8 max-h-[390px] overflow-y-scroll pb-[50px]'>
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
        </div>
      </section>
    </div>
  );
};

export default Home;
