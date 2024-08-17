pipeline {
    agent any
    
    stages {

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

