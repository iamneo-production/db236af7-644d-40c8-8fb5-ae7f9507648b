package com.examly.springapp.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class AdminRepo {
    @Autowired
    private JdbcTemplate jdbcTemplate;
}
