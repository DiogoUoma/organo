import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/index.js';
import Time from './componentes/Time/index.js';
import Rodape from './componentes/Rodape/index.js';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A60157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06869',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'Ux e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '',
      corSecundaria: '',
    }
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

      <Rodape />
      
    </div>
  );
}

export default App;
