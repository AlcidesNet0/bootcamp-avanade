package decola_tech.api_rest.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import decola_tech.api_rest.domain.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    
}
