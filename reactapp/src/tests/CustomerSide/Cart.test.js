import { queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import Cart from '../../components/Customer/Cart/Cart';


describe('Cart', () => {
    
    render(<MemoryRouter><Cart /></MemoryRouter>)

    test('fe_react_customerCart', () => {
       const  giftName = screen.queryByTestId('giftName');
       const  giftPrice = screen.queryByTestId('giftPrice');
       const  quantity = screen.queryByTestId('quantity');
       const  totalPrice = screen.queryByTestId('totalPrice');
	   
	   expect(giftName).toBeTruthy();
       expect(giftPrice).toBeTruthy();
       expect(quantity).toBeTruthy();
       expect(totalPrice).toBeTruthy();
    })

})