import { Icon } from '@/components/ui/Icon';
import { RouteOptionType } from '@/types/route';
import { VehicleType } from '@/types/vehicle';
import { useGoogleMap } from '@react-google-maps/api';
import React from 'react';

const RouteOption = ({ transports, arrivalTime, departureTime }: RouteOptionType) => {
  return (
    <section className='w-full h-[95px] p-[15px] flex items-center rounded-lg bg-black'>
      <aside className='h-full w-[88px] flex flex-col justify-center'>
        <small className='text-[12px] mt-[3px] mb-[2px] font-medium'>Departure in</small>
        <div className='flex relative items-baseline'>
          <h2 className='font-bold'>10</h2>
          <sub>min</sub>
        </div>
      </aside>
      <main className=''>
        <header className='flex items-center'>
          <div className='flex grow min-h-[23px] min-w-[100px] relative mr-[10px]'>
            <ul className='flex items-center absolute left-0 top-0'>
              {transports.map((vehicle: VehicleType) => (
                <li className='flex items-center gap-1 justify-center'>
                  <Icon className='w-5' name={vehicle.type} />
                  <div className='mr-[10px] border min-w-[29px] h-[23px] px-1 text-small py-1 font-medium rounded flex justify-center items-center border-white'>
                    {vehicle.number}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </header>
        <div className='mt-[13px] flex items-center'>
          <div className='flex items-center mr-[5px]'>
            <Icon className='w-4 h-4' name='walk' />
            <span className='text-[10px] text-lightGray text-center'>6 min</span>
          </div>
          <div className='bg-green w-[41px] h-[18px] text-[12px] rounded flex font-semibold text-black justify-center items-center'>{departureTime}</div>
          <div className='flex items-center mx-[5px]'>
            <span className='text-[10px] text-lightGray text-center'>46 min</span>
          </div>
          <div className='bg-blue w-[41px] h-[18px] text-[12px] rounded flex font-semibold text-white justify-center items-center'>{arrivalTime}</div>
        </div>
      </main>
    </section>
  );
};

export default RouteOption;
