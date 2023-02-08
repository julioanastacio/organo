import { useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import InputText from '../InputText/';
import './Form.css';

const Form = (props) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const onSave = (event) => {
    event.preventDefault();
    props.onCreateEmployee({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  };

  return (
    <section className='form'>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do funcionário</h2>
        <InputText
          required='true'
          label='Nome'
          placeholder='Digite seu nome'
          value={nome}
          onChange={(value) => setNome(value)}
        />
        <InputText
          required='true'
          label='Cargo'
          placeholder='Digite seu cargo'
          value={cargo}
          onChange={(value) => setCargo(value)}
        />
        <InputText
          label='Imagem'
          placeholder='Digite o endereço da imagem'
          value={imagem}
          onChange={(value) => setImagem(value)}
        />
        <Dropdown
          required='true'
          label='Time'
          items={props.teams}
          value={time}
          onChange={(value) => setTime(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
