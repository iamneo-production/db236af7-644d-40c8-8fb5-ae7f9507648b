package com.examly.springapp.entity;


import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class OrderModel {
	
	@Id
	private int orderId;
	private String orderName;
	private String orderDescription;

	@OneToOne
	@JoinColumn(name = "themeId")
	private ThemeModel themeObj;

	@OneToOne
	@JoinColumn(name = "giftId")
	private GiftModel giftObj;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date orderDate;
	
	private int orderPrice;
	private String orderAddress;
	private String orderPhone;
	private String orderEmail;
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public String getOrderName() {
		return orderName;
	}
	public void setOrderName(String orderName) {
		this.orderName = orderName;
	}
	public String getOrderDescription() {
		return orderDescription;
	}
	public void setOrderDescription(String orderDescription) {
		this.orderDescription = orderDescription;
	}
	public ThemeModel getThemeObj() {
		return themeObj;
	}
	public void setThemeObj(ThemeModel themeObj) {
		this.themeObj = themeObj;
	}
	public GiftModel getGiftObj() {
		return giftObj;
	}
	public void setGiftObj(GiftModel giftObj) {
		this.giftObj = giftObj;
	}
	public Date getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}
	public int getOrderPrice() {
		return orderPrice;
	}
	public void setOrderPrice(int orderPrice) {
		this.orderPrice = orderPrice;
	}
	public String getOrderAddress() {
		return orderAddress;
	}
	public void setOrderAddress(String orderAddress) {
		this.orderAddress = orderAddress;
	}
	public String getOrderPhone() {
		return orderPhone;
	}
	public void setOrderPhone(String orderPhone) {
		this.orderPhone = orderPhone;
	}
	public String getOrderEmail() {
		return orderEmail;
	}
	public void setOrderEmail(String orderEmail) {
		this.orderEmail = orderEmail;
	}
	
	

}
