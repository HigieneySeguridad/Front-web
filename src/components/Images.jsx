import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2"

const divStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: 240
};

const imageDivStyle = {
  margin: '1%',
  textAlign: 'center',
  background: '#9c8b8b',
  maxWidth: '300px'
};

const imageStyle = {
  margin: '3%',
  maxWidth: '250px',
  height: '250px',
};

export const Imagenes = () => {
  const [images, setImages] = useState([]);

 
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3000/upload');
        setImages(response.data);
      } catch (error) {
        console.error('Error al cargar las imagenes', error);
      }
    }

    const eliminarImagen = async (_id) => {
      try {
        const response = await axios.delete(`http://localhost:3000/upload/${_id}`);
    
        if (response.status === 200) {
          fetchImages();
          console.log('Imagen eliminada correctamente');
          Swal.fire({
            icon: 'success',
            title: 'Imagen eliminada correctamente'
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Hubo un error'
          });
          console.log('Error al eliminar');
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    
  useEffect(() => {
    fetchImages();
  }, []);


  return (
    <>
    <div className='main'>

      <div className='section-title'>
        <h2>Archivos subidos:</h2>
      </div>
      <div style={divStyle}>
        {images.map((image, index) => (
          <div key={index} style={imageDivStyle}>
            <h4>Elemento: {index}</h4>
            <img src={`http://localhost:3000/uploads/${image.filename}`} alt={image.filename} style={imageStyle} />
            <p style={{color: 'black'}}>Fecha de carga: {new Date(image.date).toLocaleString()}</p>
            <button className='btn btn-success' onClick={()=> eliminarImagen(image._id)}>Eliminar</button>
          </div>
          
        ))}
      </div>
      
    </div>
    </>
  );
}


