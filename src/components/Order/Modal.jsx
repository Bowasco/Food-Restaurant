import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';

const Modal = ({ item, onClose }) => {
    const [quantity, setQuantity] = useState(1);
    const totalPrice = item.price * quantity;

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = async (id) => {
        // Handle add to cart logic here
        const allItems = [...breakfast, ]

        alert(`Product ${id} added successfully`)

        console.log(`Added ${quantity} ${item.name} to cart`);
        onClose(); // Close the modal after adding to cart
    };

    return (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50'>
            <div className='bg-white p-6 rounded-lg w-1/2 relative'>
                <button
                    onClick={onClose}
                    className='absolute top-2 right-2 text-gray-600 hover:text-red-500'
                >
                    <FaTimes size={24} />
                </button>
                <h2 className='text-2xl font-bold mb-4'>{item.name}</h2>
                <p className='text-gray-700 mb-4'>{item.Description}</p>
                <p className='text-lg font-bold mb-4'>₦{item.price}</p>

                {/* Quantity Selector */}
                <div className='flex items-center mb-4'>
                    <button
                        onClick={handleDecrease}
                        className='bg-gray-200 text-gray-600 px-4 py-2 rounded-l'
                    >
                        -
                    </button>
                    <input
                        type='text'
                        value={quantity}
                        readOnly
                        className='border-t border-b border-gray-300 text-center w-16'
                    />
                    <button
                        onClick={handleIncrease}
                        className='bg-gray-200 text-gray-600 px-4 py-2 rounded-r'
                    >
                        +
                    </button>
                </div>

                <div className='flex justify-between items-center bg-red-600 text-white px-4 py-2 rounded'>
                    <button
                        onClick={() => handleAddToCart(item.id)}
                        className='text-lg hover:bg-red-700 py-2 px-4 rounded'
                    >
                        Add to Cart
                    </button>
                    <span className='text-lg font-bold'>₦{totalPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default Modal;
