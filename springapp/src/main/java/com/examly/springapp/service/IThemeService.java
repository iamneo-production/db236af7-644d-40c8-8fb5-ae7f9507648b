package com.examly.springapp.service;

import com.examly.springapp.model.ThemeModel;

import java.util.List;

public interface IThemeService {
    String addTheme(ThemeModel data);
    String editTheme(int themeId, ThemeModel data);
    String deleteTheme(int themeId);
    List<ThemeModel> getTheme(Integer id);
    List<ThemeModel> getAllThemes();
}
