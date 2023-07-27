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
}
