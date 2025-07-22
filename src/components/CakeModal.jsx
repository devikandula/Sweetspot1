import React, { useState } from 'react';
import { X, Star, Heart, ShoppingCart, Plus, Minus } from 'lucide-react';

const CakeModal = ({ cake, isOpen, onClose }) => {
  const [selectedWeight, setSelectedWeight] = useState(1);
  const [eggOption, setEggOption] = useState('Egg');
  const [messageOnCake, setMessageOnCake] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!isOpen || !cake) return null;

  const handleAddToCart = () => {
    const cartItem = {
      ...cake,
      selectedWeight,
      eggOption,
      messageOnCake,
      quantity,
      totalPrice: cake.price * selectedWeight * quantity
    };
    console.log('Added to cart:', cartItem);
    // Add to cart logic here
    onClose();
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    console.log('Wishlist toggled:', !isWishlisted);
  };

  const adjustQuantity = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const totalPrice = cake.price * selectedWeight * quantity;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-3xl font-bold font-parastoo" style={{ color: 'rgba(79,79,79,0.7)' }}>
            Cake Details
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors"
            style={{ color: 'rgba(79,79,79,0.7)' }}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Image */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={cake.imageURL}
                  alt={cake.name}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <button
                  onClick={handleWishlist}
                  className={`absolute top-4 right-4 p-3 rounded-full shadow-lg transition-all ${
                    isWishlisted ? 'bg-red-50' : 'bg-white'
                  }`}
                >
                  <Heart 
                    className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`}
                    style={{ color: 'rgba(224, 99, 99, 0.85)' }}
                  />
                </button>
              </div>

              {/* Additional Images */}
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={cake.imageURL}
                      alt={`${cake.name} view ${index}`}
                      className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Title and Rating */}
              <div>
                <h1 className="text-5xl font-bold font-parastoo mb-3" style={{ color: 'rgba(79,79,79,0.66)' }}>
                  {cake.name}
                </h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < cake.rating ? 'fill-current' : ''}`}
                        style={{ color: 'rgba(224, 99, 99, 0.85)' }}
                      />
                    ))}
                  </div>
                  <span className="font-parastoo" style={{ color: 'rgba(79,79,79,0.7)' }}>
                    ({cake.rating}/5)
                  </span>
                </div>
                <p className="text-xl italic font-parastoo" style={{ color: 'rgba(79,79,79,0.7)' }}>
                  "Every slice tells a story of sweetness"
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3">
                <span className="text-4xl font-bold font-parastoo" style={{ color: 'rgba(224, 99, 99, 0.85)' }}>
                  ₹{totalPrice}
                </span>
                {cake.originalPrice && (
                  <span className="text-xl line-through font-parastoo" style={{ color: 'rgba(79,79,79,0.5)' }}>
                    ₹{cake.originalPrice * selectedWeight * quantity}
                  </span>
                )}
                <span className="text-sm font-parastoo px-3 py-1 rounded-full" 
                      style={{ backgroundColor: 'rgba(224, 99, 99, 0.1)', color: 'rgba(224, 99, 99, 0.85)' }}>
                  {cake.deliveryTime}
                </span>
              </div>

              {/* Description */}
              <div>
                <p className="font-parastoo leading-relaxed" style={{ color: 'rgba(79,79,79,0.7)' }}>
                  {cake.description}
                </p>
              </div>

              {/* Weight Selection */}
              <div>
                <h3 className="text-xl font-semibold font-parastoo mb-3" style={{ color: 'rgba(79,79,79,0.7)' }}>
                  Select Weight
                </h3>
                <div className="grid grid-cols-5 gap-2">
                  {cake.availableWeights.map((weight) => (
                    <button
                      key={weight}
                      onClick={() => setSelectedWeight(weight)}
                      className={`p-3 rounded-lg border-2 font-parastoo transition-all ${
                        selectedWeight === weight
                          ? 'border-current shadow-sm'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      style={{
                        borderColor: selectedWeight === weight ? 'rgba(224, 99, 99, 0.85)' : undefined,
                        backgroundColor: selectedWeight === weight ? 'rgba(224, 99, 99, 0.1)' : undefined,
                        color: selectedWeight === weight ? 'rgba(224, 99, 99, 0.85)' : 'rgba(79,79,79,0.7)'
                      }}
                    >
                      {weight} kg
                    </button>
                  ))}
                </div>
              </div>

              {/* Egg Option */}
              <div>
                <h3 className="text-xl font-semibold font-parastoo mb-3" style={{ color: 'rgba(79,79,79,0.7)' }}>
                  Egg Preference
                </h3>
                <div className="flex space-x-4">
                  {cake.eggOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setEggOption(option)}
                      className={`px-6 py-3 rounded-lg border-2 font-parastoo transition-all ${
                        eggOption === option
                          ? 'border-current shadow-sm'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      style={{
                        borderColor: eggOption === option ? 'rgba(224, 99, 99, 0.85)' : undefined,
                        backgroundColor: eggOption === option ? 'rgba(224, 99, 99, 0.1)' : undefined,
                        color: eggOption === option ? 'rgba(224, 99, 99, 0.85)' : 'rgba(79,79,79,0.7)'
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message on Cake */}
              <div>
                <h3 className="text-xl font-semibold font-parastoo mb-3" style={{ color: 'rgba(79,79,79,0.7)' }}>
                  Message on Cake (Optional)
                </h3>
                <textarea
                  value={messageOnCake}
                  onChange={(e) => setMessageOnCake(e.target.value)}
                  placeholder="Add a personal message to make it special..."
                  className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent font-parastoo resize-none"
                  style={{ focusRingColor: 'rgba(224, 99, 99, 0.85)' }}
                  rows="3"
                  maxLength="50"
                />
                <p className="text-sm mt-1 font-parastoo" style={{ color: 'rgba(79,79,79,0.5)' }}>
                  {messageOnCake.length}/50 characters
                </p>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-parastoo" style={{ color: 'rgba(79,79,79,0.7)' }}>
                    Quantity:
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => adjustQuantity(-1)}
                      className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                      style={{ color: 'rgba(79,79,79,0.7)' }}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2 font-parastoo text-lg" style={{ color: 'rgba(79,79,79,0.7)' }}>
                      {quantity}
                    </span>
                    <button
                      onClick={() => adjustQuantity(1)}
                      className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                      style={{ color: 'rgba(79,79,79,0.7)' }}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center space-x-3 text-white px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg font-parastoo text-lg font-semibold"
                  style={{ backgroundColor: 'rgba(224, 99, 99, 0.85)' }}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart - ₹{totalPrice}</span>
                </button>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-sm font-parastoo font-semibold" style={{ color: 'rgba(224, 99, 99, 0.85)' }}>
                    Free Delivery
                  </p>
                  <p className="text-xs font-parastoo" style={{ color: 'rgba(79,79,79,0.5)' }}>
                    On orders above ₹500
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-parastoo font-semibold" style={{ color: 'rgba(224, 99, 99, 0.85)' }}>
                    Same Day Delivery
                  </p>
                  <p className="text-xs font-parastoo" style={{ color: 'rgba(79,79,79,0.5)' }}>
                    Order before 6 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeModal;