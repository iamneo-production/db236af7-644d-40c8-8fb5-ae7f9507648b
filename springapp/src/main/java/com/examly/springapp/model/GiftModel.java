package com.examly.springapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GiftModel {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int giftId;
	private String giftName;
	private String giftImageUrl;
	private String giftDetails;
	private Double giftPrice;

	public int getGiftId() {
		return giftId;
	}

	public void setGiftId(int giftId) {
		this.giftId = giftId;
	}

	public String getGiftName() {
		return giftName;
	}

	public void setGiftName(String giftName) {
		this.giftName = giftName;
	}

	public String getGiftImageUrl() {
		return giftImageUrl;
	}

	public void setGiftImageUrl(String giftImageUrl) {
		this.giftImageUrl = giftImageUrl;
	}

	public String getGiftDetails() {
		return giftDetails;
	}

	public void setGiftDetails(String giftDetails) {
		this.giftDetails = giftDetails;
	}

	public Double getGiftPrice() {
		return giftPrice;
	}

	public void setGiftPrice(Double giftPrice) {
		this.giftPrice = giftPrice;
	}
}
