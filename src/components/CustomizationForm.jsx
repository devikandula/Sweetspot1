import React, { useState } from 'react';
import FlavorSelect from './FlavorSelect';
import WeightSelector from './WeightSelector';
import BasicInputs from './BasicInputs';
import FileUpload from './FileUpload';
import SelectedModel from './SelectedModel';
import ModelsModal from './ModelsModal';

const CustomizationForm = () => {
  const [formData, setFormData] = useState({
    flavor: '',
    weight: '',
    approximateBudget: '',
    deliveryDate: '',
    message: ''
  });

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);

  const existingModels = [
    { id: 1, name: 'Classic Wedding Cake', image: '/api/placeholder/200/150', category: 'Wedding' },
    { id: 2, name: 'Birthday Celebration', image: '/api/placeholder/200/150', category: 'Birthday' },
    { id: 3, name: 'Chocolate Delight', image: '/api/placeholder/200/150', category: 'Special' },
    { id: 4, name: 'Floral Fantasy', image: '/api/placeholder/200/150', category: 'Wedding' },
    { id: 5, name: 'Kids Party Fun', image: '/api/placeholder/200/150', category: 'Birthday' },
    { id: 6, name: 'Elegant Rose', image: '/api/placeholder/200/150', category: 'Special' },
    { id: 7, name: 'Tiered Masterpiece', image: '/api/placeholder/200/150', category: 'Wedding' },
    { id: 8, name: 'Cartoon Character', image: '/api/placeholder/200/150', category: 'Birthday' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWeightSelect = (weight) => {
    setFormData(prev => ({ ...prev, weight }));
  };

  const handleFileSelect = (files) => {
    const fileList = Array.from(files);
    // Replace existing files with new selection (only keep the most recent)
    setSelectedFiles(fileList);
    setSelectedModel(null); // Clear selected model when uploading files
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    handleFileSelect(files);
  };

  const handleModelSelect = (model) => {
    setSelectedModel(model);
    setSelectedFiles([]); // Clear file uploads when selecting a model
    setShowModal(false);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    console.log('Files:', selectedFiles);
    console.log('Selected Model:', selectedModel);
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg font-parastoo text-[rgba(79,79,79,0.66)]">
      <div className="space-y-6">
              <p className="text-[rgba(79,79,79,0.66)] font-parastoo mb-6 text-center text-3xl mx-auto">
                 Fill up this form to get started on your cake journey.
                </p>
        <FlavorSelect value={formData.flavor} onChange={handleInputChange} />
        <WeightSelector selectedWeight={formData.weight} onWeightSelect={handleWeightSelect} />
        <BasicInputs formData={formData} onChange={handleInputChange} />
        
        <FileUpload
          isDragOver={isDragOver}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onFileSelect={handleFileSelect}
          selectedFiles={selectedFiles}
          onShowModal={() => setShowModal(true)}
        />
        
        <SelectedModel 
          selectedModel={selectedModel} 
          onRemove={() => setSelectedModel(null)} 
        />
        
        <ModelsModal
          showModal={showModal}
          onClose={() => setShowModal(false)}
          onModelSelect={handleModelSelect}
          existingModels={existingModels}
        />
        
        {/* Message/Extra Info */}
        <div>
          <textarea
            name="message"
            placeholder="Message / Extra Info*"
            value={formData.message}
            onChange={handleInputChange}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-[rgba(224,99,99,0.85)] text-sm resize-none text-gray-700"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-[rgba(224,99,99,0.85)] text-white px-8 py-3 text-sm font-medium hover:bg-amber-700 rounded transition-colors"
          >
            SUBMIT
          </button>
        </div>
        <div>

          <p className="text-xs text-gray-500">
            Your cake will be added to your cart and you can proceed to <span className="Love-highlighted-text">checkout</span> once you are done customizing.
          </p>
          <p className="text-xs text-gray-500">
            By submitting this form, you agree to our <a href="/terms" className="text-[rgba(224,99,99,0.85)] hover:underline">Terms of Service</a> and <a href="/privacy" className="text-[rgba(224,99,99,0.85)] hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomizationForm;