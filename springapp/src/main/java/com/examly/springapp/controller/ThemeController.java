package com.examly.springapp.controller;

import com.examly.springapp.entity.*;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import com.examly.springapp.repository.ThemeRepo;

@RestController
public class ThemeController {

    @Autowired
    ThemeRepo themeRepo;

    public void addTheme(ThemeModel data)
    {

    }
    public void getTheme(int themeId)
    {

    }
    public void EditTheme(int themeId)
    {

    }
    public void DeleteTheme(int themeId)
    {

    }
}
