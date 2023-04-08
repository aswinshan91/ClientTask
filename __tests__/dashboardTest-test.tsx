import React from 'react';
import renderer from 'react-test-renderer';
import DashBoardTest from '../src/Dashboard/dashboardTest';

jest.setTimeout(15000);
/* added render for DashBoardTesting for UI Check */
it('renders correctly', () => {
  const tree = renderer.create(<DashBoardTest />).toJSON();
  expect(tree).toMatchSnapshot();
});