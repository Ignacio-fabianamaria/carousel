import React from 'react';
import left from '../images/left.png';
import rigth from '../images/right.png';

export default function Buttons() {
  return (
    <div className='buttons'>
      <button type='button' className='left'>
        <img src={left} alt='left' className='left' />
      </button>
      <button type='button' className='rigth'>
        <img src={rigth} alt='rigth' className='rigth' />
      </button>
    </div>
  )

}