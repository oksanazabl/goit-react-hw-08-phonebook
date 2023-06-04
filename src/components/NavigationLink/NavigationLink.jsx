import { NavLink } from 'react-router-dom';
import css from './NavigationLink.module.css'

const NavigationLink = () => {
  return (
    < >
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </ >
  );
};

export default NavigationLink;