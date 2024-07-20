import Link from 'next/link'
import React from 'react'
const NavBar = () => {
  return (
    <nav className='flex justify-between items-center h-14 bg-red-400 px-5'>
        <h1>Welcome Chime</h1>
         <div className=''>
            <Link href={'/worker/profile'}> Profile</Link>
            <Link href={'/'}> Logout</Link>
         </div>
    </nav>
  )
}

export default NavBar