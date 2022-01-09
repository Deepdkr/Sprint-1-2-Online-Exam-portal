package com.examportal.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.examportal.entities.Category;
import com.examportal.exception.PasswordDoesnotMatchException;
import com.examportal.service.CategoryService;


@CrossOrigin//(origins ="http://localhost:3000/")
@RestController
@RequestMapping("/category")
public class CategoryController {

	@Autowired
    private CategoryService categoryService;

    //add category
    @PostMapping("/")
    public ResponseEntity<Category> addCategory(@RequestBody Category category , @RequestParam String password) throws PasswordDoesnotMatchException{
    	String pass = "Admin@123";
    	if(pass.equals(password)) {
    		Category category1 = this.categoryService.addCategory(category);
            return ResponseEntity.ok(category1);	
    	}
    	else
    		throw new PasswordDoesnotMatchException("Your are Not Authorized");
      }

    //get category
    @GetMapping("/{categoryId}")
    public Category getCategory(@PathVariable("categoryId") Long categoryId) {
        return this.categoryService.getCategory(categoryId);
    }

    //get all categories
    @GetMapping("/")
    public ResponseEntity<?> getCategories() {
        return ResponseEntity.ok(this.categoryService.getCategories());
    }

    //update category
    @PutMapping("/")
    public Category updateCategory(@RequestBody Category category) {
        return this.categoryService.updateCategory(category);
    }
    
    //delete category
    @DeleteMapping("/{categoryId}")
    public void deleteCategory(@PathVariable("categoryId") Long categoryId) {
        this.categoryService.deleteCategory(categoryId);
    }

    @GetMapping("/list")
    public List<Category> getCategoryList() {
        return this.categoryService.getCategoryList();
    }
}

