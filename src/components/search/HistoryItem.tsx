import { setFullDestionation } from '@/ducks/trip.ducks';
import { useTrip } from '@/hooks/useDucks';
import React from 'react';
import { useDispatch } from 'react-redux';
import DestionaionCircle from '@/components/search/DestionaionCircle';
import { Icon } from '../ui/Icon';

type Props = {};

function HistoryItem({}: Props) {
  const dispatch = useDispatch();
  const trip = useTrip();
  const handleClick = () => dispatch(setFullDestionation({start: 'Marshalla Govorova', finish: 'Shevchenko Av.'}));

  return (
    <div className='space-y-2' onClick={handleClick}>
      <span>Fr 21 April 2023</span>
      <div className='flex gap-x-3'>
        <div className='max-w-fit flex flex-col items-center gap-y-1'>
          <DestionaionCircle colorMode='start' />
          <Icon name='arrowDown' className='w-[18px] text-lightGray' />
          <DestionaionCircle colorMode='finish' />
        </div>
        <div className='flex flex-col justify-between'>
          <span>Marshalla Govorova st.</span>
          <span>Shevchenko Av.</span>
        </div>
      </div>
    </div>
  );
}

export default HistoryItem;
