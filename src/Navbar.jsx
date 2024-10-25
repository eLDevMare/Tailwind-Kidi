import React from 'react'

const Navbar = () => {

    const listItems = [
        'Services',
        'Prices',
        'Block',
        'Gallery',
        'Lookbook',
        'About'
    ]

  return (
    <div className='fixed bg-black flex justify-between items-center gap-15 py-3 px-10 left-1/2 translate-x-[-50%] top-[20%] rounded-full backdrop-blur-md bg-opacity-60 text-white shadow-lg z-10'>
        <ul className="flex gap-8 text-xl">
            {listItems.map((items) => (
                <li key={items} className='relative group cursor-pointer'>
                    {items}
                </li>
            ))}
        </ul>
        <button className='bg-gradient-to-r from-blue-300 to-green-300 py-1 px-6 rounded-3xl shadow-2xl text-white font-semibold ml-3'>Contact</button>
    </div>
  )
}

export default Navbar