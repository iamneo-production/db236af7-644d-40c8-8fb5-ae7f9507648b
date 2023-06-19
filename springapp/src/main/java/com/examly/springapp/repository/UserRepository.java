package com.examly.springapp.repository;

import com.examly.springapp.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository


public interface UserRepository extends JpaRepository<UserModel,Integer> {

    UserModel save(UserModel userModel);
    UserModel findById(Integer id);
    void deleteById(Integer id);
    
    
}
