import React, { useEffect, useState } from 'react';

export default function Atividade1() {
    // LETREIRO    
    const [letraAtual, setLetraAtual] = useState(0);
    const frase = 'Venha estudar na Fatec! ';

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLetraAtual(letraAtual => (letraAtual + 1) % frase.length);
        }, 200);

        return () => clearInterval(intervalId);
    }, []);

    const letraAtualizada = frase.substring(letraAtual) + frase.substring(0, letraAtual);

  //DATA E HORA
    const [dataHora, setDataHora] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDataHora(new Date());
        }, 1000); 

        return () => clearInterval(intervalId);
    }, []);

    function formatarData(str) {
        let dataSplitted = str.split('/');
        let data = new Date(dataSplitted[2], dataSplitted[1], dataSplitted[0]);
        return data.toLocaleString([], {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    let date = new Date();
    let data = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
    const dataFormatada = formatarData(data);


    return (
        <div>
            <h3>Atividade 01 (08 –React –Aula 02)</h3>
            <h5>Letreiro:</h5>
            <p><h5>{letraAtualizada}</h5></p>
            <h5>Data e hora:</h5>
            <div>{dataFormatada}, {dataHora.toLocaleTimeString()}</div>
       
        </div>
    );
}
