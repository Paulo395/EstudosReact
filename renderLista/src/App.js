import './App.css';
import PercorrerLista from './components/percorrerLista';

function App() {

  const lista = ['Paulo', 'Oliveira', '23']

  return (
    <div style={{display: 'flex', flexDirection: 'column'}} >
      <h2>Renderização de Listas</h2>
      <PercorrerLista lista={lista} />
      {lista.length > 0 ? (<p>Tem algo</p>):(<p>Não tem</p>)}
    </div>
  );
}

export default App;
