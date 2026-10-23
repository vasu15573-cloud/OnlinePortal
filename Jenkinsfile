
pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Getting OnlinePortal source code'
                checkout scm
            }
        }

        stage('Check Project Files') {
            steps {
                echo 'Checking project files'

                bat 'if not exist index.html exit /b 1'
                bat 'if not exist style.css exit /b 1'
                bat 'if not exist script.js exit /b 1'
                bat 'if not exist test\\script.test.js exit /b 1'
                bat 'if not exist Dockerfile exit /b 1'

                echo 'All required project files are present!'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated JavaScript tests'
                bat 'node --test'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building OnlinePortal Docker image'
                bat 'docker build -t onlineportal:1.0 .'
            }
        }

        stage('Docker Deploy') {
    steps {
        echo 'Deploying OnlinePortal container'

        bat '''
            docker rm -f onlineportal-container 2>NUL
            docker run -d --name onlineportal-container -p 8081:80 onlineportal:1.0
            if errorlevel 1 exit /b 1
        '''

        echo 'OnlinePortal deployment completed!'
    }
}
    }
}
