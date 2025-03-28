package decola_tech.api_rest;



import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ApiRestDecolaTechApplication {

	public static void main(String[] args) {

		// Define o perfil ativo como "prd"
        System.setProperty("spring.profiles.active", "prd");
		
		SpringApplication.run(ApiRestDecolaTechApplication.class, args);
	}

}
