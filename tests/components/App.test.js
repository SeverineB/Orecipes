/**
 * Import
 */
import React from 'react';
import { shallow } from 'enzyme';
import { should } from 'chai';

// Components
import App from 'src/components/App';

// préparation de should
should();

describe.only('Série de tests : App', () => {
  // shallow ne rend pas les enfants des composants
  // il va juste voir s'ils sont bien présents
  // mais pas si dans Nav il y a tant de liens etc...
  const comp = shallow(<App />);
  it('should have prop className', () => {
    comp.props().should.have.property('className');
  });

  // un test suspendu avec skip
  it.skip('should not have prop id', () => {
    comp.props().should.not.have.property('id');
  });
});
