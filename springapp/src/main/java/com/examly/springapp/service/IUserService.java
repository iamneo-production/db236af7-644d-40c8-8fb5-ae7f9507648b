package com.examly.springapp.service;

import com.examly.springapp.model.UserModel;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Optional;

public interface IUserService {
    String saveUser(UserModel user);
    Optional<UserModel> findByEmail(String email) throws UsernameNotFoundException;
}
