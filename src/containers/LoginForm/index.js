import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';
import { handleLogin, handleLogout, changeField } from 'src/actions/recipes';

/* const mapStateToProps = (state) => {
}; */

const mapStateToProps = null;

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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
