import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Recipe from 'src/components/Recipe';
import { getRecipeBySlug } from 'src/selectors/recipes';

const mapStateToProps = (state, ownProps) => ({
  // je dois passer LA bonne recette
  // trouver dans la liste de recette celle qui a le slug actif
  // j'ai besoin de 2 choses 
  // - la liste de recette (dans mon state)
  // - du slug (react-router-dom va me donner un moyen de la connaitre)
  recipe: getRecipeBySlug(state, ownProps.match.params.slug),
});

const mapDispatchToProps = {};

// grâce au hoc connect j'enrichis mon composant en props liées au state
const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recipe);

// grâce au hoc withRouter j'enrichis mon container en props liées à l'url
const containerWithRouter = withRouter(container);

export default containerWithRouter;
