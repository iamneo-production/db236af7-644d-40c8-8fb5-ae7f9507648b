package com.examly.springapp.repository;

import com.examly.springapp.model.GiftModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface GiftRepository extends JpaRepository<GiftModel,Integer> {
    GiftModel save(GiftModel giftModel);
    GiftModel findById(int id);
    void deleteById(int id);
    
}
