---
layout: page
title: "Jenkins"
description: ""
---





## Nice Plugins

* [JobConfigHistory Plugin](https://wiki.jenkins-ci.org/display/JENKINS/JobConfigHistory+Plugin)


* [Monitoring](https://wiki.jenkins-ci.org/display/JENKINS/Monitoring)


* [Timestamper](https://wiki.jenkins-ci.org/display/JENKINS/Timestamper)


* [Scriptler](https://wiki.jenkins-ci.org/display/JENKINS/Scriptler+Plugin)




``` groovy

node('docker-builder') {
    stage 'Checkout'
        git url: 'ssh://git@[...].git',
            credentialsId: '[...]'  //,
            // branch: 'refs/tags/${tagName}'


    stage('npm') {
        // maybe cleanup ./node_modules and similar
        // def node = docker.image('node')

        def node = docker.image('digitallyseamless/nodejs-bower-grunt')
        node.pull()
        node.inside {
            sh '''
                export HOME="${PWD}"

                npm install
                bower install
                grunt build
            '''
        }
    }

       
    stage('maven') {
        def maven = docker.image('maven')
        maven.pull()
        maven.inside {
            sh '''
                export HOME="${PWD}"
                export MAVEN_CONFIG="${HOME}/.m2"

                GIT_DESCRIBE=$(git describe --tags --dirty --long --match "build-analyzer-[0-9]*" 2>/dev/null || echo "invalid")
                echo "GIT_DESCRIBE=${GIT_DESCRIBE}" > env.properties
                
                mvn -version
                mvn package -Dmaven.repo.local="${HOME}/.m2"
            '''
        }
    }
}
```
