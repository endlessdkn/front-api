// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const Categoria = () => {
//   const token = Cookies.get('token');
//   const [categorias, setCategorias] = useState([]);
//   const [nuevaCategoria, setNuevaCategoria] = useState({ categoria: '', descripcion: '' });

//   useEffect(() => {
//     const getCategorias = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/tienda/categoria/', {
//           headers: {
//             'Authorization': `Token ${token}`
//           }
//         });
//         setCategorias(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     getCategorias();
//   }, [token]);

//   const handleCrearCategoria = async event => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/tienda/categoria/', nuevaCategoria, {
//         headers: {
//           'Authorization': `Token ${token}`
//         }
//       });
//       setCategorias(prevCategorias => [...prevCategorias, response.data]);
//       setNuevaCategoria({ categoria: '', descripcion: '' });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleBorrarCategoria = async id => {
//     try {
//       await axios.delete(`http://127.0.0.1:8000/tienda/categoria/${id}/`, {
//         headers: {
//           'Authorization': `Token ${token}`
//         }
//       });
//       setCategorias(categorias.filter(categoria => categoria.id !== id));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Categorias</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Categoria</th>
//             <th>Descripcion</th>
//             <th>Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {categorias.map(categoria => (
//             <tr key={categoria.id}>
//               <td>{categoria.id}</td>
//               <td>{categoria.categoria}</td>
//               <td>{categoria.descripcion}</td>
//               <td>
//                 <button onClick={() => handleBorrarCategoria(categoria.id)}>Borrar</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <h3>Crear Categoria</h3>
//       <form onSubmit={handleCrearCategoria}>
//         <label>
//           Categoria:
//           <input type="text" value={nuevaCategoria.categoria} onChange={e => setNuevaCategoria({ ...nuevaCategoria, categoria: e.target.value })} />
//         </label>
//         <br />
//         <label>
//           Descripcion:
//           <input type="text" value={nuevaCategoria.descripcion} onChange={e => setNuevaCategoria({ ...nuevaCategoria, descripcion: e.target.value })} />
//         </label>
//         <br />
//         <button type="submit">Crear</button>
//       </form>
//     </div>
//   );
// };
    
// export default Categoria;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Categorias = () => {
  const token = Cookies.get('token');
  const [categorias, setCategorias] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({ Categoria: '', Descripcion: '', });

  useEffect(() => {
    const getCategorias = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/tienda/categoria/', {
          headers: {
            'Authorization': `Token ${token}`
          }
        });
        setCategorias(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCategorias();
  }, [token]);

  const handleCrearProducto = async event => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/tienda/categoria/', nuevoProducto, {
        headers: {
          'Authorization': `Token ${token}`
        }
      });
      setCategorias(prevCategorias => [...prevCategorias, response.data]);
      setNuevoProducto({ Categoria: '', Descripcion: '', });
    } catch (error) {
      console.error(error);
    }
  };

  const handleBorrarProducto = async id => {
    try {
      await axios.delete(`http://127.0.0.1:8000/tienda/categoria/${id}/`, {
        headers: {
          'Authorization': `Token ${token}`
        }
      });
      setCategorias(categorias.filter(categoria => categoria.id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Categorias</h1>
      <table>
        <thead>
          <tr>
            <th>Departemento</th>
            <th>Categoria</th>
            <th>Descripcion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map(categoria => (
            <tr key={categoria.id}>
              <td>{categoria.id}</td>
              <td>{categoria.Categoria}</td>
              <td>{categoria.Descripcion}</td>
              <td>
                <button onClick={() => handleBorrarProducto(categoria.id)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleCrearProducto}>
        <input
          type="text"
          value={nuevoProducto.Categoria}
          placeholder="Categoria"
          onChange={event => setNuevoProducto({ ...nuevoProducto, Categoria: event.target.value })}
        />
        <input
          type="text"
          value={nuevoProducto.item}
          placeholder="Descripcion"
          onChange={event => setNuevoProducto({ ...nuevoProducto, Descripcion: event.target.value })}
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};


export default Categorias;