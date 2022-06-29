import './App.scss';
import { bancoLocal } from './BancoLocal/BancoLocal';

function App() {
  // Cria localstorage
  if (!localStorage['viavarejo']) {
    bancoLocal.setBanco(bancoLocal.banco);
  }
  //-------------------------------------------


  return (
    <div className="App">
      <div className='container'>
        Olá Mundo
      </div>
    </div>
  );
}

export default App;
