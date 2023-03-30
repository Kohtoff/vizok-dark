import Link from 'next/link';
import React from 'react';
import { Icon, IconNames } from './Icon';

export type DropdownItem = {
  title: string;
  icon?: IconNames;
  href: string;
  handler?: (prop?: any) => any;
};

type Props = {
  items: DropdownItem[];
  open: boolean;
  setOpen: () => void;
} & Partial<HTMLDivElement>;

const Dropdown = ({ items, open, className }: Props) => {
  return (
    <div
      className={`absolute ${
        open ? 'flex' : 'hidden'
      } flex-col px-4 gap-4 right-0 rounded-lg py-6 ${className}`}>
      {items.map((item: DropdownItem) => {
        return (
          <Link key={item.title} href={item.href}>
            <div className='flex gap-3 items-center'>
              {item.icon && (
                <Icon
                  className='w-6 h-6 fill-white
                    '
                  name={item.icon}
                />
              )}
              <span>{item.title}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Dropdown;
