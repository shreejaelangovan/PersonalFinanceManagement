package com.neo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.neo.security.entity.User;
import com.neo.security.repository.UserRepository;
@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository repo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	//repo.findById(userId id)
	
	public Boolean addUser(User user) {
		
		String encodedPassword = passwordEncoder.encode(user.getPassword());
		
		User user1 = User.builder()
				.userName(user.getUsername())
				.email(user.getEmail())
				.firstName(user.getFirstName())
				.lastName(user.getLastName())
				.password(encodedPassword)
				.build();
		
//		return repo.save(user1)!=null ? true:false;
//		no need of tirnary operator here
		return repo.save(user1)!=null;

	}

	@Override
	public List<User> getAllUsers() {
		return repo.findAll();
	}

	@Override
	public User getUserByEmail(String email) {
	
		return repo.findByEmail(email).get();
	}
	
	

}
