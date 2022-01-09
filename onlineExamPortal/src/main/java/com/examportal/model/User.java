package com.examportal.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

@Entity(name="user_details_trials")
public class User {
	//@Id
	
	
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	private String uniqueId;
	@Column(unique = true)
	private String userEmail;
	
	@Column(name = "userId", length = 200, unique = true)
	private String userId;
	
	@Column(name = "userName", length = 200, unique = true)
	private String userName;
	
	private String password;
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	@Override
	public String toString() {
		return "User [uniqueId=" + uniqueId + ", userEmail=" + userEmail + ", userId=" + userId + ", userName="
				+ userName + ", password=" + password + "]";
	}
	
	
	
	
	

}
