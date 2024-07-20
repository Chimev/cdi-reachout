import React from 'react'

const page = () => {
  return (
    <>
      <div className='mt-5 flex flex-col justify-center items-center gap-3'>
        <div className='bg-blue-500 w-52 h-52 rounded-full'>
        
        </div>
        <p className='pp'>Chime</p>
        <p className='pp'>Lagos Branch</p>
        <p className='pp'>Choir</p>
      </div>

      <div>
        <h2 className='pp mt-4'>Jan</h2>
        <p>Invitees: 20</p>
        <p>Retaineers: 20</p>
      </div>
      <div>
        <h2 className='pp mt-4'>Fev</h2>
        <p>Invitees: 20</p>
        <p>Retaineers: 20</p>
      </div>
    </>
  )
}

export default page