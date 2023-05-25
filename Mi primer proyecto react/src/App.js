
import React from 'react'
import PaginaConFondo from './COMPONENTES/PaginaConFondo.js'
import { Card } from './COMPONENTES/Card.js'
import { Navbar } from './COMPONENTES/Navbar.js'
import { List } from './COMPONENTES/List.js'






export const App = () => {
  return (
    <div>
    <Navbar/>
    <PaginaConFondo/>
    <div className='row'>
          <div className='col'>
            <Card
             titulo ='Vino Rose'
             
             imagen='VinoRosado.jpeg'
            />
          </div>
          <div className='col'>
            <Card
             titulo ='Vino Blanco'
             
             imagen='VinoBlanco.jpeg'
            />
          </div>
          <div className='col'>
            <Card
             titulo ='Vino Tinto'
             
             imagen='VinoTinto.jpeg'
            />
          </div>
          <br></br>
          
      <div className='row'>
        <div className='col'>
          <List
            titulo ='Vino Rosado'
            caracteristica1 = ' Son vinos ligeros y refrescantes'
            caracteristica2 = ' Acidez que puede ser suave a media'
            caracteristica3 = 'Aromas  desde fresas, cerezas y frambuesas a cítricos, melón, apio y algunos toques florales'
            
          />   
        </div>
        <div className='col'>
          <List
            titulo ='Vino Blanco'
            caracteristica1 = 'Ligero'
            caracteristica2 = ' Conocidos por su acidez'
            caracteristica3 = 'Aromas florales y afrutados'
            
          /> 
        </div>
        <div className='col'>
          <List
            titulo ='Vino Tinto'
            caracteristica1 = 'Suave'
            caracteristica2 = ' Pueden beneficiarse del envejecimiento en barricas de roble para desarrollar sabores y aromas adicionales.'
            caracteristica3 = 'Aromas frutales que van desde frutas rojas como cerezas y fresas, hasta frutas negras como ciruelas y moras.'
            
          /> 
        </div>
      </div>
      </div>


      
    
    

</div>

  )
}

export default App


