package com.examly.springapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ThemeModel {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int themeId;
	private String themeName;
	private String themeDetails;
	private int themePrice;

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

	public String getThemeDetails() {
		return themeDetails;
	}

	public void setThemeDetails(String themeDetails) {
		this.themeDetails = themeDetails;
	}

	public int getThemePrice() {
		return themePrice;
	}

	public void setThemePrice(int themePrice) {
		this.themePrice = themePrice;
	}

}
