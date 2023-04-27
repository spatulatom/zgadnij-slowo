import React from 'react';
import Image from 'next/image';
type props = {
  modalHandler: any;
};
export default function Modal({ modalHandler }: props) {
  return (
    <div
      onClick={modalHandler}
      className="fixed z-50 bg-gray-300 bg-opacity-50 top-0 bottom-0 left-0 right-0 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-51 bg-black"
      >
        <div
          onClick={modalHandler}
          className="absolute rounded-md left-0 right-0 top-[-50px] border-t py-3 bg-black text-base px-2"
        >
          Załóżmy że wyrazem do odgadnięcia jest: 'MALWA'
        </div>
        <Image width={500} height={500} src="/howtoplay.png" alt="How to play" />
      </div>
    </div>
  );
}
