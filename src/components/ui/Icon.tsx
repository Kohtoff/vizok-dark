import { FC, HTMLAttributes } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';

import Apple from '@/assets/apple-icon.svg';
import Google from '@/assets/google-icon.svg';
import Instagram from '@/assets/instagram-icon.svg';
import Telegram from '@/assets/telegram-icon.svg';
import Twitter from '@/assets/twitter-icon.svg';
import Youtube from '@/assets/youtube-icon.svg';
import Login from '@/assets/login-icon.svg';
import Logout from '@/assets/logout-icon.svg';
import Route from '@/assets/routes-icon.svg';
import Ticket from '@/assets/ticket-icon.svg';
import Timetable from '@/assets/timetable-icon.svg';
import Wallet from '@/assets/wallet-icon.svg';
import Settings from '@/assets/settings-icon.svg';
import User from '@/assets/user-icon.svg';
import ChevronLeft from '@/assets/chevron-left-icon.svg';
import ChevronDown from '@/assets/chevron-down-icon.svg';
import ChevronUpDown from '@/assets/chevron-up-down-icon.svg';
import Card from '@/assets/card-icon.svg';
import Flag from '@/assets/flag-icon.svg';
import City from '@/assets/city-icon.svg';
import ArrowDown from '@/assets/arrow-down-icon.svg';
import tailwindConfig from '../../../tailwind.config.js';

const iconMapper = {
  arrowDown: ArrowDown,
  apple: Apple,
  google: Google,
  instagram: Instagram,
  telegram: Telegram,
  twitter: Twitter,
  youtube: Youtube,
  login: Login,
  logout: Logout,
  route: Route,
  ticket: Ticket,
  timetable: Timetable,
  wallet: Wallet,
  settings: Settings,
  user: User,
  chevronLeft: ChevronLeft,
  chevronDown: ChevronDown,
  chevronUpDown: ChevronUpDown,
  card: Card,
  flag: Flag,
  city: City,
} as const;

export const colorMapper = resolveConfig(tailwindConfig).theme?.colors as Record<string, string>;

export type IconNames = keyof typeof iconMapper;

type Props = {
  size?: number;
  color?: keyof typeof colorMapper;
  name: IconNames;
};
export const Icon: FC<Props & HTMLAttributes<SVGAElement>> = ({
  size,
  name,
  color = 'white',
  className,
  ...props
}) => {
  const isLogo = name.includes('logo');
  const iconProps = {
    ...(size &&
      !isLogo && {
        height: size,
        width: size,
        viewBox: `0 0 ${size} ${size}`,
      }),
    ...(name !== 'google' && {
      color: colorMapper[color],
      fill: isLogo ? undefined : 'currentColor',
    }),
    ...props,
  };
  return <div className={className}>{iconMapper[name](iconProps)}</div>;
};
