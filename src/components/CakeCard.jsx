import React from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';

const CakeCard = ({ cake, onCardClick }) => {
  const handleAddToCart = () => {
    console.log('Added to cart:', cake);
  };

  const handleCardClick = () => {
    onCardClick(cake);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group border border-gray-100 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={cake.imageURL}
          alt={cake.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay with heart icon */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
             onClick={(e) => e.stopPropagation()}>
          <button className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
            <Heart className="h-4 w-4 transition-colors hover:opacity-80" 
                   style={{ color: 'rgba(224, 99, 99, 0.85)' }} />
          </button>
        </div>

        {/* Delivery time badge */}
        <div className="absolute bottom-3 left-3">
          <span className="text-white text-xs px-3 py-1 rounded-full font-parastoo bg-black bg-opacity-50">
            {cake.deliveryTime}
          </span>
        </div>

        {/* Badge for special tags */}
        {cake.tags.includes('sugarFree') && (
          <div className="absolute top-3 left-3">
            <span className="text-white text-xs px-3 py-1 rounded-full font-parastoo"
                  style={{ backgroundColor: 'rgba(220, 117, 186, 0.92)' }}>
              Sugar Free
            </span>
          </div>
        )}
        
        {cake.tags.includes('healthy') && (
          <div className="absolute top-3 left-3">
            <span className="text-white text-xs px-3 py-1 rounded-full font-parastoo"
                  style={{ backgroundColor: 'rgba(215, 135, 157, 1)' }}>
              Healthy
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg font-parastoo mb-2 line-clamp-2" 
            style={{ color: 'rgba(79,79,79,0.7)' }}>
          {cake.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center space-x-2 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < cake.rating ? 'fill-current' : ''}`}
                style={{ color: 'rgba(224, 99, 99, 0.85)' }}
              />
            ))}
          </div>
          <span className="text-sm font-parastoo" style={{ color: 'rgba(79,79,79,0.5)' }}>
            ({cake.rating})
          </span>
        </div>
        
        <p className="text-sm mb-4 line-clamp-2 font-parastoo" 
           style={{ color: 'rgba(79,79,79,0.7)' }}>
          {cake.description}
        </p>
        
        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold font-parastoo" 
                  style={{ color: 'rgba(224, 99, 99, 0.85)' }}>
              ₹{cake.price}
            </span>
            {cake.originalPrice && (
              <span className="text-sm line-through font-parastoo" 
                    style={{ color: 'rgba(79,79,79,0.5)' }}>
                ₹{cake.originalPrice}
              </span>
            )}
          </div>
          
          {/* <button
            onClick={handleAddToCart}
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
            className="flex items-center space-x-2 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md font-parastoo"
            style={{ backgroundColor: 'rgba(224, 99, 99, 0.85)' }}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="text-sm font-medium">Add to Cart</span>
          </button> */}
          <button
  onClick={(e) => {
    e.stopPropagation();
    handleAddToCart();
  }}
  className="flex items-center space-x-2 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md font-parastoo"
  style={{ backgroundColor: 'rgba(224, 99, 99, 0.85)' }}
>
  <ShoppingCart className="h-4 w-4" />
  <span className="text-sm font-medium">Add to Cart</span>
</button>

        </div>

        {/* Additional info */}
        <div className="flex items-center justify-between text-xs font-parastoo mt-3" 
             style={{ color: 'rgba(79,79,79,0.5)' }}>
        
          <span>✓ Fresh baked</span>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;