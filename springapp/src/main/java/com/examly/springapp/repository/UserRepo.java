package com.examly.springapp.repository;

import com.examly.springapp.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<UserModel, Integer> {
<<<<<<< HEAD
<<<<<<< HEAD:springapp/src/main/java/com/examly/springapp/repository/UserRepository.java

=======
>>>>>>> 90c01362fb7715ea3f94b1c0262afff26bcf28c5:springapp/src/main/java/com/examly/springapp/repository/UserRepo.java
=======
>>>>>>> c7cc825e23703ef3c45000924527520f69b546a2
    Optional<UserModel> findByEmail(String email);
}
