import { connect } from 'react-redux';

import Field from 'src/components/LoginForm/Field';
import { changeField } from 'src/actions/recipes';

const mapStateToProps = (state, ownProps) => {
  return ({
    // le component Field va recevoir la props value qui provient du state
    // et est modifiée par changeField selon si email ou password
    inputValue: state[ownProps.name],
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (newValue) => {
    /* console.log(`Container Field: je dispatch l'action changeField ${newValue}`); */
    const action = changeField(ownProps.name, newValue);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Field);
