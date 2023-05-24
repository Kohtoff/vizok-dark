import Ticket from '@/components/ticket/ticket';
import Button from '@/components/ui/Button';
import classNames from '@/utils/classNames';
import { Tab } from '@headlessui/react';
import React, { useState } from 'react';

type Props = {};

const TicketsPage = (props: Props) => {
  let [categories] = useState({
    Default: {
      description: 'some text',
      content: [
        {
          title: 'Reduced',
          price: 20,
          discount: 50,
        },
        {
          title: 'Default',
          price: '20',
        },
        {
          title: 'Season Tikcet',
          price: '200',
          validUntil: '20-09-2023',
        },
      ],
    },
    Reduced: {
      description:
        'You must submit an appropriate document that confirms the right to discounted travel during the check of tickets',
      content: [
        {
          title: 'Reduced',
          price: 20,
          discount: 50,
        },
        {
          title: 'Default',
          price: '20',
        },
        {
          title: 'Season Tikcet',
          price: '200',
          validUntil: '20-09-2023',
        },
      ],
    },
    Active: {
      description: 'some text',
      content: [
        {
          title: 'Reduced',
          price: 20,
          discount: 50,
        },
        {
          title: 'Default',
          price: '20',
        },
        {
          title: 'Season Tikcet',
          price: '200',
          validUntil: '20-09-2023',
        },
      ],
    },
  });

  return (
    <div className='w-full px-2 py-5 sm:px-0'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-xl p-1'>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 focus:ring-none rounded-lg focus-visible:outline-none focus-visible:ring-none text-sm font-medium leading-5',
                  selected
                    ? 'bg-white/[0.12] hover:text-white shadow'
                    : 'hover:bg-white/[0.12] hover:text-white',
                )
              }>
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          <div className='ticket-section'>
            <div className='container pt-5'>
              <div className='row justify-content-center'>
                <div className='col-12 text-center'>
                  <h1>
                    Choose <i className='uil uil-bus color-yellow'></i> ticket
                  </h1>
                  <div className='section'>
                    {Object.values(categories).map((tab, idx) => (
                      <Tab.Panel
                        key={idx}
                        className={classNames(
                          'rounded-xl',
                          ' focus:outline-none focus-visible:outline-none',
                        )}>
                          {tab.description && <small className='text-gray text-center pb-3'>{tab.description}</small>}
                        <div>
                          {tab.content.length > 0 && tab.content.map((ticket) => <Ticket />)}
                        </div>
                        {/* <ul className='flex flex-col items-center gap-y-2 gap-3'>
                {tab.map((ticket: any) => {
                  const reducedPrice = ticket.discount
                    ? ticket.price - (ticket.price / 100) * ticket.discount
                    : null;

                  return (
                    <li key={ticket} className='w-full max-w-[70%] text-center'>
                      <div className=' rounded-t-xl pt-[20px] border-2 px-[15px] border-b-transparent'>
                        <h3>{ticket.title}</h3>
                        {ticket.description && (
                          <small className='text-gray text-[11px]'>{ticket.description}</small>
                        )}
                      </div>
                      <div className='rip-zone flex justify-center items-center'>
                        - - - - - - - - - - - - - - - - -
                      </div>
                      <div className='border-2 border-t-transparent py-[20px] px-[15px] flex justify-between rounded-b-lg '>
                        <h1>
                          {reducedPrice || ticket.price}
                          <small>UAH</small>
                        </h1>

                        <Button>Buy</Button>
                      </div>
                    </li>
                  );
                })}
              </ul> */}
                      </Tab.Panel>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TicketsPage;
