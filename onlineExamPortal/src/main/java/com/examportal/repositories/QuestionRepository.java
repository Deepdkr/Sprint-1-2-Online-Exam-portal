package com.examportal.repositories;

import java.util.List;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examportal.entities.Question;
import com.examportal.entities.Quiz;



@Repository("questionRepository")
public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findByQuiz(Quiz quiz);
    
  
    
    
    
}