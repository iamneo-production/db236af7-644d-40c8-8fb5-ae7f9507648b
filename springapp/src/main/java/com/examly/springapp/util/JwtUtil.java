package com.examly.springapp.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.concurrent.TimeUnit;

@Component
public class JwtUtil {

    @Value("${app.secret}")
    private String secret;
    public String getTokenEmail (String token)
    {
        return getClaims(token).getSubject();
    }
    public boolean isTokenExp(String token)
    {
        return getExpDate(token).before(new Date(System.currentTimeMillis()));
    }
    public Date getExpDate(String token)
    {
        return getClaims(token).getExpiration();
    }
    public Claims getClaims (String token)
    {
        return Jwts.parser()
                .setSigningKey(Base64.getEncoder().encode(secret.getBytes()))
                .parseClaimsJws(token)
                .getBody();
    }
    public String generateToken(String subject)
    {
        return Jwts.builder()
                .setSubject(subject)
                .setIssuer("Team2")
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + TimeUnit.HOURS.toMillis(4)))
                .signWith(SignatureAlgorithm.HS384, Base64.getEncoder().encode(secret.getBytes()))
                .compact();
    }

}
