import React, { useState } from 'react';
import './header.css';

export default function Header() {
    const [puntuacion, setPuntuacion] = useState(0);

    function sumaPuntos(){
        setPuntuacion(puntuacion + 1);
    }

    return (
        <>
            <div>
                <h3>Puntuación: {puntuacion}</h3> 
            </div>
        </>
    );
}
