package decola_tech.api_rest.service;

import java.util.Optional;

import decola_tech.api_rest.domain.models.User;

public interface UserService {
    
    
    Optional<User> findById(Long id);

    User create(User userToCreate);
}
