import Item from './components/Item';
import Card from './components/Card';

const App = () => {
  return (
    <>
      <h1>Minha Aplicação com React</h1>
      <p>Eu sou um parágrafo</p>
      <ul style={{marginLeft: 0, padding:0}}>        
        <Item texto="Item 1" />
        <Item texto="Item 2" />
        <Item>Item 3</Item>
      </ul>
      <Card />      
    </>
  )
}

export default App;