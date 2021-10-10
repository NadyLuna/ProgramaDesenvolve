import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Container } from '../../components/container';

function App() {
  return (
    <div className="App">
      
      <Container>

         <h1>Título da Página</h1>
         <img src={logo} className="App-logo" alt="logo" />

      </Container>

     
    </div>
  );
}

export default App;
