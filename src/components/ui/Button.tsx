import React, { ButtonHTMLAttributes } from 'react';
import { colorMapper, Icon, IconNames } from './Icon';

const paletteMapper = {
  black: 'bg-black border-gray border text-white [&>span]:text-white [&>span]:text-currentColor ',
  white: 'bg-white [&>span]:text-black',
};

const variantMapper = {
  string: 'btn-base hover:text-lightGold',
  default: 'btn-bordered py-1 px-6',
  icon: 'btn-bordered p-[10px] text-white',
  filled:
    'btn-base w-full py-1 px-6 rounded-[7px] h-[48px] [&>span]:grow [&>span]:t-body [&>span]:font-bold',
};

type Props = {
  icon?: IconNames;
  variant?: keyof typeof variantMapper;
  iconColor?: keyof typeof colorMapper;
  color?: keyof typeof paletteMapper;
  labelClassName?: string
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = 'default',
  icon,
  className,
  iconColor = 'currentColor',
  labelClassName,
  color = 'white',
  ...props
}: Props) => {
  return (
    <button
      className={`${
        variant === 'filled'
          ? variantMapper[variant] + ' ' + paletteMapper[color]
          : variantMapper[variant]
      } ${className ? className : ''}`}
      {...props}
    >
      {icon && <Icon color={iconColor} name={icon} />}
      {variant !== 'icon' && <span className={labelClassName}>{children}</span>}
    </button>
  );
};

export default Button;
