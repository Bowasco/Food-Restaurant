import React from 'react'
import Mobile from "../../images/download.png"
import HomeDelivery from "../../images/download-removebg-preview (2).png"
import Curbside from "../../images/download-removebg-preview (3).png"
import Jollof from '../../images/download (2).jpeg'
import Wings from '../../images/images.jpeg'
import Chips from '../../images/download (3).jpeg'
import Browny from '../../images/2a1a02_8b0e33571e154ce0af83cfb499ae02ff_mv2-removebg-preview.png'
import Parfait from '../../images/2a1a02_f8dbb998cd5c415cb8b5005dabded533~mv2.webp'
import Button from '../Button'
import { Link } from 'react-router-dom'

const Second = () => {
    return (
        <div className='bg-customPink py-28'>
            <div className='flex justify-between px-20'>
                <div className='bg-white p-10 rounded-lg w-3/12'>
                    <div className='flex justify-center items-center'><img className='flex items-center' width={100} src={Mobile} alt="" /></div>
                    <h3 className='font-bold text-xl text-center py-5'>ORDER ON THE GO</h3>
                    <p className='w-11/12 text-center'>Place your order anytime, anywhere. Fast, easy, and perfect for your busy lifestyle.</p>
                </div>
                <div className='bg-white p-10 rounded-lg w-3/12'>
                    <div className='flex justify-center items-center'><img className='flex items-center' width={120} src={HomeDelivery} alt="" /></div>
                    <h3 className='font-bold text-xl text-center py-5'>DOORSTEP DELIVERY</h3>
                    <p className='w-11/12 text-center'>Enjoy fresh, delicious meals delivered right to your doorstep.</p>
                </div>
                <div className='bg-white p-10 rounded-lg w-3/12'>
                    <div className='flex justify-center items-center'><img className='flex items-center' width={120} src={Curbside} alt="" /></div>
                    <h3 className='font-bold text-xl text-center py-5'>CURBSIDE PICKUP</h3>
                    <p className='w-11/12 text-center'>Quick and convenient curbside pickup. We'll bring your order right to your car for a hassle-free experience</p>
                </div>
            </div>

            <h2 className='font-bold text-7xl text-customRed w-2/4 m-auto text-center mt-28'>ORIGINAL RECIPE SINCE 2035</h2>

            <div className='bg-white px-20 py-28 w-5/6 m-auto my-20'>
                <h2 className='text-center text-4xl font-bold'>ALL TIME FAVORITES</h2>
                <div className='flex justify-between py-20'>
                    <div>
                        <img src={Jollof} width={300} className='h-full' alt="" />
                        <h3 className='font-bold text-center text-lg py-5'>JOLLOF RICE AND SALAD</h3>
                    </div>
                    <div>
                        <img src={Wings} width={300} className='h-full' alt="" />
                        <h3 className='font-bold text-center text-lg py-5'>HOT & SPICY WINGS</h3>
                    </div>
                    <div>
                        <img src={Chips} width={300} className='h-full' alt="" />
                        <h3 className='font-bold text-center text-lg py-5'>PIZZA</h3>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-10">
                    <Button
                        className="bg-red-600 text-white px-16 py-5 text-lg border border-transparent hover:bg-white transition-all duration-300 hover:text-customRed hover:border-customRed"
                        textContent={'Full Menu'}
                    />
                </div>
            </div>

            <div className='flex justify-between w-5/6 m-auto mb-28'>
                <div className='bg-white w-customW p-20 '>
                    <h2 className='m-auto font-bold text-4xl text-center w-4/6 mb-10'>SPECIAL OF THE WEEK</h2>
                    <h3 className='font-bold text-xl text-center mb-10'>YOUR NEW GUILTY PLEASURE</h3>
                    <p className='text-lg text-center'>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                </div>
                <div className='w-customW bg-blue-400'>
                    <img className='h-full' src={Parfait} alt="" />
                </div>
            </div>

            <div className='bg-customYellow w-5/6 m-auto flex justify-between'>
                <div className='w-3/5 '>
                    <img className='w-custom h-full pt-20' src={Browny} alt="" />
                </div>
                <div className='w-5/12 flex flex-col justify-between px-20 py-10'>
                    <h2 className='text-4xl text-center font-bold'>WE DELIVER</h2>
                    <h3 className='text-xl text-center font-bold'>SATISFYING YOUR CRAVING JUST GOT EASIER</h3>
                    <p className='text-center'>I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.</p>
                    <div className="flex justify-center items-center mt-10">
                        <Link className='bg-red-600 text-white px-16 py-5 text-lg border border-transparent hover:bg-white transition-all duration-300 hover:text-customRed hover:border-customRed'
                            to={'/order'}>
                            Order Online
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second