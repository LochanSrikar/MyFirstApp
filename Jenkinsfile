pipeline {
    agent any
    
    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t MyFirstApp .'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'docker run --rm MyFirstApp npm test'
            }
        }

        stage('Deploy with Ansible') {
            steps {
                ansiblePlaybook credentialsId: 'ansible-credentials-id', playbook: 'deploy.yml'
            }
        }
    }
}

