package com.examportal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examportal.entities.Category;




public interface CategoryRepository extends JpaRepository<Category, Long> {
}
