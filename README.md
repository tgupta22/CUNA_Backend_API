# CUNA_Backend_API

# Framework Used:
I utilized expressjs to build this application as it is both maintainable and scalable. It was my first time working with expressjs so I feel it wen well.

## How to setup the project:

1. Git clone https://github.com/tgupta22/CUNA_Backend_API.git
2. First or foremost you need to have node installed on your machine, if you do not have you can download it from here https://nodejs.org/en/
3. In order to install Express:
    i) npm init --yes 
    ii) npm install -g express / npm install express --save
4. By now you should have node_modules, package-lock.json and package.json created in your project directory.
5. You can check the expressjs version in package.json

## How to run the project:

1. To run the project you can simply go to app.js file when you are on the CUNA_Backend_API folder, cd app.js.
2. app.js contains the complete code including the api for interacting with a callback based third-party
service.
3. To test the request's you need to be on the app.js file as mentioned above, Node app.js is the command that launches the localhost:3000 on which this application is currently running. 
4. The project also contains the postman collection for the request's in the project ( It's in json format).
5. One can simply import the json on postman and hit through the request making sure localhost 3000 is running or you can simply test on the browser as well. 

## Dependencies Package Versions used

1. Express: 4.17.1
2. npm: 7.24.0
3. node: v14.18.0
4. Postman: v8.12.2

## What could be improved and scaled in the application:

 1. In general Authentication is the key aspect of any application. If we need only certain people to utilize the application then implemeting authorized usage of  the app. would be necessary.
 2. This could be achived  by passing through JWT token or implememting AuthO would be the best practice.
 3. Attaching a third party system, database or cms to give the request's some data to communicate with.
 4. Comprehensive testing and error handling of the application by adding a datapoint or some use cases would be helpful while scaling the application.
