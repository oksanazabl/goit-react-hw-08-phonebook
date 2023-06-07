import { useDispatch, useSelector } from 'react-redux';
import css from './LoginForm.module.css';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();
  const errorLogin = useSelector(state => state.error);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <>
      {errorLogin && <div>Error login</div>}
      <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
        <label className={css.label}>
          E-mail
          <input className={css.input} type="email" name="email" required />
        </label>
        <label className={css.label}>
          Password
          <input
            className={css.input}
            type="password"
            name="password"
            required
          />
        </label>
        <button className={css.btn} type="submit">
          Log In
        </button>
      </form>
    </>
  );
};

export default LoginForm;
