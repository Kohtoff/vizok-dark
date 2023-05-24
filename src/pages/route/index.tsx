import RouteOption from '@/components/screens/route/RouteOption';
import DestionaionCircle from '@/components/search/DestionaionCircle';
import { Icon } from '@/components/ui/Icon';
import { RouteOptionType } from '@/types/route';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const options: RouteOptionType[] = [
  {
    departureTime: '15:46',
    arrivalTime: '16:21',
    transports: [
      { type: 'train', number: 2 },
      { type: 'bus', number: 244 },
    ],
  },
  {
    departureTime: '15:48',
    arrivalTime: '16:67',
    transports: [
      { type: 'train', number: 12 },
      { type: 'bus', number: 36 },
    ],
  },
  {
    departureTime: '15:57',
    arrivalTime: '16:21',
    transports: [{ type: 'bus', number: 129 }],
  },
];

const RoutePage = (props: Props) => {
  const { query } = useRouter();
  return (
    <div className=''>
      <div className='flex gap-x-3'>
        <div className='max-w-fit flex flex-col items-center gap-y-1'>
          <DestionaionCircle colorMode='start' />
          <Icon name='arrowDown' className='w-[18px] text-lightGray' />
          <DestionaionCircle colorMode='finish' />
        </div>
        <div className='flex flex-col justify-between'>
          <span>{query.from}</span>
          <span>{query.to}</span>
        </div>
      </div>
      {/* <hr className='text-darkGray' /> */}
      <div className='space-y-3 bg-gray h-[62vh] mt-[30px] pt-[20px] -mx-5 px-[20px]'>
        {options.map((option) => {
          return <RouteOption {...option} />;
        })}
      </div>
    </div>
  );
};

export default RoutePage;
