import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/containers/LoginForm/Field';
// import { useField } from './hooks';

import './style.css';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  /* isLogged, */
  loggedMessage,
  logged,
}) => {
  const handleSubmit = (evt) => {
    /* console.log('j\'appelle la function handleLogin'); */
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      {logged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!logged && (

        <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="email"
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
          />
          <button
            type="submit"
            className="login-form-button"
          >
            OK
          </button>
        </form>
      )}
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
 /*  logged: false, */
  loggedMessage: 'Vous êtes connecté',
};

export default LoginForm;
