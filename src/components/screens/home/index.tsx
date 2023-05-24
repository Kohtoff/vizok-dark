import Map from '@/components/Map';
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
      <SearchSection />
      <section className='flex flex-col justify-center items-center'>
        <h3 className='text-center'>Search history</h3>
         <div className='flex w-full flex-col gap-y-8 max-h-[48vh] overflow-y-scroll pb-[11vh]'>
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
        </div>
        {/* <Map /> */}
      </section>
    </div>
  );
};

export default Home;
