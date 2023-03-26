import React from 'react'

type Props = {}

const Lodaer = ({className}: Partial<HTMLDivElement>) => {
  return (
    <div className={`loader ${className}`}></div>
  )
}

export default Lodaer
