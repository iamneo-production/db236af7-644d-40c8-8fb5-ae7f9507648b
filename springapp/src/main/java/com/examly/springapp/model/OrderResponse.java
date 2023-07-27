package com.examly.springapp.model;

import lombok.*;

import java.util.*;

@Data
@AllArgsConstructor
public class OrderResponse {
	private int orderId;
	private String orderDescription;
	private List<ThemeModel> themes;
	private GiftModel gift;
	private Date orderDate;
	private Double orderPrice;
	private String orderAddress;
	private String orderPhone;
	private String orderEmail;

	public OrderResponse(int orderId, String orderDescription, List<ThemeModel> themes, GiftModel gift, Date orderDate,
			Double orderPrice, String orderAddress, String orderPhone, String orderEmail) {
		super();
		this.orderId = orderId;
		this.orderDescription = orderDescription;
		this.themes = themes;
		this.gift = gift;
		this.orderDate = orderDate;
		this.orderPrice = orderPrice;
		this.orderAddress = orderAddress;
		this.orderPhone = orderPhone;
		this.orderEmail = orderEmail;
	}
}
