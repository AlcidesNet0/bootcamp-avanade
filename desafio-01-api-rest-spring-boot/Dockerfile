FROM maven:3.8.4-openjdk-17-slim AS build

COPY . /app

WORKDIR /app

RUN mvn clean package

FROM openjdk:17-jdk-slim

COPY --from=build /app/target/api-rest-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]