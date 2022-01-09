package com.examportal.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="exam_details")
public class Exam {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer examId;
	private String examName;
	
	
	public Integer getExamId() {
		return examId;
	}
	public void setExamId(Integer examId) {
		this.examId = examId;
	}
	public String getExamName() {
		return examName;
	}
	public void setExamName(String examName) {
		this.examName = examName;
	}
	@Override
	public String toString() {
		return "Exam [examId=" + examId + ", examName=" + examName + "]";
	}
	
	
}
