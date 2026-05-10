import React, { useEffect, useState } from 'react';

import { 
  containerStyle, 
  headerStyle, 
  labelStyle, 
  inputContainerStyle, 
  inputStyle, 
  buttonContainerStyle, 
  buttonStyle, 
  imageContainerStyle, 
  profileImageStyle ,
  regresarButtonStyle 
} from './styles'; // Asegúrate de que la ruta sea correcta


function UserProfile({ profile, setProfile, onSave, onBack }) {
  const defaultProfile = {
    image: '',
    username: 'null',
    email: 'null',
    profession: 'null',
    country: 'null',
    gender: 'null',
  };

  // Estado para manejar el perfil temporalmente
  const [temporaryProfile, setTemporaryProfile] = useState({ ...defaultProfile });

  // Si profile está vacío, usa el objeto por defecto
  useEffect(() => {
    setTemporaryProfile(profile && Object.keys(profile).length > 0 ? profile : defaultProfile);
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTemporaryProfile({ ...temporaryProfile, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTemporaryProfile({ ...temporaryProfile, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave(temporaryProfile); // Devuelve el perfil actualizado
  };

  const handleBack = () => {
    setTemporaryProfile(profile && Object.keys(profile).length > 0 ? profile : defaultProfile); // Restaura el perfil original
    onBack(); // Llama a la función para regresar
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Perfil de Usuario</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>  
        {temporaryProfile.image && (
          <div style={imageContainerStyle}>
            <img src={temporaryProfile.image} alt="Profile" style={profileImageStyle} />
          </div>
        )}
        
        {['username', 'email', 'profession', 'country', 'gender'].map((field, index) => (
          <div key={index} style={inputContainerStyle}>
            <label htmlFor={field} style={labelStyle}>
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>
            <input
              type="text"
              id={field}
              name={field}
              value={temporaryProfile[field]} // Muestra el valor temporal
              onChange={handleChange}
              style={inputStyle}
              placeholder={`Ingrese su ${field}`}
            />
          </div>
        ))}
        
        <div style={buttonContainerStyle}>
          <button 
            onClick={handleBack} // Llama a la función para regresar
            style={regresarButtonStyle}
          >
            Regresar
          </button>
          <button 
            onClick={handleSave} 
            style={buttonStyle}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#ffd700'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'gold'}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
  
}
export default UserProfile;
  /*
      llamada es :  <UserProfile profile={profile} setProfile={setProfile} />
      import es : import UserProfile from './UserProfile'; // Asegúrate de que la ruta sea correcta
  */