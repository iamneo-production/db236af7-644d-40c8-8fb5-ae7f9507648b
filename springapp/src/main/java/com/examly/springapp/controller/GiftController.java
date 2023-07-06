package com.examly.springapp.controller;


import com.examly.springapp.model.GiftModel;
import com.examly.springapp.repository.GiftRepo;
import com.examly.springapp.service.implementation.GiftServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/admin")



public class GiftController {
    
    @Autowired
    private GiftServiceImpl giftService;
    @GetMapping("/getGift")
    public ResponseEntity<List<GiftModel>> getGift()
    {
        return ResponseEntity.ok(giftService.getGift());
    }
    @PostMapping("/addGift")
    public ResponseEntity<String> addGift(@RequestBody GiftModel data)
    {
        return ResponseEntity.ok(giftService.addGift(data));
    }
    @PutMapping("/editGift")
    public ResponseEntity<String> editGift(@RequestParam int giftId, @RequestBody GiftModel data)
    {
        return ResponseEntity.ok(giftService.editGift(giftId, data));
    }
    @DeleteMapping("/deleteGift/{giftId}")
    public ResponseEntity<String> deleteGift(@PathVariable int giftId)
    {
        return ResponseEntity.ok(giftService.deleteGift(giftId));
    }    
}
