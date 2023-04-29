import Button from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import React, { MouseEvent, useState } from 'react';

type Props = {};

const Filters = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOnBackDrop = (e: MouseEvent<HTMLElement>) => {
    const { currentTarget, target } = e;
    if (currentTarget === target) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <Button onClick={handleClick} variant='default' className='py-1 h-auto px-1.5'>
        Filter
      </Button>
      {isOpen && (
        <div
          onClick={handleClickOnBackDrop}
          className='z-50 animate-fade absolute bg-deepBlack bg-opacity-20 inset-0'>
          <div
            className='h-[100vh] animate-enterDown bg-darkGray fixed bottom-0 inset-x-0 space-y-5  px-8 py-5
          '>
            <div className='flex justify-between items-center'>
              <button
                onClick={handleClick}
                className='bg-deepBlack bg-opacity-40 p-[8px] rounded-full'>
                <Icon name='chevronLeft' className='w-[18px]' />
              </button>
              <h2 className='text-center text-gray'>Trip preferences</h2>
              <small className='text-lightGray'>Reset</small>
            </div>
            <div>
              <h3>Allowed transport</h3>
              <div className='flex gap-3 mt-[12px]'>
                <div className='border  rounded-lg gap-y-4 border-gray flex flex-col items-center px-[20px] py-[20px] grow'>
                  <Icon name='bus' className='w-[48px]' />
                  <p>Buses</p>
                  <input type='checkbox' />
                </div>
                <div className='border  rounded-lg gap-y-4 border-gray flex flex-col items-center px-[20px] py-[15px] grow'>
                  <Icon name='train' className='w-[48px]' />
                  <p>Trains</p>
                  <input type='checkbox' />
                </div>
                <div className='border  rounded-lg gap-y-4 border-gray flex flex-col items-center px-[20px] py-[15px] grow'>
                  <Icon name='bus' className='w-[48px]' />
                  <p>Buses</p>
                  <input type='checkbox' />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Filters;
