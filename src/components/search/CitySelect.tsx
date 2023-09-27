import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { Icon } from '../ui/Icon';

const CitySelect = () => (
  <Select.Root defaultValue='Odessa'>
    <Select.Trigger className='inline-flex items-center justify-center rounded px-[20px] text-[13px] leading-none h-[35px] gap-[5px] text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-red outline-none'>
      <Icon className='w-6 h-6' name='city' />
      <Select.Value defaultValue={'Kiyv'} />
      {/* <Select.Icon className='text-red'> */}
        <Icon name='chevronDown' className='w-4 h-4' />
      {/* </Select.Icon> */}
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className='overflow-hidden bg-deepBlack rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]'>
        <Select.ScrollUpButton className='flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default'>
          <Icon name='chevronUpDown' />
        </Select.ScrollUpButton>
        <Select.Viewport className='p-[15px]'>
          <Select.Group>
            <SelectItem value='Kiyv'>Kiyv</SelectItem>
            <SelectItem value='Odessa'>Odessa</SelectItem>
            <SelectItem value='Kharkiv'>Kharkiv</SelectItem>
            <SelectItem value='Lviv'>Lviv</SelectItem>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className='flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default'>
          <Icon name='chevronDown' />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectItem = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => {
  return (
    <Select.Item
      className={classnames(
        'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
        className,
      )}
      {...props}
      ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className='absolute left-0 w-[25px] inline-flex items-center justify-center'>
        <Icon name='city' />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default CitySelect;
