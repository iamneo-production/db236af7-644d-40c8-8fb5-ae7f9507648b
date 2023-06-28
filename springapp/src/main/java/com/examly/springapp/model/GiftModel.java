package com.examly.springapp.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;



@Entity

public class GiftModel {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int giftId;
    private String giftName;
    private String giftImageUrl;
    private String giftDetails;
    private int giftPrice;

    public GiftModel(int giftId, String giftName, String giftImageUrl, String giftDetails, int giftPrice) {
        this.giftId = giftId;
        this.giftName = giftName;
        this.giftImageUrl = giftImageUrl;
        this.giftDetails = giftDetails;
        this.giftPrice = giftPrice;
    }


    public GiftModel() {
    }


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

    public int getGiftPrice() {
        return giftPrice;
    }

    public void setGiftPrice(int giftPrice) {
        this.giftPrice = giftPrice;
    }

    @Override
    public String toString() {
        return "GiftModel{" +
                "giftId=" + giftId +
                ", giftName='" + giftName + '\'' +
                ", giftImageUrl='" + giftImageUrl + '\'' +
                ", giftDetails='" + giftDetails + '\'' +
                ", giftPrice=" + giftPrice +
                '}';
    }

    
}
