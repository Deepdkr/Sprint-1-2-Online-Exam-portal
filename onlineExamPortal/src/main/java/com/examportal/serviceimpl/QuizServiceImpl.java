package com.examportal.serviceimpl;

import java.util.HashSet;

import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examportal.entities.Category;
import com.examportal.entities.Quiz;
import com.examportal.repositories.QuizRepository;
import com.examportal.service.QuizService;



@Service
@Transactional
public class QuizServiceImpl implements QuizService {
    @Autowired
    private QuizRepository quizRepository;

	@Override
	public Quiz addQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return this.quizRepository.save(quiz);
	}

	@Override
	public Quiz updateQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return this.quizRepository.save(quiz);
	}

	@Override
	public Set<Quiz> getQuizzes() {
		// TODO Auto-generated method stub
		return new HashSet<>(this.quizRepository.findAll());
	}

	@Override
	public Quiz getQuiz(Long quizId) {
		// TODO Auto-generated method stub
		return this.quizRepository.findById(quizId).get();
	}

	@Override
	public String deleteQuiz(Long quizId) {
		// TODO Auto-generated method stub
		this.quizRepository.deleteById(quizId);
		return "Quiz Deleted ";
	}

	@Override
	public List<Quiz> getQuizzesOfCategory(Category category) {
		// TODO Auto-generated method stub
		return this.quizRepository.findBycategory(category);
	}

	//For Getting Active Quizzes
	
	@Override
	public List<Quiz> getActiveQuizzes() {
		// TODO Auto-generated method stub
		return this.quizRepository.findByActive(true);	
	}

	@Override
	public List<Quiz> getActiveQuizzesOfCategory(Category c) {
		// TODO Auto-generated method stub
		return this.quizRepository.findByCategoryAndActive(c, true);
	}

	@Override
	public List<Quiz> getQuizList() {
		// TODO Auto-generated method stub
		return this.quizRepository.findAll();
	}
    
	
}
