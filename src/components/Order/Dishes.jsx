import React from 'react'
import Button from '../Button'

const Dishes = () => {
    return (
        <div className='bg-customPink flex justify-between items-center py-5 px-20 sticky top-24'>
            <div>
                <ul className='flex space-x-0 divide-x-0'>
                    <li className='text-lg border-b-2 border-pink-200 px-4 py-2 hover:border-customRed transition-all duration-300'>
                        Breakfast
                    </li>
                    <li className='text-lg border-b-2 border-pink-200 px-4 py-2 hover:border-customRed transition-all duration-300'>
                        Lunch
                    </li>
                    <li className='text-lg border-b-2 border-pink-200 px-4 py-2  hover:border-customRed transition-all duration-300'>
                        Dinner
                    </li>
                    <li className='text-lg border-b-2 border-pink-200 px-4 py-2  hover:border-customRed transition-all duration-300'>
                        Special
                    </li>
                    <li className='text-lg border-b-2 border-pink-200 px-4 py-2 hover:border-customRed transition-all duration-300'>
                        Desserts
                    </li>
                    <li className='text-lg border-b-2 border-pink-200 px-4 py-2  hover:border-customRed transition-all duration-300'>
                        Others
                    </li>
                </ul>
            </div>
            <div>
                <Button
                    className="bg-red-600 text-white px-10 py-3 text-lg border border-transparent hover:bg-white transition-all duration-300 hover:text-customRed hover:border-customRed"
                    textContent={'View Cart'}
                />
            </div>
        </div>

    )
}

export default Dishes