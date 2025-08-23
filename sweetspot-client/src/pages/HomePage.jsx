import React from 'react';
import ParallaxCollection from '../components/ParallaxCollection';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
function HomePage() {
  return (
    <div>
     <Navbar />
    <ParallaxCollection />
    <Footer />
    </div>

  )
}

export default HomePage