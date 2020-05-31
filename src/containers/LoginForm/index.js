import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';
import {
  handleLogin,
  handleLogout,
  isLogged,
  changeField,
} from 'src/actions/recipes';

const mapStateToProps = (state) => {
  console.log(`Container LoginForm: j'affiche le state ${state.user.logged}`);
  // ici je dois récupérer les valeurs saisies
  return ({
    email: state.user.email,
    password: state.user.password,
    logged: state.user.logged,
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeField: () => {
    const action = changeField();
    dispatch(action);
  },
  handleLogin: () => {
    const action = handleLogin();
    dispatch(action);
  },
  handleLogout: () => {
    const action = handleLogout();
    dispatch(action);
  },
  isLogged: () => {
    const action = isLogged();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
