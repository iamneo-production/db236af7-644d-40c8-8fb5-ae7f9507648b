package com.examly.springapp.service.implementation;

import com.examly.springapp.model.ThemeModel;
import com.examly.springapp.repository.ThemeRepo;
import com.examly.springapp.service.IThemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ThemeServiceImpl implements IThemeService {

    @Autowired
    private ThemeRepo themeRepo;
    @Override
    public String addTheme(ThemeModel data) {
        themeRepo.save(data);
        return "Theme added";
    }

    @Override
    public String editTheme(int themeId, ThemeModel data) {
        Optional<ThemeModel> optTheme = themeRepo.findById(themeId);
        if(optTheme.isEmpty())
            return "Invalid Theme Id";
        ThemeModel theme = optTheme.get();
        theme.setThemeDetails(data.getThemeDetails());
        theme.setThemeName(data.getThemeName());
        theme.setThemePrice(data.getThemePrice());
        themeRepo.save(theme);
        return "Theme edited";
    }

    @Override
    public String deleteTheme(int themeId) {
        themeRepo.deleteById(themeId);
        return "Theme deleted";

    }

    @Override
    public List<ThemeModel> getTheme(Integer id) {
        Optional<ThemeModel> optTheme = themeRepo.findById(id);
        List<ThemeModel> responseTheme = new ArrayList<>();
        if(optTheme.isPresent())
        {
            ThemeModel theme = optTheme.get();
            responseTheme.add(theme);
            return responseTheme;
        }
        return responseTheme;
    }

    @Override
    public List<ThemeModel> getAllThemes() {
        return themeRepo.findAll();
    }
}

