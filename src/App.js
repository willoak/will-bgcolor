import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

function App() {
  
  const[mudar,setMudar] = useState(100000);
  const[mudar2,setMudar2] = useState(0);
  const[mudar3,setMudar3] = useState(0);
  const[mudardeg,setMudardeg] = useState(0);
  const[corhex,setCorhex] = useState(0);

  const btnClicar = () => {
    setInterval(() => {
      setMudardeg( Math.floor(Math.random() * (180 - 0) + 0 ) );
      setCorhex( gerarHex() );
    }, 2000);
  }

  const gerarHex = () => {
    const hex = [1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f"];
    let   cor = "";
    for(let i = 1; i <= 6; i++) {
      cor += hex[ Math.floor( Math.random() * 16 ) ];
    }
    return cor;
  }

  const Body = styled.div` 
    width: 100vw;
    height: 100vh;
    /*background-image: linear-gradient(${mudardeg}deg, #${corhex}, #${mudar});*/
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Box = styled.div`
    width: 250px;
    background: #fff;
    padding: 20px 10px;
    border-radius: 5px;
    text-align:center;
    box-shadow: 2px 2px 7px #999;
    transition: background 1s ease-in;  
  `;
  return (
    <div className="bg" style={ {backgroundColor: `#${corhex}` } }>
      <Body>
        <Box>
          <p>mudar a cor do fundo:</p> 
          <button onClick={btnClicar}>Clique aqui</button>
        </Box>
      </Body>
    </div>
  );
}

export default App;
