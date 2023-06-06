import { useDispatch } from 'react-redux';

import css from './RegistForm.module.css';
import { register } from 'redux/auth/operations';

const RegistForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.form} autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          name="name"
          required
          placeholder="Denys iElkin"
          minLength={3}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          required
          placeholder="hvoarang@gmail.com"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          minLength={7}
          required
          placeholder="*******"
        />
      </label>
      <button type="submit">Register</button>
    </div>
  );
};

export default RegistForm;