import React from 'react';
import { shallow } from 'enzyme';
import EnzymeDive from './EnzymeDive';

it('Enzyme .dive() with HOC', () => {
  const wrapper = shallow(<EnzymeDive />);
  wrapper.dive().setProps()

  console.log('====wrapper.debug()====', wrapper.debug());
  console.log('====wrapper.dive().debug()====', wrapper.dive().debug());
});

it('Enzyme .shallow() with HOC', () => {
  const wrapper = shallow(<EnzymeDive />);
  wrapper.shallow().setProps()

  console.log('====wrapper.debug()====', wrapper.debug());
  console.log('====wrapper.dive().debug()====', wrapper.shallow().debug());
});
