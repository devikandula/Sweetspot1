import React from 'react';
import { useNavigate } from 'react-router-dom';

const CakeList = ({ cakes, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = (cake) => {
    navigate(`/admin/edit/${cake.id}`);
  };

  const handleDelete = (cake) => {
    if (window.confirm(`Are you sure you want to delete "${cake.name}"?`)) {
      onDelete(cake.id);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto font-parastoo">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-5xl text-[rgba(224,99,99,0.85)]">
          Manage Cake Collection
        </h2>
        <div className="text-sm text-gray-600">
          Total Cakes: <span className="font-semibold text-[rgba(224,99,99,0.85)]">{cakes.length}</span>
        </div>
      </div>

      {cakes.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🎂</div>
          <h3 className="text-xl text-gray-600 mb-2">No cakes available</h3>
          <p className="text-gray-500">Add your first cake using the form above!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake) => (
            <div
              key={cake.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                  }}
                />
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 text-xs rounded-full text-white ${
                    cake.available ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {cake.available ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-[rgba(224,99,99,0.85)] mb-2 line-clamp-2">
                  {cake.name}
                </h3>
                
                <div className="space-y-1 mb-3 text-sm">
                  <p className="text-gray-600">
                    <span className="font-medium">Category:</span> {cake.category}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Flavour:</span> {cake.flavour}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Weight:</span> {cake.quantityKg} kg
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Stock:</span> {cake.stockCount} 
                  </p>
                  {cake.discount > 0 && (
                    <p className="text-green-600 font-medium">
                      <span className="font-medium">Discount:</span> {cake.discount}% off
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {cake.discount > 0 ? (
                      <>
                        <span className="text-lg font-bold text-[rgba(224,99,99,0.85)]">
                          ₹{Math.round(parseInt(cake.price.replace('₹', '')) * (1 - cake.discount / 100))}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          {cake.price}
                        </span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-[rgba(224,99,99,0.85)]">
                        {cake.price}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between space-x-2">
                  <button
                    onClick={() => handleEdit(cake)}
                    className="flex-1 px-4 py-2 text-sm rounded-md bg-[rgba(224,99,99,0.85)] text-white hover:bg-[rgba(215,135,157,1)] transition-colors duration-200 font-medium"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(cake)}
                    className="flex-1 px-4 py-2 text-sm rounded-md border border-red-500 text-red-500 hover:bg-red-50 transition-colors duration-200 font-medium"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cakes.length > 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-200 text-sm font-medium"
          >
            ↑ Add New Cake
          </button>
        </div>
      )}
    </div>
  );
};

export default CakeList;