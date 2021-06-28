import React, {useState} from 'react';

const useSelect = (stateInicial, opciones) => {
        //state del custom hook
        const [state, actualizarState] = useState('stateInicial');
        const SelectNoticias = () => (
            <select
                className="browser-default"
                value={state}
                onChange={e => actualizarState(e.target.value)}
            > 

            {/* vamos a recorrer el array de la API */}

                {opciones.map(opcion => (
                    <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                ))}
            </select>
        );

    return [state, SelectNoticias];

}
export default useSelect;