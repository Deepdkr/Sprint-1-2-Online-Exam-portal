package com.examportal.controller;


import java.util.List;

import org.springframework.beans.BeanUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examportal.constant.Constant;
import com.examportal.entities.OperationStatusModel;
import com.examportal.exception.EmailException;
import com.examportal.exception.NoUserFoundException;
import com.examportal.exception.RecordAlreadyExistException;
import com.examportal.model.Login;

import com.examportal.model.User;
import com.examportal.service.UserService;
import com.examportal.utils.RequestOperationName;
import com.examportal.utils.RequestOperationResult;

@CrossOrigin
@RestController
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping("/user/registration")
	public String addUser(@RequestBody User user) {
		
		
		
		if (user.getUserEmail().isEmpty() || user.getUserEmail().isBlank()
				|| !user.getUserEmail().matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
			throw new EmailException(Constant.MISSING_REQUIRED_FIELDS);
		}

		else {
			Boolean isUserAdded;
			try {
				
				isUserAdded = userService.userRegister(user);
				if (Boolean.TRUE.equals(isUserAdded)) {
					return Constant.USER_REGISTERED_SUCCESSFULLY;
					
				} 
				
				return Constant.UNABLE_TO_REGISTER;
				
			} catch (Exception ex) {
				throw new RecordAlreadyExistException(Constant.RECORD_ALREADY_EXIST);
			}

		}
	}

	@PostMapping(value = "/user/login")
	public String login(@RequestBody Login login) throws NoUserFoundException {

		User user = userService.validateUser(login);

		boolean isValidUser = false;

		if (null != user) {
			if ((user.getUserName().equals(login.getUserName()) && user.getPassword().equals(login.getPassword()))) {
				isValidUser = true;
			} else {
				
				 throw new NoUserFoundException();
			}

		}

		return isValidUser ? Constant.SUCCESSFULLY_LOGGED_IN : Constant.LOGGED_IN_FAILED;
	}
	@GetMapping("/userlist")
	public List<User> getAllUser() {
	return userService.getAllUser();
	}
	
	@DeleteMapping(path = "/{userName}")
	public OperationStatusModel deleteUser(@PathVariable("userName") String userName) {
		OperationStatusModel operationStatusModel = new OperationStatusModel();
		operationStatusModel.setOperationName(RequestOperationName.DELETE.name());

		userService.deleteUser(userName);

		operationStatusModel.setOperationResult(RequestOperationResult.SUCCESS.name());
		return operationStatusModel;
	}


}
