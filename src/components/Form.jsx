import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addData } from '../features/tableDataSlice';

const Form = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    Industry: '',
    Account_Status: '',
    Remark: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData(formData));
    setFormData({
      name: '',
      email: '',
      phone: '',
      website: '',
      Industry: '',
      Account_Status: '',
      Remark: '',
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Create User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Website</label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your website"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Industry</label>
          <input
            type="text"
            name="Industry"
            value={formData.Industry}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your industry"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Account Status</label>
          <input
            type="text"
            name="Account_Status"
            value={formData.Account_Status}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your account status"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Remark</label>
          <input
            type="text"
            name="Remark"
            value={formData.Remark}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your remark"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
