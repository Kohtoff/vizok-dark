import Map from '@/components/Map';
import HistoryItem from '@/components/search/HistoryItem';
import Button from '@/components/ui/Button';
import { setPoint, setStartPoint } from '@/ducks/trip.ducks';
import { useTrip } from '@/hooks/useDucks';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import usePlacesAutocomplete from 'use-places-autocomplete';
import SearchSection from '../../search/SearchSection';

type Props = {};

const Home = (props: Props) => {
  const [dataFor, setDataFor] = useState<'finish' | 'start'>();
  const user = {
    city: 'Odessa',
  };
  const [sessionToken, setSessionToken] = useState<
    google.maps.places.AutocompleteSessionToken | undefined
  >();
  const { start, finish } = useTrip();

  useEffect(() => {
    if (window && window.google) {
      const sessionToken = new google.maps.places.AutocompleteSessionToken();
      setSessionToken(sessionToken);
    }
  }, [window, window.google]);
  const dispatch = useDispatch();

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data, loading },
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
    cache: 86400,
    requestOptions: {
      componentRestrictions: { country: 'ua' },
      sessionToken,
    },
  });

  const handleSuggest = useCallback(
    ({ value, key }: { value: string; key: 'finish' | 'start' }) => {
      setValue(value);
      setDataFor(key);
      dispatch(setPoint({ key, value }));
    },
    [dataFor],
  );

  console.log({ start, finish });
  return (
    <div className='space-y-[40px]'>
      <SearchSection
        clearSuggestion={clearSuggestions}
        onSuggest={handleSuggest}
        start={start}
        finish={finish}
      />
      <section className='flex flex-col justify-center items-center'>
        {data.length > 0 ? (
          <ul className='flex flex-col w-full'>
            {data.map((suggestion) => {
              const {
                place_id,
                description,
                structured_formatting: { main_text },
              } = suggestion;
              return (
                <li
                  key={place_id}
                  className='shadow-md px-3 w-full bg-darkGray border-b py-2'
                  onClick={() => {
                    dispatch(setPoint({ key: dataFor, value: main_text }));
                    setValue(main_text, false);
                    clearSuggestions();
                  }}>
                  <span>{main_text}</span>
                </li>
              );
            })}
          </ul>
        ) : (
          <>
            <h3 className='text-center'>Search history</h3>
            <div className='flex w-full flex-col gap-y-8 max-h-[48vh] overflow-y-scroll pb-[11vh]'>
              <HistoryItem />
              <HistoryItem />
              <HistoryItem />
              <HistoryItem />
            </div>
          </>
        )}
        {/* <Map /> */}
      </section>
      <Link href={`/route/?from=${start}&to=${finish}`} className='fixed bottom-20 right-2 bg-green text-black font-semibold rounded-xl w-[30%] text-center px-3 py-2'>
        Let`s go
      </Link>
    </div>
  );
};

export default Home;
