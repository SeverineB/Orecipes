import { should } from 'chai';

import recipesReducer, { initialState } from 'src/reducers/recipes';
import { saveRecipes } from 'src/actions/recipes';

should();

describe.only('reducer for recipes', () => {

  describe('structure', () => {

    it('should be a function', () => {
      recipesReducer.should.be.a('function');
    });

    it('should return initial state when called without arguments', () => {
      recipesReducer().should.be.an('object');
      recipesReducer().should.be.eql(initialState);
    });
  });

  describe('with actions', () => {
    it('should return a modified state when receive SAVE_RECIPES', () => {
      const stateDeDepartBidon = { loading: false, list: [] };
      const newRecipesBidon = [{ a: 123 }, { b: 456 }];
      const action = saveRecipes(newRecipesBidon);
      recipesReducer(stateDeDepartBidon, action).should.be.eql({
        loading: false,
        list: newRecipesBidon,
      });
    });
  });
});
