pipeline {
    agent any
    
    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t lochansrikar/dockerdemo .'
            }
        }

        stage('Run Tests') {
            steps {
             sh 'docker run --rm lochansrikar/dockerdemo npm test'
            }
        }

        stage('Deploy with Ansible') {
            steps {
                ansiblePlaybook (
                    
                    playbook: 'Ansible/deploy.yml',
                    inventory: 'Ansible/inventory.ini',
                    credentialsId: 'ssh-credentials-id'
                    )
            }
        }
    }
}

