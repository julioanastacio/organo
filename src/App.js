import { useState } from 'react';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Team from './Components/Team';

const App = () => {
  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57c278',
      secondaryColor: '#d9f7ea',
    },
    {
      name: 'Front-End',
      primaryColor: '#82cffa',
      secondaryColor: '#e8f8ff',
    },
    {
      name: 'Data Science',
      primaryColor: '#a6d157',
      secondaryColor: '#f0f8e2',
    },
    {
      name: 'Devops',
      primaryColor: '#e06b69',
      secondaryColor: '#fde7e8',
    },
    {
      name: 'UX e Design',
      primaryColor: '#d86ebf',
      secondaryColor: '#fae9f5',
    },
    {
      name: 'Mobile',
      primaryColor: '#ffba05',
      secondaryColor: '#fff5d9',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#ff8a29',
      secondaryColor: '#ffeedf',
    },
  ];

  const [employees, setEmployees] = useState([]);

  const onCreateEmployeeAdded = (employee) => {
    setEmployees([...employees, employee]);
  };

  function deleteEmployee() {
    console.log('Colaborador deletado!');
  }

  return (
    <div className='App'>
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        onCreateEmployee={(employee) => onCreateEmployeeAdded(employee)}
      />

      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          employees={employees.filter(
            (employee) => employee.time === team.name,
          )}
          onDelete={deleteEmployee}
        />
      ))}

      <Footer />
    </div>
  );
};

export default App;
