'use client'

import React, { useState } from 'react'
import AddInvitee from './souls/AddInvitee'
import AddRetainer from './souls/AddRetainer'

type SoulMenu = {
    id: number;
    label: string;
    content: JSX.Element;
}

const soulMenu: SoulMenu[] = [
    {id: 1, label: 'Invitee', content: <AddInvitee/> },
    {id: 2, label: "Retainer", content: <AddRetainer/>}
]

const AddSoul = () => {
    const [activeMenu, setActiveMenu] = useState(soulMenu[0].id)

    const renderedComponent = () => {
        const activeItem = soulMenu.find(item => item.id === activeMenu )
        return activeItem ? activeItem.content : null
    }
  return (
    <div className='w-7/12 m-auto border-darkBlue rounded-xl '>
        <div className='flex justify-between mt-10'>
            {soulMenu.map(menu => (
                <div key={menu.id}
                className={`cursor-pointer py-2 px-5 text-2xl focus:outline-none ${activeMenu === menu.id ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
                onClick={() => setActiveMenu(menu.id)}
                >
                    {menu.label}
                </div>
            ))}
        </div>

        <div>
            {renderedComponent()}
        </div>
    </div>
  )
}

export default AddSoul