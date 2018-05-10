import React from 'react';
import { render } from 'enzyme';
import Icon from '../../src/icon';

describe('Icon', () => {
  it('Component should be render', () => {
    const wrapper = render(<Icon type="success" />);
    expect(wrapper).toMatchSnapshot();
  });
});
