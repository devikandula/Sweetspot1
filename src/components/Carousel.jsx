import React, { useState } from 'react';
import { cakeData } from '../data/data.js'; // Changed from cake_data.js to data.js
import CakeCard from './CakeCard'; // Import the CakeCard component
import CakeModal from './CakeModal'; // Import the CakeModal component

function Carousel() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCake, setSelectedCake] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const duplicatedCakes = [...cakeData, ...cakeData];

  const handleCardClick = (cake) => {
    setSelectedCake(cake);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCake(null);
  };

  return (
    <>
      <div className="overflow-hidden w-full font-inter pb-4 carousel-container">
        <div className="flex">
          {/* First Carousel */}
          <div className='flex space-x-16 animate-loop-scroll'>
            {duplicatedCakes.map((cake, index) => (
              <div key={`carousel1-${cake.id}-${index}`} className="w-[320px] flex-shrink-0">
                <CakeCard 
                  cake={cake} 
                  onCardClick={handleCardClick}
                />
              </div>
            ))}
          </div>

          {/* Second Carousel - Continues seamlessly */}
          <div className='flex space-x-16 animate-loop-scroll ml-16'>
            {duplicatedCakes.map((cake, index) => (
              <div key={`carousel2-${cake.id}-${index}`} className="w-[320px] flex-shrink-0">
                <CakeCard 
                  cake={cake} 
                  onCardClick={handleCardClick}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cake Modal */}
      <CakeModal 
        cake={selectedCake}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default Carousel;