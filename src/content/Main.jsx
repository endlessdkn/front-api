import React, { useState } from 'react';
import Productos from './Productos.jsx';
import Categoria from './Categoria.jsx';
import Cookies from 'js-cookie';

function Main({ onLogout }) {
    const token = Cookies.get('token');
    const [mostrarProductos, setMostrarProductos] = useState(true);
    const [mostrarCategorias, setMostrarCategorias] = useState(false);

    return (
        <div>
            <h3>Puede dar de alta un producto o crear una nuva categoria</h3>
            <br />
                Puede tambien:
            <br />
                <button onClick={onLogout}>Cerrar sesión</button>
            <br />
            <br />
            <button onClick={() => {
                setMostrarProductos(true); 
                setMostrarCategorias(false);
                }}>
            Mostrar Productos
            </button>
            <button onClick={() => {
                setMostrarProductos(false); 
                setMostrarCategorias(true);
                }}>
            Mostrar Categorias
            </button>
            <br />
                {mostrarProductos && <Productos token={token.token} />}
                {mostrarCategorias && <Categoria token={token.token} />}
            </div>
    );
}

export default Main;