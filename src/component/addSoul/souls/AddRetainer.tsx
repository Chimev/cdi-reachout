import React from 'react'

const AddRetainer = () => {
        const onSubmit = () => {
            //
        }
  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-5 text-lg mt-2'>
       
        <div className='flex flex-col gap-1'>
            <label>Phone No</label>
            <input type="number" className=' p-2 outline-none bg-lightBlue text-white ' />
        </div>
        
       <button type='submit' className='bg-darkBlue  text-white'>Add</button>
              
    </form>
  )
}

export default AddRetainer