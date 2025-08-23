// src/components/admin/FeaturedCakes.jsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

const FeaturedCakes = () => {
  const navigate = useNavigate();

  const [featuredList, setFeaturedList] = useState([]);
  const [newCake, setNewCake] = useState({ title: '', image: '', description: '' });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCake({ ...newCake, [name]: value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newCake.title || !newCake.image) return;

    const uniqueId = `${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
    setFeaturedList([...featuredList, { ...newCake, id: uniqueId }]);
    setNewCake({ title: '', image: '', description: '' });
    setIsFormVisible(false);
  };

  const handleDelete = (id) => {
    setFeaturedList(featuredList.filter((cake) => cake.id !== id));
  };

  const handleMoveUp = (index) => {
    if (index === 0) return;
    const newList = [...featuredList];
    [newList[index], newList[index - 1]] = [newList[index - 1], newList[index]];
    setFeaturedList(newList);
  };

  const handleMoveDown = (index) => {
    if (index === featuredList.length - 1) return;
    const newList = [...featuredList];
    [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]];
    setFeaturedList(newList);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 p-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border-l-4 border-[rgba(224,99,99,0.85)]">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-[rgba(224,99,99,0.85)] mb-2">
                Featured Cakes Management
              </h1>
              <p className="text-gray-600">Manage your featured cakes that appear on the homepage</p>
            </div>
            <button
              onClick={() => navigate('/admin/storemanagement')}
              className="bg-gradient-to-r from-[rgba(224,99,99,0.75)] to-[rgba(224,99,99,0.9)] hover:from-[rgba(224,99,99,0.9)] hover:to-[rgba(224,99,99,1)] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              ← Back to Store Management
            </button>
          </div>
        </div>

        {/* Stats and Add Button */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-blue-400">
            <h3 className="text-2xl font-bold text-blue-600">{featuredList.length}</h3>
            <p className="text-gray-600">Featured Cakes</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-green-400">
            <h3 className="text-2xl font-bold text-green-600">{featuredList.length >= 3 ? 'Active' : 'Inactive'}</h3>
            <p className="text-gray-600">Slider Status</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <button
              onClick={() => setIsFormVisible(!isFormVisible)}
              className="w-full bg-gradient-to-r from-[rgba(224,99,99,0.75)] to-[rgba(224,99,99,0.9)] hover:from-[rgba(224,99,99,0.9)] hover:to-[rgba(224,99,99,1)] text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {isFormVisible ? '✕ Cancel' : '+ Add Featured Cake'}
            </button>
          </div>
        </div>

        {/* Add Form */}
        {isFormVisible && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-[rgba(224,99,99,0.2)]">
            <h2 className="text-2xl font-bold text-[rgba(224,99,99,0.85)] mb-6 text-center">
              Add New Featured Cake
            </h2>
            <form onSubmit={handleAdd} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[rgba(224,99,99,0.85)] font-semibold mb-2">
                    Cake Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={newCake.title}
                    onChange={handleChange}
                    placeholder="E.g., Royal Chocolate Delight"
                    className="w-full border-2 border-pink-200 rounded-xl px-4 py-3 focus:border-[rgba(224,99,99,0.85)] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[rgba(224,99,99,0.85)] font-semibold mb-2">
                    Image URL *
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={newCake.image}
                    onChange={handleChange}
                    placeholder="https://example.com/cake-image.jpg"
                    className="w-full border-2 border-pink-200 rounded-xl px-4 py-3 focus:border-[rgba(224,99,99,0.85)] focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[rgba(224,99,99,0.85)] font-semibold mb-2">
                  Short Description (Optional)
                </label>
                <textarea
                  name="description"
                  value={newCake.description}
                  onChange={handleChange}
                  placeholder="Brief description of this featured cake..."
                  rows="3"
                  className="w-full border-2 border-pink-200 rounded-xl px-4 py-3 focus:border-[rgba(224,99,99,0.85)] focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[rgba(224,99,99,0.85)] to-[rgba(224,99,99,1)] hover:from-[rgba(224,99,99,1)] hover:to-[rgba(224,99,99,0.85)] text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  ✓ Add to Featured Cakes
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Featured Cakes List */}
        {featuredList.length > 0 ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-[rgba(224,99,99,0.2)]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[rgba(224,99,99,0.85)]">
                Featured Cakes Preview ({featuredList.length})
              </h2>
              <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                {featuredList.length >= 3 ? 'Slider Mode Active' : `Add ${3 - featuredList.length} more for slider`}
              </div>
            </div>

            {featuredList.length >= 3 ? (
              <div className="slider-container">
                <Slider {...sliderSettings}>
                  {featuredList.map((cake, index) => (
                    <div key={cake.id} className="px-3">
                      <EnhancedCakeCard 
                        cake={cake} 
                        index={index}
                        totalItems={featuredList.length}
                        onDelete={handleDelete}
                        onMoveUp={handleMoveUp}
                        onMoveDown={handleMoveDown}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredList.map((cake, index) => (
                  <EnhancedCakeCard 
                    key={cake.id}
                    cake={cake} 
                    index={index}
                    totalItems={featuredList.length}
                    onDelete={handleDelete}
                    onMoveUp={handleMoveUp}
                    onMoveDown={handleMoveDown}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center border-2 border-dashed border-gray-300">
            <div className="text-6xl mb-4">🎂</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Featured Cakes Yet</h3>
            <p className="text-gray-500 mb-6">Add your first featured cake to get started!</p>
            <button
              onClick={() => setIsFormVisible(true)}
              className="bg-gradient-to-r from-[rgba(224,99,99,0.75)] to-[rgba(224,99,99,0.9)] hover:from-[rgba(224,99,99,0.9)] hover:to-[rgba(224,99,99,1)] text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              + Add Your First Featured Cake
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Enhanced Cake Card Component
const EnhancedCakeCard = ({ cake, index, totalItems, onDelete, onMoveUp, onMoveDown }) => (
  <div className="group relative bg-gradient-to-br from-white to-pink-50 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-pink-100">
    {/* Image Container */}
    <div className="relative overflow-hidden">
      <img 
        src={cake.image} 
        alt={cake.title} 
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Action Buttons */}
      <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {index > 0 && (
          <button
            onClick={() => onMoveUp(index)}
            className="bg-blue-500 hover:bg-blue-600 text-white p-1.5 rounded-full shadow-lg transition-colors duration-200"
            title="Move Up"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
        
        {index < totalItems - 1 && (
          <button
            onClick={() => onMoveDown(index)}
            className="bg-green-500 hover:bg-green-600 text-white p-1.5 rounded-full shadow-lg transition-colors duration-200"
            title="Move Down"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
        
        <button
          onClick={() => onDelete(cake.id)}
          className="bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-full shadow-lg transition-colors duration-200"
          title="Delete"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Position Badge */}
      <div className="absolute top-2 left-2 bg-[rgba(224,99,99,0.9)] text-white text-xs font-bold px-2 py-1 rounded-full">
        #{index + 1}
      </div>
    </div>

    {/* Content */}
    <div className="p-4">
      <h4 className="text-[rgba(224,99,99,0.85)] text-lg font-semibold mb-2 line-clamp-1">
        {cake.title}
      </h4>
      {cake.description && (
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
          {cake.description}
        </p>
      )}
      
      {/* Status Badge */}
      <div className="flex justify-between items-center">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          ✓ Featured
        </span>
        <span className="text-xs text-gray-500">
          Position {index + 1}
        </span>
      </div>
    </div>
  </div>
);

export default FeaturedCakes;