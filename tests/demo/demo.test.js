import { expect, should } from 'chai';

const value = 2;
const sum = (a, b) => a + b;

// == Avec should
should();

describe('Série de tests : sum()', () => {
  it('should be a function', () => {
    sum.should.be.a('function');
  });

  it('should return sum of parameters', () => {
    sum(1, 2).should.be.equal(3);
    sum(-1, 1).should.be.equal(0);
  });

  it('should ...');
});

describe('Série de tests : variable', () => {
  it('should pass', () => {
    expect(value).to.be.equal(2);
  });

  it('should not pass', () => {

    expect(false).to.be.equal(true);
  });

  describe('Sous chapitre - pending', () => {
    it('test pending');
    it.skip('should skip this test', () => {
      // code
      expect(true).to.be.equal(true);
    });
  });
});
