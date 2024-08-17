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
                ansiblePlaybook credentialsId: 'private-key', disableHostKeyChecking: true, installation: 'Ansible', inventory: 'Ansible/inventory.ini', playbook: 'Ansible/deploy.yml', vaultTmpPath: ''
            }
        }
    }
}

