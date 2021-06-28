import React from 'react';
import styles from './Formulario.module.css'; 
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';


const Formulario = ({guardarCategoria}) => {

    //USAMOS LA API
    const OPCIONES = [
        //el value es lo que lee la api y el label es lo que lee el usuario 
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'}
    ]

    //utilizar custom hook
    const [ categoria, SelectNoticias ] = useSelect('general',OPCIONES);

    //submit al form, pasar categoría a app.js - lo que pasa cuando el usuario da submit
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria)
    }




    return ( 
        <div className={`${styles.buscador} row`}> 
        {/* En este caso usamos esta sintaxis de comillas porque mezclamos código, un string que viene de row con codigo js para traer al otro css */}
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>

                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>

        </div>
     );
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}
 
export default Formulario;