package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.entity.AdminModel;
import com.examly.springapp.entity.LoginModel;
import com.examly.springapp.entity.UserModel;
import com.examly.springapp.repository.AdminRepo;
import com.examly.springapp.repository.UserRepo;


@RestController
public class AuthController {
	
	@Autowired
	AdminRepo adminRepo;

	@Autowired
	UserRepo userRepo;
	
	@PostMapping("/user/login")
	public boolean isUserPresent(LoginModel data) {
		String email=data.getEmail();
		if(userRepo.existsByEmail(email)){
			UserModel dt= userRepo.findByEmail(email);
			if(data.getPassword().equals(dt.getPassword())){
				return true;
			}
		}
		return false;
	}
	
	@PostMapping("/admin/login")
	public boolean isAdminPresent(LoginModel data) {
		String email=data.getEmail();
		if(adminRepo.existsByEmail(email)){
			AdminModel dt= adminRepo.findByEmail(email);
			if(dt.getPassword().equals(data.getPassword())){
				return true;
			}
		}
		return false;
	}
	
	@PostMapping("/user/signup")
	public String saveUser(UserModel user) {
		userRepo.save(user);
		return "User added";
	}
	
	@PostMapping("/admin/signup")
	public String saveAdmin(AdminModel admin) {
		adminRepo.save(admin);
		return "Admin added";
	}
	
}
