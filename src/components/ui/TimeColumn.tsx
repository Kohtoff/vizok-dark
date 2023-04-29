import { useState, useEffect, useRef, UIEvent } from 'react';

type TimeColumn = {
  start: number;
  end: number;
  setValue: (value: string) => void;
  value: string;
  exclude?: Array<number>;
  notShowExclude?: boolean;
};

const TimeColumn = ({ start, end, setValue, value, exclude, notShowExclude }: TimeColumn) => {
  const [slecetorMove, setSlecetorMove] = useState<number>(+value ? +value : 0);
  const valueRef = useRef(null);
  const timeArray: (string | number)[] = [];
  for (let time = start; time <= end; time++) {
    if (notShowExclude) !exclude?.includes(time) && timeArray.push(time);
    else timeArray.push(time);
  }

  useEffect(() => {
    let prev = slecetorMove;
    if (exclude?.includes(prev)) {
      while (exclude?.includes(prev)) {
        prev = prev + 1;
        setSlecetorMove(prev);
      }
    }
  }, []);

  useEffect(() => {
    setValue(slecetorMove.toString().length === 1 ? `0${slecetorMove}` : slecetorMove.toString());
  }, [slecetorMove]);

  const controlBottom = () => {
    let prev = slecetorMove;
    if (prev !== end) {
      if (exclude?.includes(prev + 1)) {
        while (exclude?.includes(prev + 1)) {
          if (prev + 2 > end) {
            return setSlecetorMove(start);
          }
          prev = prev + 1;
          setSlecetorMove(prev + 1);
        }
      } else {
        return setSlecetorMove(prev + 1);
      }
    } else {
      return setSlecetorMove(start);
    }
  };

  const controlTop = () => {
    let prev = slecetorMove;
    if (prev !== start) {
      if (exclude?.includes(prev - 1)) {
        while (exclude?.includes(prev - 1)) {
          if (prev - 2 < start) {
            return setSlecetorMove(end);
          }
          prev = prev - 1;
          setSlecetorMove(prev - 1);
        }
      } else {
        return setSlecetorMove(prev - 1);
      }
    } else {
      let endnumber = end;
      if (exclude?.includes(end)) {
        while (exclude?.includes(endnumber - 1)) {
          endnumber = endnumber - 1;
          setSlecetorMove(endnumber - 1);
        }
      } else {
        return setSlecetorMove(end);
      }
    }
  };


  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    if (valueRef) {
      console.log(valueRef);
      const pos = valueRef.current;
      // pos.scrollTop += 43
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <div className={'cursor-pointer'} onClick={controlTop}>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M19.9201 15.0499L13.4001 8.52989C12.6301 7.75989 11.3701 7.75989 10.6001 8.52989L4.08008 15.0499'
            strokeWidth='2'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={'stroke-black'}
          />
        </svg>
      </div>
      <div
        ref={valueRef}
        onScroll={handleScroll}
        className={
          'relative flex flex-col items-center h-[128px] w-[64px] overflow-hidden  select-none'
        }>
        {/* <div className={'w-full h-[40px] absolute top-[39px] rounded-[8px]'} /> */}
        <div
          className={'w-full flex snap-y snap-center snap-mandatory flex-col overflow-scroll scrollbar-hidden items-center leading-[43px] py-[43px]'}
          style={{
            transform: `translateY(-${slecetorMove && timeArray.indexOf(slecetorMove) * 43}px)`,
          }}>
          {timeArray.map((time) => (
            <div
              key={time}
              className={`z-[1] duration-300 opacity-50 ${
                +time === slecetorMove ? 'text-white opacity-100 duration-300' : 'text-black'
              }`}>
              {time.toString().length === 1 ? `0${time}` : time}
            </div>
          ))}
        </div>
      </div>
      <div className={'cursor-pointer'} onClick={controlBottom}>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995'
            strokeWidth='2'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={' stroke-black'}
          />
        </svg>
      </div>
    </div>
  );
};

export default TimeColumn;
