import React, { useState, useEffect } from 'react';
import "./body.css";

export default function Body() {
    const [frutas, setFrutas] = useState(["🍑", "🍑", "🍌", "🍌", "🥥", "🥥", "🍋", "🍋", "🍒", "🍒", "🍇", "🍇", "🥭", "🥭", "🥝", "🥝"]);

    // Mezcla las frutas aleatoriamente
    useEffect(() => {
        setFrutas(prevFrutas => {
            const mezcladas = [...prevFrutas];
            for (let i = mezcladas.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [mezcladas[i], mezcladas[j]] = [mezcladas[j], mezcladas[i]];
            }
            return mezcladas;
        });
    }, []);

    return (
        <table className="tabla">
            <tbody>
                {Array.from({ length: 4 }).map((_, rowIndex) => (
                    <tr key={rowIndex}>
                        {frutas.slice(rowIndex * 4, rowIndex * 4 + 4).map((fruta, colIndex) => (
                            <td key={colIndex}>{fruta}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
