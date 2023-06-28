package com.examly.springapp.controller;

import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")

public class UserController {

    @Autowired
    private UserRepository userRepository;


    @PostMapping
    public UserModel addUser(@RequestBody UserModel data) {
        return userRepository.save(data);
    }

    @GetMapping("/{UserId}")
    public UserModel getUser(@PathVariable("UserId") Integer UserId) {
        return userRepository.findById(UserId).orElse(null);
    }

    @PutMapping("/{UserId}")
    public UserModel editUser(@PathVariable("UserId") Integer UserId, @RequestBody UserModel data) {
        UserModel existingUser = userRepository.findById(UserId).orElse(null);
        if (existingUser != null) {
            existingUser.setEmail(data.getEmail());
            existingUser.setPassword(data.getPassword());
            existingUser.setUsername(data.getUsername());
            existingUser.setMobileNumber(data.getMobileNumber());
            existingUser.setUserRole(data.getUserRole());
            return userRepository.save(existingUser);
        }
        return null;
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable("UserId") Integer UserId) {
        userRepository.deleteById(UserId);
    }
    
}
