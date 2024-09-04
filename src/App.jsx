import React from 'react';
import ProfileComponent from './ProfileComponent.jsx'; // Import the ProfileComponent
import './App.css'; // Import any additional app-specific styles

const App = () => {
  return (
    <div className="App">
      {/* You can add a header or other components if needed */}
      <ProfileComponent /> {/* Render the ProfileComponent here */}
    </div>
  );
};

export default App;
