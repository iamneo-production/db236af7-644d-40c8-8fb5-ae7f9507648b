import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddGift from '../../components/Admin/AddGift/AddGift';
import { MemoryRouter } from 'react-router';

describe('Gift', () => {
  test('fe_react_adminAddGift', () => {
    render(<MemoryRouter><AddGift /></MemoryRouter>);

    const giftName = screen.getByTestId('giftName');
    const giftPrice = screen.getByTestId('giftPrice');
    const imageUrl = screen.getByTestId('imageUrl');

    expect(giftName).toBeTruthy();
    expect(giftPrice).toBeTruthy();
    expect(imageUrl).toBeTruthy();
  });
});