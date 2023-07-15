package com.examly.springapp.service;

import com.examly.springapp.model.GiftModel;

import java.util.List;

public interface IGiftService {
    String addGift(GiftModel data);
    String editGift(int giftId, GiftModel data);
    String deleteGift(int giftId);
    List<GiftModel> getGift(Integer id);
    List<GiftModel> getAllGifts();
}
