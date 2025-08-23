import React from 'react';
import Slider from 'react-slick';
import { cakeData } from '../../data/cake_data';
/*AdminCarousel.jsx*/
const AdminCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="mb-10">
      <h2 className="text-3xl mb-4 text-[rgba(17,5,5,0.7)] font-[Parastoo]"></h2>
      <Slider {...settings}>
        {cakeData.slice(0, 5).map((cake) => (
          <div key={cake.id} className="px-3">
            <div className="rounded-xl shadow-lg overflow-hidden transition hover:scale-105 duration-300">
              <img src={cake.image} alt={cake.name} className="w-full h-40 object-cover" />
              <div className="p-3 bg-white">
                <h3 className="text-lg text-[rgba(185,55,55,0.7)] font-medium">{cake.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AdminCarousel;
