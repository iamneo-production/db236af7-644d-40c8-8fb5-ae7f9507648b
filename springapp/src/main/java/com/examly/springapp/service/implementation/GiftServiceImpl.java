package com.examly.springapp.service.implementation;

import com.examly.springapp.model.GiftModel;
import com.examly.springapp.repository.GiftRepo;
import com.examly.springapp.service.IGiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GiftServiceImpl implements IGiftService {

    @Autowired
    private GiftRepo giftRepo;
    @Override
    public String addGift(GiftModel data) {
        giftRepo.save(data);
        return "Gift added";
    }

    @Override
    public String editGift(int giftId, GiftModel data) {
        Optional<GiftModel> optGift = giftRepo.findById(giftId);
        if(optGift.isEmpty())
            return "Invalid Gift Id";
        GiftModel giftModel = optGift.get();
        giftModel.setGiftDetails(data.getGiftDetails());
        giftModel.setGiftName(data.getGiftName());
        giftModel.setGiftImageUrl(data.getGiftImageUrl());
        giftModel.setGiftPrice(data.getGiftPrice());
        giftRepo.save(giftModel);
        return "Gift edited";
    }

    @Override
    public String deleteGift(int giftId) {
        giftRepo.deleteById(giftId);
        return "Gift Deleted";
    }

    @Override
    public List<GiftModel> getGift(Integer id) {
        List<GiftModel> responseGift = new ArrayList<>();
        Optional<GiftModel> optGift = giftRepo.findById(id);
        if(optGift.isPresent()) {
            GiftModel gift = optGift.get();
            responseGift.add(gift);
            return responseGift;
        }
        return responseGift;
    }

    @Override
    public List<GiftModel> getAllGifts() {
        return giftRepo.findAll();
    }
}
