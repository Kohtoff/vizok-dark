import { Icon } from '@/components/ui/Icon';
import TextField from '@/components/ui/TextField';
import TimePicker from '@/components/ui/TimePicker';
import { setFinishPoint, setStartPoint } from '@/ducks/trip.ducks';
import { useTrip } from '@/hooks/useDucks';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import usePlacesAutocomplete from 'use-places-autocomplete';
import Filters from './filter/Filters';

// declare global{
//   interface Window {google: any}
// }

const cityCoordsMockup = {
  latMin: 37.708075, // Юго-западная граница города
  lngMin: -122.513742, // Юго-западная граница города
  latMax: 37.832416, // Северо-восточная граница города
  lngMax: -122.365218, // Северо-восточная граница города
};

type Props = {};
const SearchSection = ({  }: Props) => {
  const { start, finish } = useTrip();

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
    cache: 86400,
    requestOptions: {
      componentRestrictions: { country: 'ua' },
    //   bounds: new google.maps.LatLngBounds(
    //    new google.maps.LatLng(cityCoordsMockup.latMin, cityCoordsMockup.lngMin),
    //    new google.maps.LatLng(cityCoordsMockup.latMax, cityCoordsMockup.lngMax)),
    }
  });

  console.log(value, status);
  const dispatch = useDispatch();
  return (
    <section className='space-y-[30px]'>
      <div className='flex items-center gap-3'>
        <Icon className='w-6 h-6' name='city' />
        {'Odessa'}
        <Icon className='w-4 h-4' name='chevronDown' />
      </div>
      <div className='flex flex-col gap-3 grow'>
        <>
          <TextField
            variant='filled'
            onChange={(e) => {
              setValue(e.target.value);
              dispatch(setStartPoint(e.target.value));
            }}
            value={start}
            icon='flag'
            className='w-full'
            placeholder='Start'
          />
          {status === 'OK' &&
            data.map((suggestion) => {
              const {
                place_id,
                description,
                structured_formatting: { main_text, secondary_text },
              } = suggestion;
              return (
                <li
                  key={place_id}
                  onClick={() => {
                    setValue(description, false);
                    clearSuggestions();
                  }}>
                  <span>
                    {main_text} {secondary_text}
                  </span>
                </li>
              );
            })}
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
        </>
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
