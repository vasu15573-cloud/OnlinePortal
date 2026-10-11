
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

                echo 'All required project files are present!'
            }
        }

        stage('Build') {
            steps {
                echo 'Online Examination System build completed'
            }
        }
    }
}