package com.examly.springapp.repository;

import com.examly.springapp.model.ThemeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ThemeRepo extends JpaRepository<ThemeModel, Integer> {
}
