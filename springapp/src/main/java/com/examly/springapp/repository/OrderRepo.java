package com.examly.springapp.repository;
import com.examly.springapp.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface OrderRepo extends JpaRepository<Order, Integer> {

    List<Order> findAllByOrderEmail(String email);

}
