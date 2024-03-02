pipeline {
    agent any
    environment {
        name = 'suraj'
    }
    parameters {
        string(name: 'PERSON', defaultValue: 'Mr Jenkins', description: 'Who should I say hello to?')
    }

    stages {
        stage('stage1') {
            environment {
                myname = 'Raj'
            }
            steps {
                sh 'date'
                sh 'uptime'
                sh 'echo "your name is $myname"'
            }
        }
        stage('stage2') {
            steps {
                sh '''
                date
                ls
                pwd
                
                '''
            }
        }
        stage('environment') {
            input {
                message "Should we continue?"
                ok "Yes, we should."
            }
            steps {
                
                sh 'echo "my name is $name"'
                sh 'echo "Hello $params.PERSON"'
            }
        }
    }
    post { 
        success { 
            echo 'I will always say Hello again!'
        }
    }
}
