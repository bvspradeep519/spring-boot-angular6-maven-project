package com.chefstory.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chefstory.entity.Recipe;

/**
 * @author Shashank Goel
 * @version 1.0
 * @since 09/05/21
 */
@Repository
public interface RecipeRepo extends JpaRepository<Recipe, Integer> {

	public List<Recipe> findByTitle(String title);

	public Recipe findById(Long id);
}
