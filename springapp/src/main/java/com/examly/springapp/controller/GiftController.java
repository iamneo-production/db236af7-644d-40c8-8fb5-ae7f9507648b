package com.examly.springapp.controller;

import com.examly.springapp.model.GiftModel;
import com.examly.springapp.service.IGiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class GiftController {

    @Autowired
    private IGiftService giftService;
    @GetMapping("/gift")
    public ResponseEntity<List<GiftModel>> getGift(@RequestParam(required = false) Integer id)
    {
        if(id == null)
            return ResponseEntity.ok(giftService.getAllGifts());
        return ResponseEntity.ok(giftService.getGift(id));
    }
    @PostMapping("/addGift")
    public ResponseEntity<String> addGift(@RequestBody GiftModel data)
    {
        return ResponseEntity.ok(giftService.addGift(data));
    }
    @PutMapping("/editGift")
    public ResponseEntity<String> editGift(@RequestParam Integer giftId, @RequestBody GiftModel data)
    {
        return ResponseEntity.ok(giftService.editGift(giftId, data));
    }
    @DeleteMapping("/deleteGift/{giftId}")
    public ResponseEntity<String> deleteGift(@PathVariable int giftId)
    {
        return ResponseEntity.ok(giftService.deleteGift(giftId));
    }
}

