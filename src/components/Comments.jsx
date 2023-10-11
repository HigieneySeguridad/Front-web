import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export const ComentarioConFoto = () => {
  const [comment, setComment] = useState('');
  const [photos, setPhotos] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePhotoInputChange = (event) => {
    // Aquí puedes manejar la lógica de carga de fotos y almacenarlas en el estado.
    const selectedPhotos = event.target.files;
    setPhotos(selectedPhotos);
  };

  return (
    <div className='comentario'>
      <TextField
        label="Escribe un comentario"
        fullWidth
        multiline
        rows={isDropdownOpen ? 4 : 1}
        value={comment}
        onChange={handleCommentChange}
      />
      <div>
        {photos.length > 0 && (
          <div>
            Fotos adjuntas:
            <ul>
              {photos.map((photo, index) => (
                <li key={index}>{photo.name}</li>
              ))}
            </ul>
          </div>
        )}
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="photo-input"
          multiple
          type="file"
          onChange={handlePhotoInputChange}
        />
        <label htmlFor="photo-input">
          <IconButton color="primary" component="span">
            <AddPhotoAlternateIcon />
          </IconButton>
          Adjuntar foto
        </label>
      </div>
      <Button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {isDropdownOpen ? 'Cerrar' : 'Abrir'} cuadro de texto
      </Button>
    </div>
  );
}

