package com.examportal.serviceimpl;

import java.util.ArrayList;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examportal.entities.Question;
import com.examportal.entities.Quiz;
import com.examportal.entities.Quizdto;
import com.examportal.repositories.QuestionRepository;
import com.examportal.repositories.QuizRepository;
import com.examportal.service.QuestionService;


@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;
    
    @Autowired
    QuizRepository qr;

	@Override
	public Question addQuestion(Question question) {
		// TODO Auto-generated method stub
		return this.questionRepository.save(question);
	}

	@Override
	public Question updateQuestion(Question question) {
		// TODO Auto-generated method stub
		return this.questionRepository.save(question);
	}

	@Override
	public Set<Question> getQuestions() {
		// TODO Auto-generated method stub
		return new HashSet<>(this.questionRepository.findAll());
	}

	@Override
	public Question getQuestion(Long questionId) {
		// TODO Auto-generated method stub
		return this.questionRepository.findById(questionId).get();
	}
//
//	@Override
//	public Set<Question> getQuestionsOfQuiz(Quiz quiz) {
//		// TODO Auto-generated method stub
//		return this.questionRepository.findByQuiz(quiz);
//	}

	@Override
	public String deleteQuestion(Long quesId) {
		// TODO Auto-generated method stub
		Question question = new Question();
        question.setQuesId(quesId);
        this.questionRepository.delete(question);
  		return "Question Deleted";
	}

	@Override
	public Question get(Long questionsId) {
		// TODO Auto-generated method stub
		 return this.questionRepository.getOne(questionsId);

	}

	@Override
	public List<Quizdto> getQuizdto(long id) {
		// TODO Auto-generated method stub
		Quiz s= qr.getById(id);
		  List<Question> list=questionRepository.findByQuiz(s);
		  List<Quizdto> qlist=new ArrayList<>();
		  
		  for(Question q:list)
		  {
			  Quizdto q1=new Quizdto();
			  q1.setQuesId(q.getQuesId());
			  q1.setContent(q.getContent());
			  q1.setOption1(q.getOption1());
			  q1.setOption2(q.getOption2());
			  q1.setOption3(q.getOption3());
			  q1.setOption4(q.getOption4());
			  //q1.setOptions(q.getOptions());
			  q1.setAnswer(q.getAnswer());
			  qlist.add(q1);
		  }
		  

			return qlist;
	}

	@Override
	public Set<Question> getQuestionsOfQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<Question> getQuestionList() {
		// TODO Auto-generated method stub
		return this.questionRepository.findAll();
	}
	
	
	

    
}