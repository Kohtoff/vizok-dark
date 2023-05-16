import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import React, { useMemo } from 'react';
import Lodaer from './ui/Lodaer';

type Props = {};

const Map = (props: Props) => {
  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(() => ({ lat: 27.672932021393862, lng: 85.31184012689732 }), []);
  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
      mapId: process.env.GOOGLE_MAP_ID,
    }),
    [],
  );
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_TOKEN as string,
    libraries: libraries ? (libraries as any) : [],
  });
  if (!isLoaded) {
    return <Lodaer className='w-6 h-6' />;
  }
  return (
    <div className='h-[58vh] w-[100vw]'>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapContainerClassName='w-full h-full'
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        onLoad={() => console.log('map loaded')}
      />
    </div>
  );
};

export default Map;
