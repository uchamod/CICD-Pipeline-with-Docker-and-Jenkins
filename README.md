# CI/CD Pipeline with Docker and Jenkins

This repository contains a Node.js server integrated with a CI/CD pipeline using Docker and Jenkins. It demonstrates an automated process for building, testing, and deploying the application, ensuring efficient and reliable software delivery.

## Features
- Node.js server for handling basic functionality.
- Dockerized application for consistent environment setup.
- Jenkins pipeline for automating build, test, and deployment.

## Requirements
- **Node.js**: Ensure Node.js and npm are installed.
- **Docker**: Install Docker for containerization.
- **Jenkins**: Install Jenkins for CI/CD pipeline setup.

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/CI-CD-Pipeline-with-Docker-and-Jenkins.git
cd CI-CD-Pipeline-with-Docker-and-Jenkins
```

### 2. Build the Docker Image
```bash
docker build -t nodejs-server .
```

### 3. Run the Docker Container
```bash
docker run -p 3000:3000 nodejs-server
```

### 4. Access the Application
Visit `http://localhost:3000` in your browser.

## Jenkins Pipeline

1. **Setup Jenkins**: Configure Jenkins with necessary plugins (e.g., Docker, Git).
2. **Create a Pipeline Job**: Link the job to this repository.
3. **Define the Pipeline**: Use a `Jenkinsfile` for automating build and deployment steps.

## License
This project is licensed under the [MIT License](LICENSE).

---
Feel free to contribute to the repository or suggest improvements!
