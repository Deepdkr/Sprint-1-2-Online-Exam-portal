package com.examportal.service;

import java.util.List;

import com.examportal.dto.ExamDTO;
import com.examportal.model.Exam;



public interface ExamService {
	public Exam addExam(ExamDTO examDto);
	public List<Exam> getAllExam();
	public void deleteExam(String examName);

	

}
