import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';



function App() {

  //definir la categoría y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  //Para que realice el cambio y vuelva a cargar el componente

  useEffect(() => {
    const consultarAPI = async () => {
      const url =  `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=51673a9c2ce744c4a26cefc94010ca7c`; 

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);
  return (
   <Fragment>
     <Header 
        titulo='Buscador de Noticias'
     
     />
     <div className='container white'> 
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias 
          noticias={noticias}
        />
     </div>
   </Fragment>
  );
}

export default App;
