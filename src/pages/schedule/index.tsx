import LineSearch from '@/components/screens/schedule/LineSearch';
import { Icon } from '@/components/ui/Icon';
import TextField from '@/components/ui/TextField';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const history = [
  {
    type: 'line',
    vehicleType: 'bus',
    number: 24,
    destination: 'Lanzheron',
  },
  {
    type: 'line',
    vehicleType: 'train',
    number: 52,
    destination: 'Avtovokzal',
  },
  {
    type: 'line',
    vehicleType: 'bus',
    number: 2,
    destination: 'Lustdorf road, 3rd station',
  },
  {
    type: 'bus',
    title: 'Marhsalla Govorova',
    location: 'Odessa',
  },
];

const Schedule = (props: Props) => {
  return (
    <div className='relative'>
      <TextField
        className='w-full'
        placeholder='Search line or bus stop'
        icon='search'
        variant='filled'
      />
      <LineSearch />
      <div className='h-[58vh]'>
        <h2 className='text-center'>Recently searched</h2>
        {history.length > 0 ? (
          <div className='space-y-[20px] mt-[30px]'>
            {history.map((item) => (
              <HistoryItem data={item} />
            ))}
          </div>
        ) : (
          <div className='text-gray h-full flex justify-center items-center'>
            You have not any places
          </div>
        )}
      </div>
    </div>
  );
};

type ItemProps = {
  data: any;
};
const HistoryItem = ({ data }: ItemProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/schedule/${data.type}/${data.number}`)}
      className='w-full cursor-pointer px-[25px] py-[15px] h-[60px] flex items-center gap-[10px] border rounded-lg border-gray'>
      <Icon className='w-4 h-4' name={data.type === 'line' ? data.vehicleType : data.type} />
      {data.number ? (
        <>
          <span className='bg-white text-black h-[25px] w-[30px] rounded-lg text-center'>
            {data.number}
          </span>
          <Icon name='arrowDown' className='-rotate-90 w-5 h-5' color='gray' />
          <small className='text-gray'>{data.destination}</small>
        </>
      ) : (
        <div className='flex flex-col'>
          <span className='text-small'>{data.title}</span>
          <small className='text-gray'>{data.location}</small>
        </div>
      )}
    </div>
  );
};

export default Schedule;
