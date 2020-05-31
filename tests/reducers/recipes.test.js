// import de l'utilitaire d'assertion
import { should } from 'chai';

// on importe ce qu'on test
import recipesReducer, { initialState } from 'src/reducers/recipes';
import { saveRecipes } from 'src/actions/recipes';

// on doit executer should pour pouvoir s'en servir
should();

// on va regrouper nos tests par chapitres
// pour s'organiser et les voir correctement dans le terminal
// on passe 2 arguments à describe
// - le nom du chapitre : string
// - le contenu du chapitre : function

// pour se focaliser temporairement sur un chapitre on peut mettre describe.only() (au lieu de juste describe())
describe.only('reducer for recipes', () => {
  // je peux faire un sous chapitre
  describe('structure', () => {
    // qui contiendra des tests
    // it permet de décrire un test, on lui passe en argument
    // - le nom du test : string
    // - le contenu du test : une fonction de rappel qui contient l'assertion
    it('should be a function', () => {
      // on part de la cible / ce qu'on veut test = recipesReucer
      // on appelle should desssus (fonctionnerai de même avec expect) pour affirmer quelque chose à vérifier
      // on peut utiliser des mots fournis par chai pour la déco
      // https://www.chaijs.com/api/bdd/
      // on peut utliser les méthodes de chai pour vérifier des choses
      // par exemple ici a() correspond à un typeof
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
