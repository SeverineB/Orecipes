import { connect } from 'react-redux';

import Field from 'src/components/LoginForm/Field';
import { changeField } from 'src/actions/recipes';

const mapStateToProps = (state, ownProps) => {
  return ({
    value: state[ownProps.name],
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (newValue) => {
    /* console.log('je veux changer la valeur du champ'); */
    const action = changeField(ownProps.name, newValue);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Field);
