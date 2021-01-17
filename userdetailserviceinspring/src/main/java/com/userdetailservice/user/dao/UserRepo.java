package com.userdetailservice.user.dao;

import com.userdetailservice.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User,Integer> {
    Optional<User> findUsersByUsername(String username);
}
