import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Aside } from './Aside';

const divStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: 240
};

const imageDivStyle = {
  margin: '1%',
  textAlign: 'center',
  background: '#9c8b8b'
};

const imageStyle = {
  margin: '3%',
  maxWidth: '200px',
  height: '200px',
};

export const Imagenes = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3000/upload');
        setImages(response.data);
      } catch (error) {
        console.error('Error al cargar las imagenes', error);
      }
    }

    fetchImages();
  }, []);

  return (
    <div>
        <Aside/>
      <div className='section-title'>
        <h2>Archivos subidos:</h2>
      </div>
      <div style={divStyle}>
        {images.map((image, index) => (
          <div key={index} style={imageDivStyle}>
            <h4>Elemento: {index}</h4>
            <img src={`http://localhost:3000/uploads/${image.filename}`} alt={image.filename} style={imageStyle} />
            <p style={{color: 'black'}}>Fecha de carga: {new Date(image.date).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


