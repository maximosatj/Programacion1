import React from 'react';
import imagenFondo from '../IMAGENES/box_img.png'; // Importa la imagen directamente
import './PaginaConFondo.css'

function PaginaConFondo() {
  return (
    <div className="fondo-personalizado">
      <img src={imagenFondo} alt="Imagen" />
      <h2>En barricas de roble duerme el tesoro,
el vino añejo, sublime y seductor.
Cada sorbo revela historias guardadas,
en cada botella hay magia desatada.</h2>

    </div>
  );
}

export default PaginaConFondo;