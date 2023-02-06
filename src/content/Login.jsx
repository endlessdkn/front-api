import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

function Login({ onLogin }) {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async event => {
  event.preventDefault();
  try {
  const response = await axios.post('http://127.0.0.1:8000/users/login', {
  email,
  password
  });
  if (response.status === 200) {
  Cookies.set('token', response.data.token);
  onLogin(response.data.token);
  }
  } catch (error) {
  console.error(error);
  }
  };

  return (
  <div>
    <form onSubmit={handleSubmit}>
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
    <p>Tambien puede crear un usuario nuevo en el Boton de Registrarse</p>
    <br />
    <button type="submit">Iniciar sesión</button>
    <br />
    </form>
  </div>
  
  );
}

export default Login;