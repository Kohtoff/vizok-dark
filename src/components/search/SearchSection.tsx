import TextField from '@/components/ui/TextField';
import TimePicker from '@/components/ui/TimePicker';
import { setFinishPoint, setPoint, setStartPoint } from '@/ducks/trip.ducks';
import { useTrip } from '@/hooks/useDucks';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import usePlacesAutocomplete from 'use-places-autocomplete';
import Filters from './filter/Filters';
import CitySelect from './CitySelect';

type Props = {
  onSuggest: (payload: any) => void;
  start: any;
  finish: any;
  clearSuggestion: () => void;
};
const SearchSection = ({onSuggest, start, finish}: Props) => {

  const dispatch = useDispatch();
  const handleChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
    onSuggest({key: 'start', value: e.target.value});
    dispatch(setPoint({key: 'start', value: e.target.value}));
  };
  const handleChangeFinish = (e: ChangeEvent<HTMLInputElement>) => {
    onSuggest({key: 'finish', value: e.target.value});
    dispatch(setPoint({key: 'finish', value: e.target.value}));
  };
  return (
    <section className='space-y-[30px]'>
      <div className='flex items-center gap-3'>
        <CitySelect />
      </div>
      <div className='flex flex-col gap-3 grow'>
        <>
          <TextField
            variant='filled'
            onChange={handleChangeStart}
            value={start}
            icon='flag'
            className='w-full'
            placeholder='Start'
          />
          <TextField
            variant='filled'
            onChange={handleChangeFinish}
            value={finish}
            icon='flag'
            className='w-full'
            placeholder='Finish'
          />
        </>
      </div>
      <div className='flex justify-between'>
        <TimePicker />
        <Filters />
      </div>
    </section>
  );
};

export default SearchSection;
