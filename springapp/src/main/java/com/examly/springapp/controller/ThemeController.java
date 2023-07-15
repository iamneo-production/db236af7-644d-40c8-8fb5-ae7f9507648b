package com.examly.springapp.controller;

import com.examly.springapp.model.ThemeModel;
import com.examly.springapp.service.IThemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ThemeController {
    
    @Autowired
    private IThemeService themeService;
    @GetMapping("/admin/theme")
    public ResponseEntity<List<ThemeModel>> getTheme(@RequestParam Integer id)
    {
        if(id == null)
            return ResponseEntity.ok(themeService.getAllThemes());
        return ResponseEntity.ok(themeService.getTheme(id));
    }
    @PostMapping("/admin/addTheme")
    public ResponseEntity<String> addTheme(@RequestBody ThemeModel data)
    {
        return ResponseEntity.ok(themeService.addTheme(data));
    }
    @PutMapping("admin/editTheme")
    public ResponseEntity<String> editTheme(@RequestParam Integer themeId, @RequestBody ThemeModel data) {
        return ResponseEntity.ok(themeService.editTheme(themeId, data));
    }
    @DeleteMapping("admin/deleteTheme/{themeId}")
    public ResponseEntity<String> deleteTheme(@PathVariable int themeId)
    {
        return ResponseEntity.ok(themeService.deleteTheme(themeId));
    }

}

