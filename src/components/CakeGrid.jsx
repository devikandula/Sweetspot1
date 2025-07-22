import React from 'react';
import CakeCard from './CakeCard.jsx';
import { Filter, Grid, List } from 'lucide-react';

const CakeGrid = ({ 
  cakes, 
  sortBy, 
  setSortBy, 
  setFilterSidebarOpen,
  viewMode,
  setViewMode,
  onCakeCardClick
}) => {
  const sortOptions = [
    { value: 'best-selling', label: 'Best Selling' },
    { value: 'price-low-high', label: 'Price: Low to High' },
    { value: 'price-high-low', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
    { value: 'rating', label: 'Customer Rating' }
  ];

  return (
    <div className="flex-1">
      {/* Header with sorting and view options */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setFilterSidebarOpen(true)}
            className="lg:hidden flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:shadow-sm transition-all font-parastoo"
            style={{ color: 'rgba(79,79,79,0.7)' }}
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </button>
          
          <p className="font-parastoo" style={{ color: 'rgba(79,79,79,0.7)' }}>
            Showing {cakes.length} delicious option{cakes.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex items-center space-x-4">
          {/* View mode toggle */}
          <div className="hidden sm:flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'grid' 
                  ? 'shadow-sm' 
                  : 'hover:shadow-sm'
              }`}
              style={{ 
                backgroundColor: viewMode === 'grid' ? 'rgba(224, 99, 99, 0.1)' : 'transparent',
                color: viewMode === 'grid' ? 'rgba(224, 99, 99, 0.85)' : 'rgba(79,79,79,0.7)'
              }}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'list' 
                  ? 'shadow-sm' 
                  : 'hover:shadow-sm'
              }`}
              style={{ 
                backgroundColor: viewMode === 'list' ? 'rgba(224, 99, 99, 0.1)' : 'transparent',
                color: viewMode === 'list' ? 'rgba(224, 99, 99, 0.85)' : 'rgba(79,79,79,0.7)'
              }}
            >
              <List className="h-4 w-4" />
            </button>
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:border-transparent font-parastoo"
              style={{ 
                color: 'rgba(79,79,79,0.7)',
                focusRingColor: 'rgba(224, 99, 99, 0.85)'
              }}
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   style={{ color: 'rgba(79,79,79,0.7)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Grid/List view */}
      {cakes.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl font-parastoo mb-2" style={{ color: 'rgba(79,79,79,0.7)' }}>
            No cakes found matching your taste
          </p>
          <p className="italic font-parastoo" style={{ color: 'rgba(79,79,79,0.5)' }}>
            "Try adjusting your filters to discover more sweet options"
          </p>
        </div>
      ) : (
        <div className={`
          ${viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
            : 'space-y-4'
          }
        `}>
          {cakes.map((cake) => (
            <CakeCard key={cake.id} cake={cake} onCardClick={onCakeCardClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CakeGrid;