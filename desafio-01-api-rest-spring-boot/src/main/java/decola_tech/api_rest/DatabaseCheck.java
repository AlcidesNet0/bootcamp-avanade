package decola_tech.api_rest;

import javax.sql.DataSource;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;




@Configuration
public class DatabaseCheck {
    @Bean
    CommandLineRunner checkDatabaseConnection(DataSource dataSource) {
        return args -> {
            System.out.println("📌 Testando conexão com o banco de dados...");
            System.out.println("🔗 URL: " + dataSource.getConnection().getMetaData().getURL());
            System.out.println("✅ Conexão bem-sucedida!");
        };
    }
}
