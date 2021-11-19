import React from 'react'

function Navbar() {
    return (
        <div className='flex items-center px-3'>
            <div className="flex-grow">
                <span className='px-3 py-2 bg-green-500 inline-block font-black text-gray-100 text-2xl'>
                    w
                </span>
                
            </div>
            <div className="flex-grow bg-green-500">icons</div>
            <div className="flex-grow"> settings</div>
        </div>
    )
}

export default Navbar
