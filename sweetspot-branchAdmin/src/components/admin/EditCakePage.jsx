import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AddCakeForm from './AddCakeForm';
import { cakeData } from '../../data/cake_data';

const EditCakePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cakeToEdit, setCakeToEdit] = useState(null);
  const [allCakes, setAllCakes] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Get cakes from localStorage first, fallback to cakeData
    const savedCakes = localStorage.getItem('cakeData');
    let cakesList = savedCakes ? JSON.parse(savedCakes) : cakeData;
    
    setAllCakes(cakesList);
    
    // Find the cake to edit
    const selected = cakesList.find((cake) => String(cake.id) === id);
    setCakeToEdit(selected || null);
  }, [id]);

  const handleUpdate = (updatedCake) => {
    const updatedCakes = allCakes.map((cake) =>
      cake.id === updatedCake.id ? updatedCake : cake
    );
    
    setAllCakes(updatedCakes);
    
    // Save to localStorage
    localStorage.setItem('cakeData', JSON.stringify(updatedCakes));
    
    setSuccessMessage(`${updatedCake.name} has been updated successfully!`);

    setTimeout(() => {
      navigate('/admin/storemanagement');
    }, 2000); // Redirect after 2 seconds
  };

  if (!cakeToEdit) {
    return (
      <div className="text-center mt-10">
        <div className="text-red-500 font-semibold text-lg mb-4">
          Cake not found
        </div>
        <button 
          onClick={() => navigate('/admin/storemanagement')}
          className="bg-[rgba(224,99,99,0.85)] hover:bg-[rgba(224,99,99,1)] text-white px-6 py-2 rounded-full shadow-md transition duration-200 text-base"
        >
          Back to Store Management
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-md mb-4 shadow">
          <div className="text-base">{successMessage}</div>
          <div className="text-sm text-gray-600 mt-1">
            Redirecting to Store Management...
          </div>
        </div>
      )}

      {!successMessage && (
        <div className="mb-6 text-left">
          <h2 className="text-3xl font-bold text-[rgba(224,99,99,0.9)] mb-4">
            Edit Cake – {cakeToEdit.name}
          </h2>
          <button 
            onClick={() => navigate('/admin/storemanagement')}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded shadow-md transition duration-200 text-base mb-4"
          >
            ← Back to Store Management
          </button>
        </div>
      )}

      <AddCakeForm editCake={cakeToEdit} onUpdate={handleUpdate} />
    </div>
  );
};

export default EditCakePage;