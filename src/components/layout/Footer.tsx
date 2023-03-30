import React from 'react';
import { Icon, IconNames } from '../ui/Icon';

type Props = {};

const Footer = (props: Props) => {
  const navItems = [
    {
      name: 'Routes',
      path: '/routes',
      isActive: true,
      icon: 'route',
    },
    {
      name: 'Schedule',
      path: '/schedule',
      icon: 'timetable',
    },
    {
      name: 'Tickets',
      path: '/tickets',
      icon: 'ticket',
    },
    {
      name: 'Wallet',
      path: '/wallet',
      icon: 'wallet',
    },
  ];
  return (
    <footer className='absolute w-full bottom-0 px-5 '>
      <nav className='flex justify-between  h-[100px] overflow-hidden relative'>
        {navItems.map((navItem) => {
          return (
            <div className='flex flex-col items-center justify-center shrink-0 cursor-pointer transition-all relative z-[2]'>
              <Icon
                color={navItem.isActive ? 'text-white' : "text-lightGray"}
                className={`w-[24px] h-[24px]  duration-[.3s] ${
                  navItem.isActive ? '-translate-y-[5px] ' : 'translate-y-[11px]'
                }`}
                name={navItem.icon as IconNames}
              />
              <span
                className={`duration-[.3s] ${
                  navItem.isActive ? 'opacity-1 translate-y-[5px]' : 'opacity-0 translate-x-[10px]'
                }`}>
                {navItem.name}
              </span>
            </div>
          );
        })}
        {/* <div className='rounded-[20px] bg-lightGray h-full w-[70px] absolute left-0 top-0 transition-all duration-[.3s]'></div> */}
      </nav>
    </footer>
  );
};

export default Footer;
