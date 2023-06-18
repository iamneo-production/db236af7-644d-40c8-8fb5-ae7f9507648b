package com.examly.springapp.controller;


import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.Entity.OrderModel;
import com.examly.springapp.Repository.OrderRepo;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;



@RestController
public class OrderController {
	
	@Autowired
	OrderRepo orderRepo;
	
	@PostMapping("/user/addOrder")
	public String addOrder(OrderModel data) {
		orderRepo.save(data);

		return "Order added" ;
	}
	
	@GetMapping("/admin/getAllOrders")
	public List<OrderModel> viewOrder() {
		
		return orderRepo.findAll();
	}
	
	
	@PutMapping({"/user/editOrder/{orderId}","/admin/editOrder/{orderId}"})
	public String editOrder(OrderModel data,@PathVariable int orderId) {
		if(orderRepo.existsById(orderId)==true){
			orderRepo.save(data);
		}
		else{
			return "no such order";
		}
		return "Order edited";
	}
	
	@DeleteMapping({"/user/deleteOrder/{orderId}","/admin/deleteOrder/{orderId}"})
	public String deleteOrder(@PathVariable int themeId) {
		if(orderRepo.existsById(themeId)==true){
			orderRepo.deleteById(themeId);
		}
		return "Order deleted";
	}

}
