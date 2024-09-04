import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

// Import images from assets
import Image1 from './assets/image1.jpg'; // Update the path to your assets folder
import Image2 from './assets/image2.jpg';
import Image3 from './assets/image3.jpg';

const ProfileComponent = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('About Me');

  // State to manage gallery images; initially filled with imported images
  const [galleryImages, setGalleryImages] = useState([Image1, Image2, Image3]);

  // Array of tab names
  const tabs = ['About Me', 'Experiences', 'Recommended'];

  // Function to handle adding an image
  const handleAddImage = (index) => {
    // For example, add a new image to the gallery (This can be replaced with a file input handler)
    const newImages = [...galleryImages];
    newImages[index] = '/api/placeholder/100/100'; // You can replace this with a real path
    setGalleryImages(newImages);
  };

  return (
    <div className="bg-gray-900 text-gray-300 p-5 rounded-lg max-w-2xl mx-auto">
      {/* Tab Navigation */}
      <div className="mb-4">
        <div className="flex justify-between space-x-5 bg-black p-1 rounded-full">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`flex-1 px-4 py-2 rounded-lg text-sm transition-colors duration-300 ${
                activeTab === tab
                  ? 'bg-gray-800 text-white'
                  : 'hover:bg-gray-700 hover:text-white'
              } ${
                index === 1
                  ? 'hover:animate-from-left' // Animation for 'Experiences' on hover
                  : index === 2
                  ? 'hover:animate-from-right' // Animation for 'Recommended' on hover
                  : ''
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section for About Me */}
      {activeTab === 'About Me' && (
        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <h2 className="text-lg font-semibold mb-2"></h2>
          <p className="text-sm">
          Hello! I'm Dave, your sales rep here from Salesforce.
            I've been working at this awesome company for 3 years now.
            <br/>
            <br/> I was born and raised in Albany, NY, and have
            been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters,
            Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM.
            This is a...
          </p>
        </div>
      )}
      {/* Horizontal Line */}
      <hr className="border-gray-400 my-4 " /> {/* Add this line for the horizontal line */}


      {/* Gallery Section */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          {/* Gallery Button */}
          <button className="bg-black text-white px-8 py-2 rounded-lg text-sm flex items-center hover:bg-gray-600 hover:shadow-md">
            Gallery
          </button>

          {/* Navigation Buttons and Add Image Button */}
          <div className="flex space-x-2 items-center flex justify-between">
            <button className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm flex items-center hover:bg-gray-600 hover:shadow-md">
              <Plus size={16} className="mr-1" /> ADD IMAGE
            </button>
            <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 hover:shadow-md">
              <ChevronLeft size={16} />
            </button>
            
            <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 hover:shadow-md">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Gallery Images Grid */}
        <div className="grid grid-cols-3 gap-3 "> {/* Removed padding between images */}
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square bg-gray-700 rounded-lg overflow-hidden relative group"
            >
              {image ? (
                <img
                  src={image}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 delay-200 transform group-hover:translate-y-[-20px]"
                />
              ) : (
                <button
                  className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => handleAddImage(index)}
                >
                  <Plus size={24} className="text-white" />
                </button>
              )}
              
            </div>
          ))}
          
        </div>
      </div>
    </div>
    
  );
  
};


export default ProfileComponent;
