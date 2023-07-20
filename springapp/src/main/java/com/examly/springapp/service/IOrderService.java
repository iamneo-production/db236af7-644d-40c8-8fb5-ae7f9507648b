package com.examly.springapp.service;

import com.examly.springapp.model.Order;
import com.examly.springapp.model.OrderResponse;
import java.util.List;

public interface IOrderService {
    String addOrder(Order data);
    List<OrderResponse> orderHistory(String email) ;
    List<OrderResponse> viewAllOrders() ;
    List<OrderResponse> viewOrder(int orderId) ;
    void deleteOrder(int orderId);
    List<Order> findAllByOrderEmail(String email);
    String editOrder(int orderId,Order data);
}
