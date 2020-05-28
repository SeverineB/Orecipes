import { connect } from 'react-redux';

import App from 'src/components/App';
import { fetchRecipes } from 'src/actions/recipes';

const mapStateToProps = null;

// grâce à mDTP je fourni une fonction au composant capable de dispatcher une action, émettre une intention
const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: () => {
    const action = fetchRecipes();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
