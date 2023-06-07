import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Home.js";
import Atividade1 from './Letreiro-data-hora';
import Atividade2 from './Contador.js';
import Atividade3 from './Galeria.js';
import Atividade4 from './ListaEscultura.js';
import Atividade5 from './Calculadora.js';
import Atividade6 from './JogoMemoria.js';

export default function MinhasRotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Atv01" element={<Atividade1 />} />
                <Route path="/Atv02" element={<Atividade2 />} />
                <Route path="/Atv03" element={<Atividade3 />} />
                <Route path="/Atv04" element={<Atividade4 />} />
                <Route path="/Atv05" element={<Atividade5 />} />
                <Route path="/Atv06" element={<Atividade6 />} />

            </Routes>
        </BrowserRouter>
    );
}