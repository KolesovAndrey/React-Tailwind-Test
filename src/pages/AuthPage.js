import { useState } from 'react';

import styles from './AuthPage.module.css';
import Button from '../components/UI/Button';

const AuthPage = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [emailInputTouched, setEmailInputTouched] = useState(false);

  const [enteredPassword, setEnteredPassword] = useState('');

  const emailIsValid =
    enteredEmail.trim().length > 0 && enteredEmail.includes('@');

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEmailInputTouched(true);

    if (!emailIsValid) {
      setEnteredEmailIsValid(false);
      return;
    }
    setEnteredEmailIsValid(true);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const emailInputIsInvalid = !emailIsValid && emailInputTouched;

  const emailInputStyles = emailInputIsInvalid ? styles.invalid : '';

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <h1>Войдите в аккаунт или зарегистрируйтесь</h1>
      <div className={styles.control}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="Example@gmail.com"
          value={enteredEmail}
          onChange={emailChangeHandler}
          style={{ emailInputStyles }}
        />
      </div>
      {emailInputIsInvalid && <p>Please enter a valid email address!</p>}
      <div className={styles.control}>
        <label htmlFor="password">Пароль:</label>
        <input
          id="password"
          type="password"
          placeholder="Минимум 10 символов"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
      </div>
      <Button text="Вход" type="submit" />
    </form>
  );
};

export default AuthPage;
