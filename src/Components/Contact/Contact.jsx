import React, { useState, useRef } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('')
  const formRef = useRef(null)



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const scriptUrl = "https://script.google.com/macros/s/AKfycbwo5sm1xPpUc675shF35dWCNy-gKspsJqiBilBm-3baS-OJTI0MRvQlBqpc_pW6mK3s/exec"


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: new FormData(formRef.current)
      });
      const result = await response.json();
      if (result.result === "success") {
        console.log("The operation was successful!");
        setStatus('Form submitted successfully 😊')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => {
          setStatus('');
        }, 3000);

      } else {
        console.log("The operation was not successful.😢");
        setStatus('The operation was not successful')

      }
     } catch (error) {
      console.log('Error:', error)
      setStatus('Error Occured. Please try again 😓')
    }
  }


  // Handle form submission logic here


  return (
    <div className="flex justify-center items-center  p-10 bg-black text-white border-b-2 border-gray-400">
      <form
        method='post'
        ref={formRef}
        name='google-sheet'
        onChange={handleChange}
        onSubmit={handleSubmit}
        className="w-full max-w-lg  p-8 rounded-lg shadow-md border-2 border-gray-400 bg-black text-white "
      >
        
        <h2 className="text-3xl font-bold mb-6 text-white border-b-4 inline-block border-white ">Contact Me</h2>
        <div id='message' className='text-white '>{status && <p className='animate-bounce right-24   p-3  bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white rounded-full shadow-lg shadow-blue-500/30   text-white font-bold text-center cursor-pointer hover:bg-opacity-50 transition duration-300 ease-in-out'>{status}</p>}</div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="px-3 w-full py-2 border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500  flex  hover:bg-blue-700 bg-blue-400 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 inset-shadow p-6 text-white font-bold  cursor-pointer hover:bg-opacity-50 transition duration-300 ease-in-out"
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="px-3 w-full py-2 border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500  flex  hover:bg-blue-700 bg-blue-400 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 inset-shadow p-6 text-white font-bold  cursor-pointer hover:bg-opacity-50 transition duration-300 ease-in-out"
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="px-3 w-full py-2 border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500  flex  hover:bg-blue-700 bg-blue-400 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 inset-shadow p-6 text-white font-bold  cursor-pointer hover:bg-opacity-50 transition duration-300 ease-in-out"

            placeholder="Your message"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="  px-6 py-2   focus:outline-none focus:ring-2 focus:ring-blue-500 hidden md:flex items-center   hover:bg-blue-700 bg-blue-500 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg shadow-blue-500/30 inset-shadow p-6 text-white font-bold text-center cursor-pointer hover:bg-opacity-50 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
