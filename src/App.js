import { useState } from 'react';
import Banner from './Components/Banner';
import Form from './Components/Form';

const App = () => {
  const [employees, setEmployees] = useState([]);

  const onCreateEmployeeAdded = (employee) => {
    console.log(employee);
    setEmployees([...employees, employee]);
  };

  return (
    <div className='App'>
      <Banner />
      <Form onCreateEmployee={(employee) => onCreateEmployeeAdded(employee)} />
    </div>
  );
};

export default App;
