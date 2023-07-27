package com.examly.springapp.controller;

import com.examly.springapp.model.*;
import com.examly.springapp.service.IUserService;
import com.examly.springapp.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.authentication.*;
import org.springframework.security.core.*;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<String> saveUser(@RequestBody UserModel data)
    {
        Set<String> role = new HashSet<String>();
        role.add("user");
        data.setUserRole(role);
        String result = userService.saveUser(data);
        if(result != null)
            return ResponseEntity.ok(result);
        else
            return new ResponseEntity<String>(new String("Duplicate Entry"),HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/user/login")
    public ResponseEntity<LoginResponse> userLogin(@RequestBody LoginModel data)
    {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                data.getEmail(), data.getPassword()));
        return ResponseEntity.ok(new LoginResponse(jwtUtil.generateToken(data.getEmail())));
    }

    @RequestMapping("/isAdminPresent")
    public ResponseEntity<Boolean> isAdminPresent(Authentication authentication){
        for (GrantedAuthority role : authentication.getAuthorities())
        {
            if(role.getAuthority().equals("admin"))
                return ResponseEntity.ok(true);
        }
        return ResponseEntity.ok(false);
    }
    
    @RequestMapping("/isUserPresent")
    public ResponseEntity<Boolean> isUserPresent(){
        return ResponseEntity.ok(true);
    }

    @PostMapping("/admin/signup")
    public ResponseEntity<String> saveAdmin(@RequestBody UserModel data)
    {
        Set<String> role = new HashSet<String>();
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
