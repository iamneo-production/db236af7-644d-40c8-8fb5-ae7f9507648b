package com.examly.springapp.model;

import org.springframework.stereotype.Component;

public class ThemeModel {
    private int themeId;
    private String themeName;
    private int themePrice;
    private String themeDetails;

    public int getThemeId() {
        return themeId;
    }

    public void setThemeId(int themeId) {
        this.themeId = themeId;
    }

    public String getThemeName() {
        return themeName;
    }

    public void setThemeName(String themeName) {
        this.themeName = themeName;
    }

    public int getThemePrice() {
        return themePrice;
    }

    public void setThemePrice(int themePrice) {
        this.themePrice = themePrice;
    }

    public String getThemeDetails() {
        return themeDetails;
    }

    public void setThemeDetails(String themeDetails) {
        this.themeDetails = themeDetails;
    }
}
