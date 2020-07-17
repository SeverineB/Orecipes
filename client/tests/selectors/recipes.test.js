import { should } from 'chai';

import { getSlugByTitle } from 'src/selectors/recipes';

should();

describe('Selectors Recipes', () => {
  describe('getSlugByTitle', () => {
    describe('structure', () => {
      it('should be a function', () => {
        getSlugByTitle.should.be.a('function');
      });
      it('should return a string', () => {
        getSlugByTitle('').should.be.a('string');
      });
    });
    describe('execution', () => {
      it('should return a slugify title', () => {
        getSlugByTitle('Potionphiltre-de-confusion').should.equal('potion-philtre-de-confusion');
        getSlugByTitle('\'&@éè 123').should.equal('ee-123');
        getSlugByTitle('poulet_au_gingembre').should.equal('poulet-au-gingembre');
      });
    });
  });
});
