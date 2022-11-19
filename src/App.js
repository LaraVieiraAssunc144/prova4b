import { useState } from 'react';
import './App.css';

function App() {
  const [numero, setNumero] = useState();
  const [numeros, setNumeros] = useState([]);

  function adicionar() {
    let atual = [...numeros, numero];
    setNumeros(atual);
  }

  function inverta() {
    let atual = Inverter(numeros);
    setNumeros(atual);
  }

   function Inverter(vetor) {
    let atual = [];
    let cont = 0
    for (let i = vetor.length-1; i >= 0; i--){
        atual[cont] = vetor[i];
        cont++;
    }
    return atual;
}


  return (
    <div className="App">
      <header>
        <div>
          <h2> Função Adicionar Números </h2>
        </div>
        <div>
          <input type='number' value={numero} onChange={ e => setNumero(e.target.value) } />
          <button onClick={adicionar}> Adicione aqui </button>
          <div>
            <button onClick={inverta}> Inverter </button>
          </div>
        </div>
        <div>
          {
            numeros.map(item =>
              <p> {item} </p>
              )
          }
        </div>
      </header>
    </div>
  );
}

export default App;