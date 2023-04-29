import getCurrentTime, { getCurrentHour, getCurrentMinute } from '@/utils/getCurrentTime';
import React, { HTMLAttributes, MouseEvent, useState } from 'react';
import TimeColumn from './TimeColumn';

type TimePickerProps = {
  name?: string;
  initialValue?: string;
} & HTMLAttributes<HTMLInputElement>;

const TimePicker = ({ name = 'timepicker', className, initialValue, onClick }: TimePickerProps) => {
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
    <div>
      <div onClick={handleClick}>
        <input
          name='timepicker'
          className={`btn-bordered max-w-[100px] text-body2 bg-transparent py-1 text-center h-auto px-1.5 ${className}`}
          value={initialValue || getCurrentTime()}
          readOnly
        />
      </div>
      {isOpen && (
        <div
          onClick={handleClickOnBackDrop}
          className='z-50 animate-fade absolute bg-deepBlack bg-opacity-20 inset-0'>
          <div
            className='h-[50vh] animate-enterDown bg-darkGray fixed bottom-0 inset-x-0 rounded-t-[25px] px-8 py-5
          '>
            <h2 className='text-center text-gray'>Pick your time</h2>
            <TimePickerSelection />
          </div>
        </div>
      )}
    </div>
  );
};

const TimePickerSelection = () => {
  return (
    <div className='flex justify-center relative border-y-2 border-transparent-gradient top-[30%] h-[45px] overflow-visible items-center gap-3 grow text-h1'>
      {/* <ValueWheel mode='hour' /> */}
      <TimeColumn start={0} end={23} setValue={console.log} value={getCurrentHour()} />
      :
      <ValueWheel mode='minute' />
    </div>
  );
};

type ValueWheelPorps = {
  mode: 'hour' | 'minute';
};
const ValueWheel = ({ mode }: ValueWheelPorps) => {
  const isHourMode = mode === 'hour';
  const [value, setValue] = useState(isHourMode ? getCurrentHour() : getCurrentMinute());
  const listOfValues = Array.from(Array(isHourMode ? 24 : 60).keys());
  return (
    <div className='flex flex-col max-h-[200px] items-center overflow-scroll scrollbar-hidden'>
      {listOfValues.map((value) => (
        <div>{value}</div>
      ))}
    </div>
  );
};


export default TimePicker;
