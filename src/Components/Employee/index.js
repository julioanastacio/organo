import { AiFillCloseCircle } from 'react-icons/ai';
import './Employee.css';

const Employee = ({ name, image, role, backgroundColor, onDelete }) => {
  return (
    <div className='employee'>
      <AiFillCloseCircle size={25} className='delete' onClick={onDelete} />
      <div className='header' style={{ backgroundColor: backgroundColor }}>
        <img src={image} alt={name}></img>
      </div>
      <div className='footer'>
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};

export default Employee;
