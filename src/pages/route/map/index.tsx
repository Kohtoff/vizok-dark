import Map from '@/components/Map';
import Image from 'next/image';
import React from 'react';

type Props = {};

const RouteMap = (props: Props) => {
  return (
    <div className='mx-[-25px] h-[38vh]'>
      <Image src={'/Group 17.png'} className="w-full h-[74vh]" width={511} height={700} alt="sdf"/>
    </div>
  );
};

export default RouteMap;
