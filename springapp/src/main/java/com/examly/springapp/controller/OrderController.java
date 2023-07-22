package com.examly.springapp.controller;

import com.examly.springapp.model.*;
import com.examly.springapp.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
public class OrderController {

    @Autowired
    private IOrderService orderService;
    @GetMapping("/user/orderHistory")
    public ResponseEntity<List<OrderResponse>> showUserOrderHistory(Principal p)  {
        System.out.println(p.getName());
        return ResponseEntity.ok(orderService.orderHistory(p.getName()));
    }
    @GetMapping("/admin/order")
    public ResponseEntity<List<OrderResponse>> viewAllOrders(@RequestParam(required = false) Integer id) {
        if(id == null)
            return ResponseEntity.ok(orderService.viewAllOrders());
        return ResponseEntity.ok(orderService.viewOrder(id));
    }

    @DeleteMapping("/admin/deleteOrder/{orderId}")
    public ResponseEntity<String> deleteOrder(@PathVariable int orderId) {
        orderService.deleteOrder(orderId);
        return ResponseEntity.ok("order deleted");
    }
    @PostMapping("/user/addOrder")
    public ResponseEntity<String> addOrder(Principal p, @RequestBody Order data)
    {
        data.setOrderEmail(p.getName());
        return ResponseEntity.ok(orderService.addOrder(data));
    }
    @PutMapping("/user/editOrder")
    public ResponseEntity<String> editOrdere(Principal p,@RequestParam Integer orderId,@RequestBody Order data ){
        data.setOrderEmail(p.getName());
        return ResponseEntity.ok(orderService.editOrder(orderId,data));
    }
}