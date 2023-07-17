import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Orders from '../../components/Admin/Orders/Orders';
import { MemoryRouter } from 'react-router';

describe('Orders', () => {
  test('fe_react_adminOrders', () => {
    render(<MemoryRouter><Orders /></MemoryRouter>);

    const customerName = screen.getByTestId('customerName');
    const deliveryPlace = screen.getByTestId('deliveryPlace');
    const quantity = screen.getByTestId('quantity');

    expect(customerName).toBeTruthy();
    expect(deliveryPlace).toBeTruthy();
    expect(quantity).toBeTruthy();
  });
});