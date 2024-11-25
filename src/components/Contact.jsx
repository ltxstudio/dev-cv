import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    
    // Send the form data to EmailJS
    emailjs.send(
      'your_service_id', // Your EmailJS service ID
      'your_template_id', // Your EmailJS template ID
      data,
      'your_user_id' // Your EmailJS user ID
    )
    .then(
      (response) => {
        console.log('Message sent successfully:', response);
        // Optional: Show a success message or clear the form here
      },
      (error) => {
        console.error('Error sending message:', error);
        // Optional: Show an error message here
      }
    );
  };

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-100">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h2>

      {/* Contact Information */}
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700">We would love to hear from you! Please fill out the form below or contact us directly at:</p>
        
        <div className="mt-4 text-gray-800">
          <p className="text-xl font-semibold">Our Address:</p>
          <p>1234 Street Name, City, State, 12345</p>
          <p className="mt-2 text-xl font-semibold">Phone:</p>
          <p>(123) 456-7890</p>
          <p className="mt-2 text-xl font-semibold">Email:</p>
          <p>contact@example.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="mt-8 max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-xl space-y-6"
      >
        
        {/* Name Input */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <label className="block text-lg font-semibold text-gray-700">Name</label>
          <input 
            {...register('name', { required: 'Name is required' })} 
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            type="text"
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
        </motion.div>
        
        {/* Email Input */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <label className="block text-lg font-semibold text-gray-700">Email</label>
          <input 
            {...register('email', { required: 'Email is required' })} 
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            type="email"
            placeholder="Your email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
        </motion.div>
        
        {/* Message Input */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <label className="block text-lg font-semibold text-gray-700">Message</label>
          <textarea 
            {...register('message', { required: 'Message is required' })} 
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="Your message"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>}
        </motion.div>
        
        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <button 
            type="submit" 
            className="w-full py-3 px-6 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </motion.div>
      </form>
    </section>
  );
};

export default Contact;
