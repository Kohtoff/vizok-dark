import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import TextField from '@/components/ui/TextField';
import React from 'react';
import SearchSection from './SearchSection';

type Props = {};

const Home = (props: Props) => {
  const user = {
    city: 'Odessa',
  };
  return (
    <div className='space-y-[40px]'>
      <SearchSection user={user}/>
      <section>
        <h3 className='text-center'>Search history</h3>
      </section>
    </div>
  );
};

export default Home;
