import { useState } from 'react';
import Button from '../Button';

const Card = () => {

  const [valor, setValor] = useState(0);

  function adicionar() {
    setValor(valor + 1)
  }
  function remover() {
    setValor(valor - 1)
  }

  return (
    <div className="card">
      <div className="card-header">
        Meu primeiro card
      </div>
      <div className="card-body">
        {/* <h5 class="card-title">Special title treatment</h5> */}
        <Button 
          onClick={adicionar} 
          class="btn btn-success" 
          type="button">
            adicionar
        </Button>
        <button 
          type="button" 
          className="btn btn-success" 
          onClick={adicionar}>
            Adicionar
          </button>
        <Button 
          onClick={remover} 
          class="btn btn-danger" 
          type="button">
            remover
        </Button>
        <button 
          type="button" 
          className="btn btn-danger"
          onClick={remover}>
            Remover
        </button>
        <p className="card-text">{valor}</p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  )
}

export default Card;