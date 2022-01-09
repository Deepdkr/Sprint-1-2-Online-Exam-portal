package com.examportal.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.examportal.dto.ExamDTO;
import com.examportal.model.Exam;
import com.examportal.model.User;
import com.examportal.repositories.ExamDAO;
import com.examportal.service.ExamService;
import com.examportal.transfers.ExamDTOToEntity;

@Component
public class ExamServiceImpl implements ExamService {

	@Autowired
	ExamDAO examDao;
	@Autowired
	ExamDTOToEntity examDTOToEntity;

	@Override
	public Exam addExam(ExamDTO examDto) {
		Exam exam = examDTOToEntity.convertExamDTOToEntity(examDto, new Exam());
		return examDao.save(exam);

	}


	@Override
	public List<Exam> getAllExam() {

		return examDao.findAll();

	}


	@Override
	public void deleteExam(String examName) {
		Exam productByExamName = examDao.searchByExamName(examName);
		examDao.delete(productByExamName);
	}
		
	

	
}
