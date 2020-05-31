// Tester la fonction getSlugByTitle
// en se basant sur l'exemple des tests du reducer
// vérifier qu'il s'agit d'une fonction
// vérifier qu'on retourne une string
// vérifier qu'on retourne une version slugifiée lorsqu'on l'execute en lui passant une string
// getSlugByTitle('COUCOU COMMENT ÇA Va') -> 'coucou-comment-ca-va'


import { should } from 'chai';

import { getSlugByTitle } from 'src/selectors/recipes';

should();

// .only permet de n'afficher que ce describe dans le terminal
// pour que ce soit plus clair
// on peut faire autant de describe que l'on souhaite pour chapitrer
// afin que ce soit plus clair
// describe.only('Selectors Recipes', () => {
describe('Selectors Recipes', () => {
  describe('getSlugByTitle', () => {
    describe('structure', () => {
      it('should be a function', () => {
        // on test la description de la fonction et pas la valeur de retour
        // sinon getSlugByTitle()
        getSlugByTitle.should.be.a('function');
      });
      it('should return a string', () => {
        // ici on veut tester la valeur retournée et si fonction attend un paramètre
        // on doit en mettre un ici aussi
        getSlugByTitle('').should.be.a('string');
      });
    });
    describe('execution', () => {
      /* it('should be a pending'); */
      // .skip permet de mettre un test de côté
      it('should return a slugify title', () => {
        // equal teste string et number -> comme ===
        // eql teste array et objets -> test en profondeur
        getSlugByTitle('Potionphiltre-de-confusion').should.equal('potion-philtre-de-confusion');
        getSlugByTitle('\'&@éè 123').should.equal('ee-123');
        getSlugByTitle('poulet_au_gingembre').should.equal('poulet-au-gingembre');
      });
    });
  });
});
