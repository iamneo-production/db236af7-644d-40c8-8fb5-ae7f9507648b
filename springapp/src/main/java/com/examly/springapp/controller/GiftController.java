package com.examly.springapp.controller;


import com.examly.springapp.model.GiftModel;
import com.examly.springapp.repository.GiftRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping()



public class GiftController {
    
    @Autowired
    private GiftRepository giftRepository;

    @PostMapping
    public GiftModel addGift(@RequestBody GiftModel data) {
        return giftRepository.save(data);
    }

    @GetMapping("/{giftId}")
    public GiftModel getGift(@PathVariable("giftId") int giftId) {
        return giftRepository.findById(giftId).orElse(null);
    }

    @PutMapping("/{giftId}")
    public GiftModel editGift(@PathVariable("giftId") int giftId, @RequestBody GiftModel data) {
        GiftModel existingGift = giftRepository.findById(giftId).orElse(null);
        if (existingGift != null) {
            existingGift.setGiftName(data.getGiftName());
            existingGift.setGiftImageUrl(data.getGiftImageUrl());
            existingGift.setGiftDetails(data.getGiftDetails());
            existingGift.setGiftPrice(data.getGiftPrice());
            return giftRepository.save(existingGift);
        }
        return null;
    }

    @DeleteMapping("/{giftId}")
    public void deleteGift(@PathVariable("giftId") int giftId) {
        giftRepository.deleteById(giftId);
    }

    
}
