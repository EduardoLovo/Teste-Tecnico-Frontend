import './App.scss';
import { bancoLocal } from './BancoLocal/BancoLocal';
import { Header } from './components/Header/Header';

function App() {
  // Cria localstorage
  if (!localStorage['viavarejo']) {
    bancoLocal.setBanco(bancoLocal.banco);
  }
  //-------------------------------------------


  return (
    <div className="App">
      <Header />
      <div className='container'>
        Olá Mundo
      </div>
    </div>
  );
}

export default App;
