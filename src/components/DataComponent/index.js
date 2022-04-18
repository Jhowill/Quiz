import React, {useEffect} from 'react';
import data1 from '../../data/admQuestions'
import dataArtes from '../../data/artesQuestions'

export default function DataComponente ({route}){

    useEffect(() => {
    escolhaProva();
    sortRandomQuestions();
    } , [])


    const escolhaprova = route.params?.data


    function escolhaProva  ()  {
    
    if (escolhaprova == 'artes'){
        setData (data1);
                    
    }
    else { setData (dataArtes)}
            
}


    function sortRandomQuestions(){
     const arr = selectdata;
     //console.log('total de perguntas' + arr.length)
             //Código para ordenar o Array de forma aletória
             for (let i = 0; i < arr.length; i++) {
                 const j = Math.floor(Math.random() * (i + 1));
                 [arr[i], arr[j]] = [arr[j], arr[i]];
                 //console.log(j)
             }

             setNumbAleatorio(arr.slice(0,10));}
            
}