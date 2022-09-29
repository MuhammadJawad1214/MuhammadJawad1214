# cypress-cucumber-typescript project

> Cypress 10+ with Cucumber Type Script.


- ## 💻 Pre-requisites

Before you use this project you only need to have Node Js installed in your computer.
    https://nodejs.org/es/download/

Set The Proxy settings in npm config file by writing the command npm config edit
    https_proxy=http://username:password@proxy:80 (Replace the @ sign in password by %40)
    registry=http://registry.npmjs.org/

## 🚀 Goto the project folder
       Open the terminal and run: npm init -y
       The package.json will be created
## 🚀 Install cypress
       run npm install --save-dev cypress
       
## 🚀 Open cypress
       run npx cypress open

## 🚀 install ntlm auth plugin
       run npm install --save-dev cypress-ntlm-auth
       run npx ntlm-proxy 
       open another terminal and run npx cypress-ntlm open

## 🚀 Run the demo: 
Open the terminal and run: npm run cypress:execution
