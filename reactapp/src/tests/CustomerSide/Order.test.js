import { queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import Order from '../../components/Customer/Order/Order';


describe('HomePage', () => {
    
    render(<MemoryRouter><Order /></MemoryRouter>)

    test('fe_react_customerOrder', () => {
       const  orderId = screen.queryByTestId('orderId');
       const  giftName = screen.queryByTestId('giftName');
	   
	   expect(orderId).toBeTruthy();
       expect(giftName).toBeTruthy();
    })

})