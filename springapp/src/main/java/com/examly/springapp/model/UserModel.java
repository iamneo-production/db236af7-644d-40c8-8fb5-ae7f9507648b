package com.examly.springapp.model;


import lombok.*;
import org.hibernate.annotations.Fetch;

import javax.persistence.*;
import java.util.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users_tab")
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  int id;

    @Column(unique = true)
    private String email;

    private String password;

    private String username;

    private String mobileNumber;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(
            name = "roles_tab",
            joinColumns = @JoinColumn(name = "id")
    )
    @Column(name = "role")
    private Set<String> userRole;


    public UserModel(String email, String password, String username, String mobileNumber, Set<String> userRole) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.mobileNumber = mobileNumber;
        this.userRole = userRole;
    }

    
}
