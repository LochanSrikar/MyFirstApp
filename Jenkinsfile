pipeline {
    agent any
    
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/LochanSrikar/MyFirstApp'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myfirstapp .'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'docker run --rm myfirstapp npm test'
            }
        }

        stage('Deploy with Ansible') {
            steps {
                ansiblePlaybook credentialsId: 'ansible-credentials-id', playbook: 'deploy.yml'
            }
        }
    }
}

