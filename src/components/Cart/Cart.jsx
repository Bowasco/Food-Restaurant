import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import axios from 'axios';

const Cart = () => {
  const [cart, setcart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1111/CartItems")
      .then(res => res.json())
      .then(data => {
        setcart(data.map(item => ({ ...item, quantity: 1 }))); // Add default quantity
      });
  }, [Cart]);

  const handleIncrease = (id) => {
    setcart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrease = (id) => {
    setcart(cart.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const handleDelete = (id) => {
    try {
      axios.delete(`http://localhost:1111/CartItems/${id}`)
      alert("Deleted")
      setcart(cart.filter(item => item.id !== id))
    } catch (error) {
      console.log("Error deleting products : ", error);
      
    }
  };

  const grandTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className='bg-customPink h-fit'>
      <div className='m-auto w-2/3'>
        {cart.length === 0 ? (
          <div className='py-10'>
            <div className='border-gray-400 border-b'>
              <p className='py-5'>My Cart</p>
            </div>
            <div className='text-center py-40'>
              <p className='text-xl'>Cart is empty</p>
              <Link to={'/order'} className='border-b border-black hover:text-blue-500 hover:border-blue-500'>
                Continue Browsing
              </Link>
            </div>
          </div>
        ) : (
          <div className='flex justify-between'>
            <div className='w-3/5'>
              <div className='border-gray-400 border-b'>
                <p className='py-5'>My Cart</p>
              </div>
              {cart.map((item) => (
                <div key={item.id} className='flex justify-between py-7 border-b border-black'>
                  <div>
                    <h1>{item.name}</h1>
                    <h2>{item.price}</h2>
                  </div>
                  <div className='flex items-center mb-4'>
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className='bg-gray-200 text-gray-600 px-4 py-2 rounded-l'
                    >
                      -
                    </button>
                    <input
                      type='text'
                      value={item.quantity}
                      readOnly
                      className='border-t border-b border-gray-300 text-center w-16'
                    />
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className='bg-gray-200 text-gray-600 px-4 py-2 rounded-r'
                    >
                      +
                    </button>
                  </div>
                  <div><span className='text-lg font-bold'>₦{item.price * item.quantity}</span></div>
                  <div onClick={() => handleDelete(item.id)} className='cursor-pointer'>
                    <MdDeleteForever size={25} />
                  </div>
                </div>
              ))}
            </div>
            <div className='w-1/3'>
              <div className='border-gray-400 border-b'>
                <p className='py-5'>Order Summary</p>
              </div>
              <div className='border-gray-400 border-b py-3'>
                <div className='py-2 flex justify-between'>
                  <h3>Subtotal</h3>
                  <h2>₦{grandTotal}</h2>
                </div>
                <div className='flex justify-between py-2'>
                  <h3>Pickup</h3>
                  <h3>FREE</h3>
                </div>
              </div>
              <div className='py-5 flex justify-between items-center'>
                <h2 className='text-xl'>Total</h2>
                <h2 className='font-bold text-xl'>₦{grandTotal}</h2>
              </div>
              <button className='bg-customRed text-white w-full p-2'>CHECKOUT</button>
              <div className='flex items-center justify-center gap-3 py-3'>
              <FaLock />
              <p>Secure Checkout</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
