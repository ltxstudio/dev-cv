import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Send the form data to an API or email service
  };

  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center text-gray-800">Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 max-w-lg mx-auto space-y-6">
        <div>
          <label className="block text-gray-700">Name</label>
          <input 
            {...register('name', { required: 'Name is required' })} 
            className="w-full px-4 py-2 border rounded-md"
            type="text"
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input 
            {...register('email', { required: 'Email is required' })} 
            className="w-full px-4 py-2 border rounded-md"
            type="email"
            placeholder="Your email"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea 
            {...register('message', { required: 'Message is required' })} 
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Your message"
          ></textarea>
          {errors.message && <p className="text-red-500">{errors.message.message}</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-md">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
