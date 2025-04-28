import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='py-28 w-[80%] m-auto'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-10'>
                    <h2 className='text-[35px] font-[700]'>CONTACT US</h2>
                    <h3 className='text-[20px] font-[500]'>DROP US A LINE AND WE'LL GET BACK TO YOU</h3>
                    <form className='flex flex-col gap-10'>
                        <div className='flex justify-between'>
                            <div>
                                <p className='text-[17px]'>First Name</p>
                                <input type="text" className='border-b-2 border-black p-2 focus:outline-none' />
                            </div>
                            <div>
                                <p className='text-[17px]'>Last Name</p>
                                <input type="text" className='border-b-2 border-black p-2 focus:outline-none' />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <p className='text-[17px]'>Email *</p>
                                <input type="text" className='border-b-2 border-black p-2 focus:outline-none' />
                            </div>
                            <div>
                                <p className='text-[17px]'>Subject</p>
                                <input type="text" className='border-b-2 border-black p-2 focus:outline-none' />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <p className='text-[17px]'>Leave us a message...</p>
                                <input type="text" className='border-b-2 border-black p-2 focus:outline-none' />
                            </div>
                            <button className='border-2 px-6 border-black font-[700] text-[20px] hover:bg-red-500 hover:text-white'>Submit</button>
                        </div>
                    </form>
                </div>


                <div>
                    <h2 className='text-[35px] font-[700]'>WE'RE OPEN</h2>
                    <div className='flex flex-col gap-12 my-10'>
                        <div>
                            <p className='text-[20px] font-[300]'>Monday-Friday: 11am-10pm</p>
                            <p className='text-[20px] font-[300]'>Saturday-Sunday: 11am-12am</p>
                        </div>
                        <div>
                            <p className='text-[20px] font-[300]'>500 Terry Francois Street,</p>
                            <p className='text-[20px] font-[300]'>San Francisco, CA 94158</p>
                        </div>
                        <div>
                            <p className='text-[20px] font-[300]'>Tel: 123-456-7890</p>
                            <p className='text-[20px] font-[300]'>Email: info@mysite.com</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <FaFacebookF className='text-xl'/>
                        <FaInstagram className='text-xl'/>
                        <FaTwitter className='text-xl'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
