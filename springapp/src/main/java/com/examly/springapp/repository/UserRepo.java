package com.examly.springapp.repository;

import com.examly.springapp.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<UserModel, Integer> {
<<<<<<< HEAD:springapp/src/main/java/com/examly/springapp/repository/UserRepository.java

=======
>>>>>>> 90c01362fb7715ea3f94b1c0262afff26bcf28c5:springapp/src/main/java/com/examly/springapp/repository/UserRepo.java
    Optional<UserModel> findByEmail(String email);
}
