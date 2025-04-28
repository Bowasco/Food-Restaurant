import React from 'react';

function ContactPage() {
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full max-w-6xl mx-auto py-20">
      {/* Contact Form */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <h2 className='text-2xl font-bold'>CONTACT US</h2>
        <h3>DROP US A LINE AND WE'LL GET BACK TO YOU</h3>
        <form className="w-full max-w-lg mx-auto">
          {/* First Name and Last Name in Flex */}
          <div className="flex space-x-4 mb-4">
            {/* First Name */}
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                First Name*
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2"
              />
            </div>

            {/* Last Name */}
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                Last Name* (Enter a last name)
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2"
              />
            </div>
          </div>

          {/* Email and Subject in Flex */}
          <div className="flex space-x-4 mb-4">
            {/* Email */}
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email*
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2"
              />
            </div>

            {/* Subject */}
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Enter the subject"
                className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2"
              />
            </div>
          </div>

          {/* Leave a Message */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Leave a message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2"
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-black border border-black text-lg py-2 px-4 rounded hover:bg-blue-700 transition-all duration-300 hover:bg-customRed hover:text-white hover:border-transparent"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Business Hours */}
      <div className="w-full lg:w-1/2 bg-white p-6">
        <h2 className="text-3xl font-bold text-center mb-4">WE'RE OPEN</h2>

        <div className="text-center text-lg mb-4">
          <p>Monday-Friday : 11am-10pm</p>
          <p>Saturday-Sunday: 11am-12am</p>
        </div>

        <div className="text-center text-lg mb-4">
          <p>500 Terry Francois Street,</p>
          <p>San Francisco, CA 94158</p>
        </div>

        <div className="text-center text-lg">
          <p>Tel: 704-567-7549</p>
          <p>Email: adeniji.adebowale1@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
