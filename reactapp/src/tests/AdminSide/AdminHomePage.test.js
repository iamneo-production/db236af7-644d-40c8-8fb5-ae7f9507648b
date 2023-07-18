import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../../components/Admin/HomePage/HomePage';
import { MemoryRouter } from 'react-router';

describe('AdminHome', () => {
  test('fe_react_adminHome', () => {
    render(<MemoryRouter><HomePage /></MemoryRouter>);

    const giftName = screen.getByTestId('giftName');
    const giftPrice = screen.getByTestId('giftPrice');

    expect(giftName).toBeTruthy();
    expect(giftPrice).toBeTruthy();

  });
});