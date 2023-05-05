import Button from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import TextField from '@/components/ui/TextField';
import TimePicker from '@/components/ui/TimePicker';
import { setFinishPoint, setStartPoint } from '@/services/trip.service';
import { useTrip } from '@/hooks/useServices';
import React from 'react';
import { useDispatch } from 'react-redux';
import Filters from './filter/Filters';

type Props = {
  user: { city: string };
};

const SearchSection = ({ user }: Props) => {
  const { start, finish } = useTrip();
  const dispatch = useDispatch();
  return (
    <section className='space-y-[30px]'>
      <div className='flex items-center gap-3'>
        <Icon className='w-6 h-6' name='city' />
        {user.city}
        <Icon className='w-4 h-4' name='chevronDown' />
      </div>
      <div className='flex flex-col gap-3 grow'>
        <TextField
          variant='filled'
          onChange={(e) => {
            dispatch(setStartPoint(e.target.value));
          }}
          value={start}
          icon='flag'
          className='w-full'
          placeholder='Start'
        />
        <TextField
          variant='filled'
          onChange={(e) => {
            dispatch(setFinishPoint(e.target.value));
          }}
          value={finish}
          icon='flag'
          className='w-full'
          placeholder='Finish'
        />
      </div>
      <div className='flex justify-between'>
        {/* <Button variant='default' className='py-1 h-auto px-1.5' labelClassName='flex'>
            19:09
            <Icon className='w-6' name='chevronUpDown' />
          </Button> */}
        <TimePicker />
        <Filters />
      </div>
    </section>
  );
};

export default SearchSection;
