import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addData } from '../features/tableDataSlice';

const Form = ({ onClose }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addData(data));
    reset();
    onClose(); // Close the form after submission
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="w-full max-w-4xl mx-auto p-8 bg-gray-800 text-white rounded-lg shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-white text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center">Create User</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="mb-4">
            <label className="block text-gray-300 font-semibold">Name</label>
            <input
              type="text"
              {...register('name', { required: true })}
              className={`w-full p-3 border-2 ${
                errors.name ? 'border-red-500' : 'border-transparent'
              } rounded-lg mt-1 bg-gray-700 text-white shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500`}
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 font-semibold">Email</label>
            <input
              type="email"
              {...register('email', { required: true })}
              className={`w-full p-3 border-2 ${
                errors.email ? 'border-red-500' : 'border-transparent'
              } rounded-lg mt-1 bg-gray-700 text-white shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 font-semibold">Phone</label>
            <input
              type="text"
              {...register('phone', { required: true })}
              className={`w-full p-3 border-2 ${
                errors.phone ? 'border-red-500' : 'border-transparent'
              } rounded-lg mt-1 bg-gray-700 text-white shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500`}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">Phone is required</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 font-semibold">Website</label>
            <input
              type="text"
              {...register('website', { required: true })}
              className={`w-full p-3 border-2 ${
                errors.website ? 'border-red-500' : 'border-transparent'
              } rounded-lg mt-1 bg-gray-700 text-white shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-500`}
              placeholder="Enter your website"
            />
            {errors.website && <p className="text-red-500 text-sm mt-1">Website is required</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 font-semibold">Industry</label>
            <input
              type="text"
              {...register('Industry', { required: true })}
              className={`w-full p-3 border-2 ${
                errors.Industry ? 'border-red-500' : 'border-transparent'
              } rounded-lg mt-1 bg-gray-700 text-white shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500`}
              placeholder="Enter your industry"
            />
            {errors.Industry && <p className="text-red-500 text-sm mt-1">Industry is required</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 font-semibold">Account Status</label>
            <input
              type="text"
              {...register('Account_Status', { required: true })}
              className={`w-full p-3 border-2 ${
                errors.Account_Status ? 'border-red-500' : 'border-transparent'
              } rounded-lg mt-1 bg-gray-700 text-white shadow-inner focus:outline-none focus:ring-2 focus:ring-red-500`}
              placeholder="Enter your account status"
            />
            {errors.Account_Status && <p className="text-red-500 text-sm mt-1">Account Status is required</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 font-semibold">Remark</label>
            <input
              type="text"
              {...register('Remark', { required: true })}
              className={`w-full p-3 border-2 ${
                errors.Remark ? 'border-red-500' : 'border-transparent'
              } rounded-lg mt-1 bg-gray-700 text-white shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-500`}
              placeholder="Enter your remark"
            />
            {errors.Remark && <p className="text-red-500 text-sm mt-1">Remark is required</p>}
          </div>

          <button
            type="submit"
            className="col-span-full w-full p-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg shadow-md hover:from-gray-600 hover:to-gray-800 mt-6 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

