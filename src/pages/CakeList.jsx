import React, { useState, useMemo } from 'react';
import NavBar from '../components/NavBar.jsx';
import CategoryBar from '../components/CategoryBar.jsx';
import FilterSidebar from '../components/FilterSidebar.jsx';
import CakeGrid from '../components/CakeGrid.jsx';
import CakeModal from '../components/CakeModal.jsx';
import Footer from '../components/Footer.jsx';
import { cakeData } from '../data/data.js';

function CakeList() {
  const [filters, setFilters] = useState({
    healthy: false,
    sugarFree: false,
    eggless: false,
    vegan: false,
    eggOption: 'both',
    selectedWeight: null,
    productTypes: [],
    priceRange: { min: '', max: '' }
  });
  
  const [sortBy, setSortBy] = useState('best-selling');
  const [filterSidebarOpen, setFilterSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCake, setSelectedCake] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clearAllFilters = () => {
    setFilters({
      healthy: false,
      sugarFree: false,
      eggless: false,
      vegan: false,
      eggOption: 'both',
      selectedWeight: null,
      productTypes: [],
      priceRange: { min: '', max: '' }
    });
  };

  const handleCakeCardClick = (cake) => {
    setSelectedCake(cake);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCake(null);
  };

  // Filter cakes based on current filters
  const filteredCakes = useMemo(() => {
    let filtered = cakeData;

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(cake => cake.category === selectedCategory);
    }

    // Apply egg option filter
    if (filters.eggOption !== 'both') {
      filtered = filtered.filter(cake => cake.eggOptions.includes(filters.eggOption));
    }

    // Apply weight filter
    if (filters.selectedWeight) {
      filtered = filtered.filter(cake => cake.availableWeights.includes(filters.selectedWeight));
    }

    // Apply product type filter
    if (filters.productTypes.length > 0) {
      filtered = filtered.filter(cake => 
        filters.productTypes.some(type => cake.productType.includes(type))
      );
    }

    // Apply diet preference filters
    if (filters.healthy) {
      filtered = filtered.filter(cake => cake.tags.includes('healthy'));
    }
    
    if (filters.sugarFree) {
      filtered = filtered.filter(cake => cake.tags.includes('sugarFree'));
    }

    if (filters.eggless) {
      filtered = filtered.filter(cake => cake.tags.includes('eggless'));
    }

    if (filters.vegan) {
      filtered = filtered.filter(cake => cake.tags.includes('vegan'));
    }

    // Apply price range filter
    if (filters.priceRange.min) {
      filtered = filtered.filter(cake => cake.price >= parseFloat(filters.priceRange.min));
    }
    
    if (filters.priceRange.max) {
      filtered = filtered.filter(cake => cake.price <= parseFloat(filters.priceRange.max));
    }

    // Apply sorting (basic implementation for demo)
    switch (sortBy) {
      case 'price-low-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // For demo, we'll reverse the order
        filtered.reverse();
        break;
      default:
        // Keep original order for 'best-selling'
        break;
    }

    return filtered;
  }, [filters, sortBy, selectedCategory]);

  return (
    <>
    <NavBar />
    <div className="min-h-screen bg-[#f5f7fa]">
      <CategoryBar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      
      <main className="container mx-auto px-4 py-8">
        {/* Category NavBar */}
        {selectedCategory && (
          <div className="mb-8 text-center">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h2 className="text-5xl font-bold font-parastoo capitalize" style={{ color: 'rgba(79,79,79,0.66)' }}>
                {selectedCategory === 'kids' ? 'Kids Special' : 
                 selectedCategory === 'sugarfree' ? 'Sugar Free Collection' :
                 selectedCategory === 'designer' ? 'Designer Cakes' :
                 selectedCategory === 'cupcakes' ? 'Cupcake Collection' :
                 selectedCategory === 'pastries' ? 'Fresh Pastries' :
                 selectedCategory === 'seasonal' ? 'Seasonal Specials' :
                 selectedCategory === 'premium' ? 'Premium Collection' :
                 `${selectedCategory} Collection`}
              </h2>
              <p className="text-xl italic font-parastoo mb-4" style={{ color: 'rgba(79,79,79,0.7)' }}>
                "Specially crafted for your perfect moments"
              </p>
              <button
                onClick={() => setSelectedCategory(null)}
                className="font-parastoo transition-colors hover:opacity-80"
                style={{ color: 'rgba(224, 99, 99, 0.85)' }}
              >
                ← View All Collections
              </button>
            </div>
          </div>
        )}
        
        <div className="flex gap-8">
          {/* Filter Sidebar */}
          {/* <div className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar 
              filters={filters}
              setFilters={setFilters}
              isOpen={true}
              setIsOpen={() => {}}
            />
          </div>

         
          <FilterSidebar 
            filters={filters}
            setFilters={setFilters}
            isOpen={filterSidebarOpen}
            setIsOpen={setFilterSidebarOpen}
          /> */}
          <FilterSidebar 
  filters={filters}
  setFilters={setFilters}
  isOpen={filterSidebarOpen}
  setIsOpen={setFilterSidebarOpen}
/>


          {/* Main Content */}
          <CakeGrid 
            cakes={filteredCakes}
            sortBy={sortBy}
            setSortBy={setSortBy}
            setFilterSidebarOpen={setFilterSidebarOpen}
            viewMode={viewMode}
            setViewMode={setViewMode}
            onCakeCardClick={handleCakeCardClick}
          />
        </div>
      </main>

      {/* Cake Modal */}
      <CakeModal 
        cake={selectedCake}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <Footer />
    </div>
    </>
  );
}

export default CakeList;