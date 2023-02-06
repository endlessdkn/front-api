import React, { useState } from 'react';
import axios from 'axios';

// La función SignUp recibe un prop "onSignUp" que se utilizará
// para indicar que el usuario se ha registrado correctamente
function SignUp({ onSignUp }) {
  // Se crea un estado local para el email
  const [email, setEmail] = useState('');
  // Se crea un estado local para la contraseña
  const [password, setPassword] = useState('');
  // Se crea un estado local para el nombre
  const [name, setName] = useState('');

  // La función handleSubmit se ejecutará al hacer submit en el formulario
  const handleSubmit = async event => {
    // Se previene el comportamiento por defecto del formulario
    event.preventDefault();
    try {
      // Se hace una petición POST a la URL 'http://127.0.0.1:8000/users/create'
      // con los datos del usuario (email, password y name)
      const response = await axios.post('http://127.0.0.1:8000/users/create', {
        email,
        password,
        name
      });
      // Si la respuesta es un status 200 (OK)
      if (response.status === 200) {
        // Se ejecuta la función "onSignUp" pasándole un mensaje
        onSignUp('usuario creado con éxito');
      }
    } catch (error) {
      // Si hay un error, se muestra en la consola
      console.error(error);
    }
  };

  // Se devuelve un formulario con los campos para ingresar el nombre, email y password
  // y un botón para enviar los datos al servidor
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <br /><br />
      <label>
        Email:
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
      </label>
      <br /><br />
      <label>
        Password:
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <br />
      <p>Registre sus datos e inicie sesión</p>
      <br />
      <button type="submit">Crear cuenta</button>
    </form>
    </div>
  );
}

export default SignUp;