package com.examportal.transfers;

import org.springframework.stereotype.Component;

import com.examportal.dto.UserDTO;
import com.examportal.model.User;

@Component
public class UserDTOToEntity {
	public User convertUserDTOToEntity(UserDTO userDto, User user) {
		user.setPassword(userDto.getPassword());
		
		
		return user;
	}
}