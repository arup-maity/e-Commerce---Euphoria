import React from 'react'

const Final = ({ onPrev }) => {
   return (
      <div>
         <button type="button" className='flex justify-end border border-slate-500 rounded py-1 px-4' onClick={onPrev}>Prev</button>
      </div>
   )
}

export default Final