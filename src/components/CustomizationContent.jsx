import React from 'react'
import CustomizationForm from './CustomizationForm';
import { images } from '../data/masonry_cakes';

function CustomizationContent() {
  // Split images into odd and even for different columns
  const oddImages = images.filter((_, index) => index % 2 === 0); // indices 0, 2, 4, 6, 8 (odd positions)
  const evenImages = images.filter((_, index) => index % 2 === 1); // indices 1, 3, 5, 7, 9 (even positions)
 
  // Create doubled arrays for seamless infinite scroll
  const doubledOddImages = [...oddImages, ...oddImages];
  const doubledEvenImages = [...evenImages, ...evenImages];

  return (
    <div className="flex min-h-screen bg-[#f5f7fa] overflow-hidden">
      {/* Left Side - Text Content */}
      <div className="w-1/2 flex flex-col justify-center px-12 py-20">
        <div className="max-w-2xl">
          <div className="text-center mb-6">
            <h1 className="font-parastoo text-4xl text-[rgba(79,79,79,0.66)]">
              Make your own cake at{" "}
              <span className="highlighted-text text-6xl">Sweet Spot</span>
            </h1>
          </div>
          
          <p className="text-gray-700 leading-relaxed text-base mb-6 text-center mx-auto">
            Share your vision with us and we'll create a <span className="Love-highlighted-text font-semibold">custom cake</span> that perfectly matches your taste and style. 
            From birthdays to anniversaries and every celebration in between, let us make your special moment unforgettable with our <span className="Sugar-highlighted-text font-semibold">artisanal creations</span>.
          </p>
          
          <CustomizationForm />
        </div>
      </div>
           
      {/* Right Side - Scrolling Images */}
      <div className="w-1/2 relative overflow-hidden">
        <div className="grid gap-4 h-full" style={{ gridTemplateColumns: '1.1fr 0.75fr' }}>
          {/* Column 1 - Scrolling Up (Slower) - Odd Images */}
          <div className="relative h-full overflow-hidden">
            <div className="animate-scroll-up-slow flex flex-col gap-4 absolute top-0 left-0 right-0">
              {doubledOddImages.map((src, index) => (
                <img 
                  key={`col1-${index}`}
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0 h-auto object-cover"
                />
              ))}
            </div>
          </div>
          
          {/* Column 2 - Scrolling Down (Faster) - Even Images */}
          <div className="relative h-full overflow-hidden">
            <div className="animate-scroll-down-fast flex flex-col gap-4 absolute top-0 left-0 right-0">
              {doubledEvenImages.map((src, index) => (
                <img 
                  key={`col2-${index}`}
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0 h-auto object-cover"
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#f5f7fa] to-transparent pointer-events-none z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f5f7fa] to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  )
}

export default CustomizationContent