import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <nav>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        {isLoggedIn ? (
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
        ) : (
          <div>
            {' '}
            <NavLink className={css.link} to="/register">
              Register
            </NavLink>
            <NavLink className={css.link} to="/login">
              Log In
            </NavLink>
          </div>
        )}
      </nav>
      {isLoggedIn && <UserMenu />}
    </>
  );
};

export default Navigation;
