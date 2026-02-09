pipeline {
    agent any

    environment {
        IMAGE_NAME = "new-app"
        CONTAINER_NAME = "new-app"
        PORT = "3000"
        GIT_REPO = "https://github.com/mrAUTHENTIC-18/PALMER-DEVOPS.git"
        GIT_BRANCH = "main"
        GIT_CREDENTIALS = "github-credentials2"
    }

    stages {

        stage('Checkout') {
            steps {
                git(
                    url: env.GIT_REPO,
                    branch: env.GIT_BRANCH,
                    credentialsId: env.GIT_CREDENTIALS
                )
            }
        }

        stage('Clean Previous Containers') {
            steps {
                sh """
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true
                    docker network prune -f
                """
            }
        }

        stage('Build Docker Image') {
            steps {
                sh """
                    docker build -t $IMAGE_NAME .
                """
            }
        }

        stage('Run Docker Container') {
            steps {
                sh """
                    docker run -d -p $PORT:3000 --name $CONTAINER_NAME $IMAGE_NAME
                """
            }
        }
    }

    post {
        success {
            echo "✅ New app deployed successfully on port $PORT!"
        }
        failure {
            echo "❌ Deployment failed. Check logs for errors."
        }
    }
}
