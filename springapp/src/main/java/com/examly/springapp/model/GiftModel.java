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
    private Integer giftQuantity;
}
