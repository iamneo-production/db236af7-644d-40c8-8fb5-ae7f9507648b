package com.examly.springapp.controller;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.Entity.AdminModel;
import com.examly.springapp.Entity.LoginModel;
import com.examly.springapp.Entity.UserModel;
import com.examly.springapp.Repository.AdminRepo;
import com.examly.springapp.Repository.UserRepo;





@RestController
public class AuthController {
	
	@Autowired
	AdminRepo adminRepo;

	
	
	@Autowired
	UserRepo userRepo;
	
	
	@PostMapping("/user/login")
	public boolean isUserPresent(LoginModel inputData) {
		String email=inputData.getEmail();
		if(userRepo.existsByEmail(email)){
			UserModel userData= userRepo.findByEmail(email);
			if(userData.getPassword().equals(inputData.getPassword())){
				return true;
			}
		}
		return false;
	}
	
	@PostMapping("/admin/login")
	public boolean isAdminPresent(LoginModel inputData) {
		String email=inputData.getEmail();
		if(adminRepo.existsByEmail(email)){
			AdminModel adminData= adminRepo.findByEmail(email);
			if(adminData.getPassword().equals(inputData.getPassword())){
				return true;
			}
		}
		return false;
	}
	
}
