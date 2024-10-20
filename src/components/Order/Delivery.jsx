import React from 'react'

const Delivery = () => {
    return (
        <div className='bg-customYellow p-20'>
            <h1 className='text-8xl font-bold w-8/12 text-red-600 pt-10 pb-10'>ORDER ONLINE</h1>
            <div className="flex items-center bg-white p-3 rounded-full shadow-md w-max">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <span className="text-gray-700 text-sm font-semibold">Accepting Order</span>
            </div>
        </div>
    )
}

export default Delivery