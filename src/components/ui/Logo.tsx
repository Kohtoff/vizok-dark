import React from 'react'

const logoSizeMapper = {
  default: 'text-[64px]',
  small: 'text-[32px]'
}

type Props = {
  size?: keyof typeof logoSizeMapper;
}

const Logo = ({size = 'default'}: Props) => {
  return (
    <h1 className={`font-logo ${logoSizeMapper[size]}`}>Vizok</h1>
  )
}

export default Logo;
