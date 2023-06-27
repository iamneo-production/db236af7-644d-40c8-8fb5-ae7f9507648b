package com.examly.springapp.service.implementation;

import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.UserRepo;
import com.examly.springapp.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class UserServiceImpl implements IUserService, UserDetailsService {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    @Override
    public Integer saveUser(UserModel user) {
        user.setPassword(
                passwordEncoder.encode(user.getPassword())
        );
        return userRepo.save(user).getId();
    }

    @Override
    public Optional<UserModel> findByEmail(String email) throws UsernameNotFoundException {
        System.out.println(userRepo.findByEmail(email));
        return userRepo.findByEmail(email);
    }


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<UserModel> optUser = findByEmail(email);
        if(optUser.isEmpty())
            throw new UsernameNotFoundException("User not found");
        UserModel user = optUser.get();
        return new User(email, user.getPassword(), user.getUserRole().stream()
                .map((SimpleGrantedAuthority::new))
                .collect(Collectors.toList())
        );
    }
}
