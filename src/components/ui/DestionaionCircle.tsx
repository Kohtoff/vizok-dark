import React from 'react'

type Props = {
    colorMode: 'start' | 'finish'
}

const DestionaionCircle = ({colorMode} : Props ) => {
    const borderColor = colorMode === 'start' ? 'gray' : 'blue'
  return (
    <div className={`rounded-full h-[24px] w-[24px] border-[7px] border-${borderColor} `}>
    </div>
  )
}

export default DestionaionCircle
