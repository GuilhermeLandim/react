import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01">Atividade 1 - Data/hora e letreiro</Link>
                    </li>
                    <li>
                        <Link to="/Atv02">Atividade 2 - Contador de pessoas</Link>
                    </li>
                    <li>
                        <Link to="/Atv03">Atividade 3 - Galeria</Link>
                    </li>
                    <li>
                        <Link to="/Atv04">Atividade 4 - </Link>
                    </li>
                    <li>
                        <Link to="/Atv05">Atividade 5 - Calculadora</Link>
                    </li>
                    <li>
                        <Link to="/Atv06">Atividade 6 - Jogo da memória</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Home;