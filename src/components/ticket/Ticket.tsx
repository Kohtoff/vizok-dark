import React from 'react';

type Props = {
    mode: string;
};

const Ticket = (props: Props) => {
  return (
    <>
      <input className={`checkbox-ticket checkbox-ticket-${props.mode} ticket-checkbox`} type='radio' name='ticket' id='ticket-1' />
      <label htmlFor='ticket-1'>
        <span className='top-dots'>
          <span className='section dots'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </span>
        <span className='duration'>30 min</span>
        <span className='price mt-2 pb-4 mb-3'>
          <sup>$</sup>2.95
        </span>
        <span className='section dots'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span className='section pt-4'>
          <i className='uil uil-clock-two mt-3'></i>
        </span>
        <span className='time mt-2'>2:00 pm - 2:30 pm</span>
        <span className='bottom-dots'>
          <span className='section dots'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </span>
      </label>
    </>
  );
};

export default Ticket;
