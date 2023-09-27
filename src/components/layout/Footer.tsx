import Link from 'next/link';
import React from 'react';
import { Icon, IconNames } from '../ui/Icon';

type Props = {};

const Footer = (props: Props) => {
  const navItems = [
    {
      name: 'Routes',
      path: '/home',
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
    <footer className='fixed max-h-[80px] w-full bottom-0 px-5 bg-black '>
      <nav className='flex justify-between  h-[90px] overflow-hidden items-center relative'>
        {navItems.map((navItem) => {
          return (
            <div key={navItem.name}>
              <Link
                className='flex flex-col items-center justify-center shrink-0 cursor-pointer transition-all relative z-[2]'
                href={navItem.path}>
                <Icon
                  color={navItem.isActive ? 'text-white' : 'text-lightGray'}
                  className={`w-[24px] h-[24px]  duration-[.3s] ${
                    navItem.isActive ? '-translate-y-[5px] ' : 'translate-y-[11px]'
                  }`}
                  name={navItem.icon as IconNames}
                />
                <span
                  className={`duration-[.3s] ${
                    navItem.isActive
                      ? 'opacity-1 translate-y-[5px]'
                      : 'opacity-0 translate-x-[10px]'
                  }`}>
                  {navItem.name}
                </span>
              </Link>
            </div>
          );
        })}
        {/* <div className='rounded-[20px] bg-lightGray h-full w-[70px] absolute left-0 top-0 transition-all duration-[.3s]'></div> */}
      </nav>
    </footer>
  );
};

export default Footer;
