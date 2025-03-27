package decola_tech.api_rest.service;

import decola_tech.api_rest.domain.models.User;

public interface UserService {
    
    
    User findById(Long id);

    User create(User userToCreate);
}
