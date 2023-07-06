package com.examly.springapp.controller;

import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.service.IUserService;
import com.examly.springapp.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.HashSet;
import java.util.Set;

@RestController
public class AuthController {

    @Autowired
    private IUserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtil jwtUtil;
    @PostMapping("/user/signup")
    ResponseEntity<String> saveUser(@RequestBody UserModel user)
    {
        Set<String> role = new HashSet<>();
        role.add("user");
        user.setUserRole(role);
        return ResponseEntity.ok("User "+userService.saveUser(user)+" saved");
    }
    @PostMapping("/user/login")
    public ResponseEntity<String> userLogin(@RequestBody LoginModel data)
    {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                data.getEmail(), data.getPassword()));
        return ResponseEntity.ok(jwtUtil.generateToken(data.getEmail()));
    }

    @PostMapping("/admin/signup")
    public ResponseEntity<String> saveAdmin(@RequestBody UserModel data)
    {
        Set<String> role = new HashSet<>();
        role.add("user");
        role.add("admin");
        data.setUserRole(role);
        return ResponseEntity.ok( "Admin '"+userService.saveUser(data)+"' saved");
    }

    @PostMapping("/user/dashboard")
    public ResponseEntity<String>  userDashboard(Principal p)
    {
        return ResponseEntity.ok("Hi "+p.getName());
    }
    @PostMapping("/admin/dashboard")
    public ResponseEntity<String> adminDashboard(Principal p)
    {
        return ResponseEntity.ok("Welcome admin "+p.getName());
    }

}
