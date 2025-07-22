// BasicInputs.jsx
import React from 'react';

const BasicInputs = ({ formData, onChange }) => {
  return (
    <>
      <div>
        
        <input
          type="text"
          name="approximateBudget"
          placeholder="Approximate Budget (in INR)*"
          value={formData.approximateBudget}
          onChange={onChange}
          className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-[rgba(224,99,99,0.85)] text-sm text-gray-700"
        />
      </div>

      <div>
        <input
          type="text"
          name="deliveryDate"
          placeholder="Delivery Date (Preferred)*"
          value={formData.deliveryDate}
          onChange={onChange}
          className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-[rgba(224,99,99,0.85)] text-sm text-gray-700"
        />
      </div>
    </>
  );
};

export default BasicInputs;