import Button from '../Button';
import Dropdown from '../Dropdown';
import InputText from '../InputText/';
import './Form.css';

const Form = () => {
  const teams = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',
  ];

  const onSave = (event) => {
    event.preventDefault();
  };

  return (
    <section className='form'>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do funcionário</h2>
        <InputText required='true' label='Nome' placeholder='Digite seu nome' />
        <InputText
          required='true'
          label='Cargo'
          placeholder='Digite seu cargo'
        />
        <InputText label='Imagem' placeholder='Digite o endereço da imagem' />
        <Dropdown required='true' label='Time' items={teams} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
