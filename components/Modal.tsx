import React from 'react'
import Image from 'next/image';
type props = {
    modalHandler: any
}
export default function Modal({modalHandler}: props) {
  return (
    <div onClick={modalHandler} className='fixed z-50 bg-gray-800 bg-opacity-50 top-0 bottom-0 left-0 right-0 flex items-center justify-center'>
    <div  onClick={(e) => e.stopPropagation()} className='relative z-51 bg-black'>
      <div onClick={modalHandler} className='absolute rounded-md right-3 top-[-30px] border p-1' >Zamknij</div>
    <Image
    
    width={500}
    height={500}
    src="/zasady.png"
    alt="How to play"/>
    
    </div>
    </div>
  )
}
