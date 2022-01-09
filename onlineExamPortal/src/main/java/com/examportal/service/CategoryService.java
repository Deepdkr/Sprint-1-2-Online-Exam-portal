package com.examportal.service;

import java.util.List;

import java.util.Set;

import com.examportal.entities.Category;



public interface CategoryService {
    public Category addCategory(Category category);

    public Category updateCategory(Category category);

    public Set<Category> getCategories();

    public Category getCategory(Long categoryId);

    public String deleteCategory(Long categoryId);

    public List<Category> getCategoryList();
}
