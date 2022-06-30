import React from 'react';
import './App.scss';
import { bancoLocal } from './BancoLocal/BancoLocal';
import { Header } from './components/Header/Header';

function App() {
  // Cria localstorage
  if (!localStorage['viavarejo']) {
    bancoLocal.setBanco(bancoLocal.banco);
  }
  //-------------------------------------------

  // const [transacao, setTransacao] = (bancoLocal.getBanco())
  // console.log(transacao);

  const handleSubmit = (event) => {
    // event.preventDefault();

    // Obtém os dados dos inputs
    const tipo = event.target.tipo.value;
    const nome = event.target.nome.value;
    const valor = (event.target.tipo.value === 'Compra' ? -event.target.valor.value : +event.target.valor.value)

    // Constrói um payload com esses dados
    const payload = {
      tipo,
      nome,
      valor
    };

    const banco = bancoLocal.getBanco();
    banco.push(payload);
    bancoLocal.setBanco(banco);
  }


  // const [result, setResult] = useState([])


  const sum = bancoLocal.getBanco().map(item => item.valor).reduce((prev, curr) => prev + curr, 0);

  console.log(sum);



  return (
    <div className="App">
      <Header />

      <div className='container'>
        <section className='secInputs'>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="tipo">Tipo de transação</label>
              <select
                className='input'
                type="text"
                id="tipo"
                name="tipo"
              >
                <option>Compra</option>
                <option>Venda</option>
              </select>
            </div>

            <div>
              <label htmlFor="nome">Nome da mercadoria</label>
              <input
                className='input'
                type="text"
                id="nome"
                name="nome"
              />
            </div>

            <div>
              <label htmlFor="valor">Valor</label>
              <input
                className='input'
                placeholder='R$ 0,00'
                type="number"
                id="valor"
                name="valor"
              />
            </div>

            <button type='submit'>Adicionar transação</button>
          </form>
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
              {bancoLocal.getBanco().reverse().map((transacao, index) => (
                <div key={index}>
                  <div className='divResults'>
                    <p>{transacao.tipo === 'Compra' ? '+' : '-'} {transacao.nome}</p>
                    <label>R$ {Math.abs(transacao.valor)}</label>
                  </div>
                  <hr className='line' />
                </div>
              ))
              }
              <hr className='line' />
            </div>

            <div className='subtittle'>
              <label>Total</label>
              <label>R$ {sum}</label>
            </div>
            <div className='resutlFinal'>
              <p>[{sum >= 0 ? 'Lucro' : 'Prejuizo'}]</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
