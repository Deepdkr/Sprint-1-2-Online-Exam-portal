package com.examportal.service;

import java.util.List;
import java.util.Set;

import com.examportal.entities.Question;
import com.examportal.entities.Quiz;
import com.examportal.entities.Quizdto;



public interface QuestionService {

    public Question addQuestion(Question question);

    public Question updateQuestion(Question question);

    public Set<Question> getQuestions();

    public Question getQuestion(Long questionId);

    public Set<Question> getQuestionsOfQuiz(Quiz quiz);

    public String deleteQuestion(Long quesId);

    public Question get(Long questionsId);
    
    public List<Quizdto> getQuizdto(long id);

    public List<Question> getQuestionList();
}
