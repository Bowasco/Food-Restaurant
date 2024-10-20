import React from 'react'
import { useState, useEffect } from 'react'
import Modal from './Modal'

const Main = () => {

    const [allMeals, setAllMeals] = useState({})
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
      fetch('http://localhost:1111/Meals')
      .then((res)=> res.json)
      .then((data)=>{
        setAllMeals(data)
      })
      .catch((err)=> console.log('Error fetching meals', err))
    }, [])
    

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
    };





    return (
        <div className='bg-customPink px-20 py-10'>
            <h1 className='text-3xl font-bold mb-6'>MENU</h1>

            {/* Breakfast Section */}
            <h2 className='text-2xl font-semibold mb-4'>Breakfast</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10'>
                {Breakfast.map((data) => (
                    <div
                        key={data.id}
                        className='border-2 border-red-500 p-5 rounded'
                        onClick={() => handleItemClick(data)}>
                        <h1 className='text-xl font-semibold text-customRed mb-2'>{data.name}</h1>
                        <p className='text-gray-600 mb-4'>{data.Description}</p>
                        <p className='text-lg font-bold text-red-600'>₦{data.price}</p>
                    </div>
                ))}
            </div>


            {/* Lunch Section */}
            <h2 className='text-2xl font-semibold mb-4'>Lunch</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10'>
                {Lunch.map((data) => (
                    <div
                        key={data.id}
                        className='border-2 border-red-500 p-5 rounded'
                        onClick={() => handleItemClick(data)}>
                        <h1 className='text-xl font-semibold text-customRed mb-2'>{data.name}</h1>
                        <p className='text-gray-600 mb-4'>{data.Description}</p>
                        <p className='text-lg font-bold text-red-600'>₦{data.price}</p>
                    </div>
                ))}
            </div>

            {/* Dinner Section */}
            <h2 className='text-2xl font-semibold mb-4'>Dinner</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10'>
                {Dinner.map((data) => (
                    <div
                        key={data.id}
                        className='border-2 border-red-500 p-5 rounded'
                        onClick={() => handleItemClick(data)}>
                        <h1 className='text-xl font-semibold text-customRed mb-2'>{data.name}</h1>
                        <p className='text-gray-600 mb-4'>{data.Description}</p>
                        <p className='text-lg font-bold text-red-600'>₦{data.price}</p>
                    </div>
                ))}
            </div>

            {/* Special Section */}
            <h2 className='text-2xl font-semibold mb-4'>Specials</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10'>
                {Specials.map((data) => (
                    <div
                        key={data.id}
                        className='border-2 border-red-500 p-5 rounded'
                        onClick={() => handleItemClick(data)}>
                        <h1 className='text-xl font-semibold text-customRed mb-2'>{data.name}</h1>
                        <p className='text-gray-600 mb-4'>{data.Description}</p>
                        <p className='text-lg font-bold text-red-600'>₦{data.price}</p>
                    </div>
                ))}
            </div>

            {/* Desserts Section */}
            <h2 className='text-2xl font-semibold mb-4'>Desserts</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10'>
                {Desserts.map((data) => (
                    <div
                        key={data.id}
                        className='border-2 border-red-500 p-5 rounded'
                        onClick={() => handleItemClick(data)}>
                        <h1 className='text-xl font-semibold text-customRed mb-2'>{data.name}</h1>
                        <p className='text-gray-600 mb-4'>{data.Description}</p>
                        <p className='text-lg font-bold text-red-600'>₦{data.price}</p>
                    </div>
                ))}
            </div>

            {/* Others Section */}
            <h2 className='text-2xl font-semibold mb-4'>Others</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10'>
                {Others.map((data) => (
                    <div
                        key={data.id}
                        className='border-2 border-red-500 p-5 rounded'
                        onClick={() => handleItemClick(data)}>
                        <h1 className='text-xl font-semibold text-customRed mb-2'>{data.name}</h1>
                        <p className='text-gray-600 mb-4'>{data.Description}</p>
                        <p className='text-lg font-bold text-red-600'>₦{data.price}</p>
                    </div>
                ))}
            </div>

            {/* Modal Component */}
            {selectedItem && (
                <Modal
                    item={selectedItem}
                    onClose={handleCloseModal}
                />
            )}



        </div>


    )
}

export default Main