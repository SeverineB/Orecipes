import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Recipe from 'src/components/Recipe';
import { getRecipeBySlug } from 'src/selectors/recipes';

const mapStateToProps = (state, ownProps) => ({
  recipe: getRecipeBySlug(state, ownProps.match.params.slug),
});

const mapDispatchToProps = {};

const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recipe);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
