package com.examly.springapp.config;

import com.examly.springapp.filter.SecurityFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private InvalidUserEntryPoint invalidUserEntryPoint;

    @Autowired
    private SecurityFilter securityFilter;
    @Override
    @Bean
    protected AuthenticationManager authenticationManager() throws Exception
    {
        return super.authenticationManager();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception{

        auth.userDetailsService(userDetailsService)
                .passwordEncoder(bCryptPasswordEncoder);

    }

    @Override
    protected void configure(HttpSecurity http) throws Exception
    {
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers( "/user/signup","/user/login","/admin/login").permitAll()
                .antMatchers( "/admin/signup","/admin/dashboard",
                        "/admin/order","/admin/theme","/admin/gift",
                        "/admin/addGift","/admin/addTheme",
                        "/admin/editTheme/{themeId}","/admin/editGift",
                        "/admin/deleteGift/{giftId}", "/admin/deleteTheme/{themeId}","/admin/deleteOrder/{orderId}"
                ).permitAll()
                .anyRequest().authenticated()
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(invalidUserEntryPoint)
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
        ;
    }
}
