package com.examportal.serviceimpl;

import java.util.LinkedHashSet;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examportal.entities.Category;
import com.examportal.repositories.CategoryRepository;
import com.examportal.service.CategoryService;



@Service
public class CategoryServiceImpl implements CategoryService {

	@Autowired
    private CategoryRepository categoryRepository;
	
	@Override
	public Category addCategory(Category category) {
		// TODO Auto-generated method stub
		return this.categoryRepository.save(category);
	}

	@Override
	public Category updateCategory(Category category) {
		// TODO Auto-generated method stub
		 return this.categoryRepository.save(category);
	}

	@Override
	public Set<Category> getCategories() {
		// TODO Auto-generated method stub
		return new LinkedHashSet<>(this.categoryRepository.findAll());
	}

	@Override
	public Category getCategory(Long categoryId) {
		// TODO Auto-generated method stub
		return this.categoryRepository.findById(categoryId).get();
	}

	@Override
	public String deleteCategory(Long categoryId) {
		// TODO Auto-generated method stub
		 Category category = new Category();
	        category.setCid(categoryId);
	        this.categoryRepository.delete(category);
	        return "Cataegory Deleted";
	}
	@Override
	public List<Category> getCategoryList() {
		// TODO Auto-generated method stub
		return this.categoryRepository.findAll();
	}
	

}
