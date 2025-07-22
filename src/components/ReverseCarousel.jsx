import React, { useState } from 'react';
import { cakeData } from '../data/data.js'; // Changed from cake_data_2.js to data.js
import CakeCard from './CakeCard'; // Import the CakeCard component
import CakeModal from './CakeModal'; // Import the CakeModal component

function ReverseCarousel() {
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
      <div className="overflow-hidden w-full font-inter pb-4 pt-8 carousel-container">
        <div className="flex">
          {/* First Carousel - Reverse Animation */}
          <div className='flex space-x-16 animate-loop-scroll-reverse'>
            {duplicatedCakes.map((cake, index) => (
              <div key={`reverse-carousel1-${cake.id}-${index}`} className="w-[320px] flex-shrink-0">
                <CakeCard 
                  cake={cake} 
                  onCardClick={handleCardClick}
                />
              </div>
            ))}
          </div>

          {/* Second Carousel - Continues seamlessly with reverse animation */}
          <div className='flex space-x-16 animate-loop-scroll-reverse ml-16'>
            {duplicatedCakes.map((cake, index) => (
              <div key={`reverse-carousel2-${cake.id}-${index}`} className="w-[320px] flex-shrink-0">
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

export default ReverseCarousel;