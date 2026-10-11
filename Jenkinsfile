
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

        stage('Test') {
            steps {
                echo 'Testing Online Examination System files'

                bat 'findstr /I /C:"<html" index.html'
                bat 'findstr /I /C:"<head" index.html'
                bat 'findstr /I /C:"<body" index.html'
                bat 'findstr /I /C:"<script" index.html'
                bat 'findstr /I /C:"<link" index.html'
                bat 'findstr /I /C:"function" script.js'
                bat 'findstr /I /C:"{" style.css'

                echo 'All basic file content tests passed!'
            }
        }

        stage('Build') {
            steps {
                echo 'Online Examination System build completed'
            }
        }
    }
}