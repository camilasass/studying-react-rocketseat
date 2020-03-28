import React from "react";

import './global.css';

import Routes from "./routes";

function App() {
  /* const [ counter, setCounter ] = useState(0); //retorna Array [valor, funcaoDeAtualizacaoDoValor]

  function increment() {
    setCounter(counter + 1);
  } */

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
