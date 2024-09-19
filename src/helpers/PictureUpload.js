import React, { useState } from 'react';
import "./PictureUpload.module.css"
const PictureUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Create a local URL for the uploaded image
    }
  };

  // Handle image removal
  const removeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
         {selectedImage && (
        <div className='mt-3'>
          <img 
            src={selectedImage} 
            alt="Selected" 
            style={{ width: '100%', height: 'auto', display: 'block', marginBottom: '10px' }}
          />
         <button onClick={removeImage} className='text-white' style={{padding: "10px 10px 10px 10px", borderRadius: "5px"}}>Remove Image</button>
        </div>
      )}
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
        style={{ display: 'block', marginBottom: '10px', padding: "15px 15px 15px 30px" }}
        className='form-control mt-3'
    
      />
      
    </div>
  );
};

export default PictureUpload;
