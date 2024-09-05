import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

// Import images from assets
import Image1 from './assets/image1.jpg';
import Image2 from './assets/image2.jpg';
import Image3 from './assets/image3.jpg';

const TabButton = ({ label, isActive, onClick }) => (
  <button
    className={`flex-1 px-4 py-2 rounded-lg text-sm transition-colors duration-100 ${
      isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-700 hover:text-white'
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

const GalleryImage = ({ image, index, onAddImage }) => (
  <div className="aspect-square rounded-lg overflow-hidden relative group">
    {image ? (
      <img
        src={image}
        alt={`Gallery item ${index + 1}`}
        className="w-full h-full object-cover transition-transform duration-300 transform group-hover:translate-y-[-25px]"
      />
    ) : (
      <button
        className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={() => onAddImage(index)}
      >
        <Plus size={24} className="text-white" />
      </button>
    )}
  </div>
);

const ProfileComponent = () => {
  const [activeTab, setActiveTab] = useState('About Me');
  const [galleryImages, setGalleryImages] = useState([Image1, Image2, Image3]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const tabs = ['About Me', 'Experiences', 'Recommended'];

  const handleAddImage = (index) => {
    const newImages = [...galleryImages];
    newImages[index] = '/api/placeholder/100/100'; // Placeholder image; replace with actual image path
    setGalleryImages(newImages);
  };

  const handleChevronLeft = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : galleryImages.length - 1
    );
  };

  const handleChevronRight = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < galleryImages.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gray-500 text-gray-300 p-5 rounded-lg mb-4">
        <div className="flex justify-between space-x-5 bg-black p-3 rounded-full mb-4">
          {tabs.map((tab) => (
            <TabButton
              key={tab}
              label={tab}
              isActive={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>

        {activeTab === 'About Me' && (
          <div className="bg-[#363C43] p-4 rounded-lg">
            <p className="text-sm">
              Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
              <br /><br />
              I was born and raised in Albany, NY, and have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...
            </p>
          </div>
        )}
      </div>

      <hr className="border-t-2 border-custom my-4" />

      <div className="bg-gray-500 text-gray-300 p-5 rounded-lg">
        <div className="flex justify-between items-center mb-5">
          <button className="bg-black text-white px-8 py-2 rounded-lg text-sm hover:bg-gray-600 hover:shadow-md">
            Gallery
          </button>

          <div className="flex space-x-2 items-center">
            <button
              className="bg-gray-700 text-white px-3 py-3 rounded-full text-sm flex items-center hover:bg-gray-600 hover:shadow-md"
              onClick={() => handleAddImage(currentImageIndex)}
            >
              <Plus size={16} className="mr-1" /> ADD IMAGE
            </button>
            <button
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 hover:shadow-md"
              onClick={handleChevronLeft}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 hover:shadow-md"
              onClick={handleChevronRight}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1">
          {galleryImages.map((image, index) => (
            <GalleryImage
              key={index}
              image={image}
              index={index}
              onAddImage={handleAddImage}
            />
          ))}
        </div>
      </div>

      <hr className="border-t-2 border-custom my-4" />
    </div>
  );
};

export default ProfileComponent;
