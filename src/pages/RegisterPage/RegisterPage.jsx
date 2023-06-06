import RegistForm from 'components/RegistForm';
import { NavLink } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      <h2>Registration</h2>
      <RegistForm />
      <p className="TextAuth">
        Already registered? <NavLink to={'/login'}>Sign in</NavLink>
      </p>
    </div>
  );
};

export default RegisterPage;