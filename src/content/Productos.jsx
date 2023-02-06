import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Productos = () => {
  const token = Cookies.get('token');
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({ departamento: '', item: '', precio: '', cant: '' });

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/tienda/producto/', {
          headers: {
            'Authorization': `Token ${token}`
          }
        });
        setProductos(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProductos();
  }, [token]);

  const handleCrearProducto = async event => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/tienda/producto/', nuevoProducto, {
        headers: {
          'Authorization': `Token ${token}`
        }
      });
      setProductos(prevProductos => [...prevProductos, response.data]);
      setNuevoProducto({ departamento: '', item: '', precio: '', cant: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const handleBorrarProducto = async id => {
    try {
      await axios.delete(`http://127.0.0.1:8000/tienda/producto/${id}/`, {
        headers: {
          'Authorization': `Token ${token}`
        }
      });
      setProductos(productos.filter(producto => producto.id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Productos</h1>
      <table>
        <thead>
          <tr>
            <th>Dep.</th>
            <th>Item</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Autor - Correo</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <tr key={producto.id}>
              <td>{producto.departamento}</td>
              <td>{producto.item}</td>
              <td>{producto.precio}</td>
              <td>{producto.cant}</td>
              <td>{producto.usuario}</td>
              <td>{producto.creado}</td>
              <td>
                <button onClick={() => handleBorrarProducto(producto.id)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleCrearProducto}>
        <input
          type="text"
          value={nuevoProducto.departamento}
          placeholder="Departamento"
          onChange={event => setNuevoProducto({ ...nuevoProducto, departamento: event.target.value })}
        />
        <input
          type="text"
          value={nuevoProducto.item}
          placeholder="Item"
          onChange={event => setNuevoProducto({ ...nuevoProducto, item: event.target.value })}
        />
        <input
          type="text"
          value={nuevoProducto.precio}
          placeholder="Precio"
          onChange={event => setNuevoProducto({ ...nuevoProducto, precio: event.target.value })}
        />
        <input
          type="text"
          value={nuevoProducto.cant}
          placeholder="Cantidad"
          onChange={event => setNuevoProducto({ ...nuevoProducto, cant: event.target.value })}
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};


export default Productos;