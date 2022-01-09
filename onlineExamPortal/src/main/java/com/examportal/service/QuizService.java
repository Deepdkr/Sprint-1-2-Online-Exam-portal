package com.examportal.service;

import java.util.List;

import java.util.Set;

import com.examportal.entities.Category;
import com.examportal.entities.Quiz;



public interface QuizService {

    public Quiz addQuiz(Quiz quiz);

    public Quiz updateQuiz(Quiz quiz);

    public Set<Quiz> getQuizzes();

    public Quiz getQuiz(Long quizId);

    public String deleteQuiz(Long quizId);


    public List<Quiz> getQuizzesOfCategory(Category category);

    public List<Quiz> getActiveQuizzes();

    public List<Quiz> getActiveQuizzesOfCategory(Category c);
    
    public List<Quiz> getQuizList();
}
