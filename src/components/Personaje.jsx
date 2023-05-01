import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { unicoPersonaje } from "../Functions/funciones";
import '../Stylesheet/Personaje.css'

const Personaje = () => {
  const [personaje, setPersonaje] = useState(null);

  const params = useParams();

  useEffect(() => {
    unicoPersonaje(params.id, setPersonaje);
  }, [params.id]);

  return (
    <div className="Persona">
      {personaje !== null ? (
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>ESPECIE</th>
                <th>Genero</th>
                <th>Origen</th>
                <th>Foto</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>{params.id}</th>
                <td>{personaje.name}</td>
                <td>{personaje.species}</td>
                <td>{personaje.gender}</td>
                <td>{personaje.origin.name}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={personaje.image} alt={personaje.name} />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        "No hay personajes"
      )}

      {/* {personaje !== null ? (
        <div>
          <h2>Personaje con el ID {params.id}</h2>
          <p>Con el Nombre {personaje.name}</p>
          <img src={personaje.image} alt="" />
        </div>
      ) : (
        "No hay personajes"
      )} */}
    </div>
  );
};

export default Personaje;
