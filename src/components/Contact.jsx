import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Send the form data to an API or email service
  };

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-100">
      <h2 className="text-4xl font-bold text-center text-gray-800">Contact</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
        
        {/* Name Input */}
        <div>
          <label className="block text-lg font-semibold text-gray-700">Name</label>
          <input 
            {...register('name', { required: 'Name is required' })} 
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            type="text"
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
        </div>
        
        {/* Email Input */}
        <div>
          <label className="block text-lg font-semibold text-gray-700">Email</label>
          <input 
            {...register('email', { required: 'Email is required' })} 
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            type="email"
            placeholder="Your email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
        </div>
        
        {/* Message Input */}
        <div>
          <label className="block text-lg font-semibold text-gray-700">Message</label>
          <textarea 
            {...register('message', { required: 'Message is required' })} 
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="Your message"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>}
        </div>
        
        {/* Submit Button */}
        <div>
          <button type="submit" className="w-full py-3 px-6 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-300">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
