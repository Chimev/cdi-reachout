import React from 'react'

const AddInvitee = () => {
    const onSubmit = () => {
        //
    }
  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-5 text-lg mt-2'>
        <div className='flex flex-col gap-1 text-xl'>
            <label>Name</label>
            <input type="text" className=' p-2 outline-none bg-lightBlue text-white' />
        </div>
        <div className='flex flex-col gap-1'>
            <label>Phone No</label>
            <input type="number" className=' p-2 outline-none bg-lightBlue text-white ' />
        </div>
        <div className='flex flex-col gap-1'>
            <label>Gender</label>
            <select name="" id="" className=' p-2 outline-none bg-lightBlue text-white'>
                <option>Male</option>
                <option>Female</option>
            </select>
        </div>
        <div className='flex flex-col gap-1'>
            <label>Month</label>
            <select name="" id="" className=' p-2 outline-none bg-lightBlue text-white'>
                <option>Jan</option>
                <option>Feb</option>
            </select>
        </div>
       <button type='submit' className='bg-darkBlue  text-white'>Add</button>
              
    </form>
  )
}

export default AddInvitee