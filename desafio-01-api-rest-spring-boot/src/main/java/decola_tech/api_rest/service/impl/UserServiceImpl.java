package decola_tech.api_rest.service.impl;

import java.util.NoSuchElementException;

import org.springframework.stereotype.Service;

import decola_tech.api_rest.domain.models.User;
import decola_tech.api_rest.domain.repository.UserRepository;
import decola_tech.api_rest.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User findById(Long id) {
        return userRepository.findById(id).orElseThrow(NoSuchElementException::new);
    }

    @Override
    public User create(User userToCreate) {
        if(userToCreate.getId() != null &&  userRepository.existsById(userToCreate.getId())) {
            throw new IllegalArgumentException("O usuário já existe!");
        }

        return userRepository.save(userToCreate);
    }
    
}
