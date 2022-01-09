package com.examportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examportal.dto.ExamDTO;
import com.examportal.entities.OperationStatusModel;
import com.examportal.model.Exam;
import com.examportal.service.ExamService;
import com.examportal.utils.RequestOperationName;
import com.examportal.utils.RequestOperationResult;




	@CrossOrigin
	@RestController
	public class ExamController {

		@Autowired
		ExamService examService;

		@GetMapping("/examlist")
		public List<Exam> getAllExam() {
			return examService.getAllExam();
		}

		@PostMapping(value = "/addexam")
		public Exam addExam(@RequestBody ExamDTO examDto) {
			return examService.addExam(examDto);
		}

		@DeleteMapping(path = "/deleteexam/{examName}")
		public OperationStatusModel deleteProduct(@PathVariable("examName") String examName) {
			OperationStatusModel operationStatusModel = new OperationStatusModel();
			operationStatusModel.setOperationName(RequestOperationName.DELETE.name());

			examService.deleteExam(examName);

			operationStatusModel.setOperationResult(RequestOperationResult.SUCCESS.name());
			return operationStatusModel;
		}
		
		

		}

	

