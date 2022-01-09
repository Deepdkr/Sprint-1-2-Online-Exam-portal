package com.examportal.transfers;

import org.springframework.stereotype.Component;

import com.examportal.dto.ExamDTO;
import com.examportal.model.Exam;

@Component
public class ExamDTOToEntity {
	
	public Exam convertExamDTOToEntity(ExamDTO examDto, Exam exam) {
		exam.setExamId(examDto.getExamId());
		exam.setExamName(examDto.getExamName());
		
		return exam;
			
	}
}
