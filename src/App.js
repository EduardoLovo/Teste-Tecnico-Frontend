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
        <section className='secInputs'>
          <div>
            <label>Tipo de transação</label>
            <select className='input'>
              <option>Compra</option>
              <option>Venda</option>
            </select>
          </div>

          <div>
            <label>Nome da mercadoria</label>
            <input className='input' />
          </div>

          <div>
            <label>Valor</label>
            <input className='input' placeholder='R$ 0,00' />
          </div>

          <button>Adicionar transação</button>
        </section>

        <hr className='lineCenter' />

        <section className='secTransacoes'>
          <h2>Extrato de transações</h2>

          <div className='contentDiv'>
            <div className='subtittle'>
              <label>Mercadoria</label>
              <label>Valor</label>
            </div>

            <hr className='line' />

            <div >
              <div className='divResults'>
                <p>+ Lorem ipsum</p>
                <label>R$ 12.999,99</label>
              </div>
              <hr className='line' />
              <div className='divResults'>
                <p>- Lorem ipsum</p>
                <label>R$ 99,99</label>
              </div>
              <hr className='line' />
              <div className='divResults'>
                <p>+ Lorem ipsum</p>
                <label>R$ 9,99</label>
              </div>





              <hr className='line' />
              <hr className='line' />
            </div>

            <div className='subtittle'>
              <label>Total</label>
              <label>R$ 1212</label>
            </div>
            <div className='resutlFinal'>
              <p>[Lucro]</p>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}

export default App;
