package com.examportal.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.examportal.model.Exam;
import com.examportal.model.User;




public interface ExamDAO extends JpaRepository<Exam, Integer> {
	
	

	@Modifying
	@Query("DELETE exam_details c WHERE c.examName= ?1")
	void deleteByName(@Param("examName") String examName);
	
	@Query("SELECT e FROM exam_details e WHERE e.examName LIKE %?1%")
	public Exam searchByExamName(String examName);

}
