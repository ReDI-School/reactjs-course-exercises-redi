import React from 'react';
import { shallow } from 'enzyme';
import BookDetails from './BookDetails';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('BookDetails display book information', () => {
  //given
  const bookDetails = shallow(<BookDetails />);

  //then
  expect(bookDetails.find('#bookId').text()).toBe('32156');
  expect(bookDetails.find('.title').text()).toBe('JavaScript : The Good Parts');
  expect(bookDetails.find('.name').text()).toBe('Douglas Crockford');

});
