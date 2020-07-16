import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';
import {
  handleLogin,
  handleLogout,
  changeField,
  saveUser,
  deconnectUser,
} from 'src/actions/recipes';

const mapStateToProps = (state) => {
  return ({
    email: state.user.email,
    password: state.user.password,
    isLogged: state.user.isLogged,
    username: state.user.username,
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
  saveUser: () => {
    const action = saveUser();
    dispatch(action);
  },
  deconnectUser: () => {
    const action = deconnectUser();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
