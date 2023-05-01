import React, { useEffect, useState } from "react";
import { todosPersonajes } from "../Functions/funciones";
import '../Stylesheet/Inicio.css'

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);

  return (
    <div className="contenedormain">
      {personajes !== null
        ? personajes.map((personaje) => (
            <div key={personaje.id}>
              <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure>
                  <img src={personaje.image} className="" alt={personaje.name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{personaje.name}</h2>
                  <p>{personaje.gender}</p>
                  <div className="card-actions justify-end">
                  <a href={`/personaje/${personaje.id}`}><button className="btn btn-primary">Ver Mas...</button></a>
                  </div>
                </div>
              </div>
            </div>
          ))
        : "No hay Datos"}
          
        {/* {personajes !== null
        ? personajes.map((personaje) => (
            <div key={personaje.id}>
              <a href={/personaje/${personaje.id}}>{personaje.name}</a>
              <div className="w-24 rounded-xl">
                <figure>
                  <img src={personaje.image} alt="" />
                </figure>
              </div>
            </div>
          ))
        : "No hay Personajes"} */}
    </div>
  );
};

export default Inicio;
