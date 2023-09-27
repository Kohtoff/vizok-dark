import Ticket from '@/components/ticket/Ticket';
import Button from '@/components/ui/Button';
import { CategoryType, TicketType } from '@/types/tickets';
import classNames from '@/utils/classNames';
import { Tab } from '@headlessui/react';
import React, { useState } from 'react';
import db from "../../../db.json";

type Props = {};



const TicketsPage = (props: Props) => {
  const [tabs] = useState<CategoryType[]>(db.tickets);
  const [selectedTickets, setSelectedTickets] = useState([]);

  return (
    <div className='w-full px-2 py-5 sm:px-0'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-xl p-1'>
          {tabs.map((category) => (
            <Tab
              key={category.title}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 focus:ring-none rounded-lg focus-visible:outline-none focus-visible:ring-none text-sm font-medium leading-5',
                  selected
                    ? 'bg-white/[0.12] hover:text-white shadow'
                    : 'hover:bg-white/[0.12] hover:text-white',
                )
              }>
              {category.title}
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
                    {tabs.map((tab: CategoryType, idx) => {
                      return (
                        <Tab.Panel
                          key={idx}
                          className={classNames(
                            'rounded-xl',
                            ' focus:outline-none focus-visible:outline-none',
                          )}>
                          {tab.description && (
                            <small className='text-gray text-center pb-3'>{tab.description}</small>
                          )}
                          <div className='flex overflow-x-scroll px-[30px]  mx-[-30px]'>
                            {tab.content.length > 0 &&
                              tab.content.map((ticket: TicketType) => <Ticket mode={tab.title} />)}
                          </div>
                        </Tab.Panel>
                      );
                    })}
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
