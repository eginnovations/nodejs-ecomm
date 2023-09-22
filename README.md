# Node.js Ecommerce

## Table of contents

- [Introduction](#introduction)
- [Sample](#sample)
- [Prerequisite](#prerequisite)
- [Installation](#installation)
- [Configuration](#configuration)
- [Run](#run)
- [Enabling eG Distributed Tracing](#enabling-eg-distributed-tracing)
- [License](#license)

## Introduction
A ecommerce website using Node.js, Express JS, and Mongoose. This repository was thoughtfully crafted to serve as a convenient sandbox for your hands-on exploration of eG observability within the context of a modest yet authentic project. 

## Sample
![appFrontPage](/readmeImg/appFrontPage.png)

## Prerequisite
  - Node.js > 12
  - MongoDB 5.0 

## Installation
```
npm install
```

## Configuration
To run this application, you have to set the below enviromental values

- SESSION_SECRET: this is the secret express-session.

- MONGO_URI: this is the connection string of your MongoDB database.

## Run
```
npm start
```
## Enabling eG Distributed Tracing
To enable distributed tracing for the backend parts of this application it is required to have eG Manager and eG Agent.

#### **Create New Component**
![egNewComp](/readmeImg/egNewComp.png)

#### **Add Snippet**
Copy the code snippet once the Node.js Component is created and include it as the first statement in server.js file and restart the server.
![snippet](/readmeImg/snippet.png)

## Enabling eG Distributed Tracing in Kubernetes

#### **Install eG Innovations Universal Agent Operator**
Follow the steps mentioned in [eG Innovations Operatorhub](https://operatorhub.io/operator/eginnovations-operator) to install the Universal Agent Operator

## License

[![License](https://img.shields.io/:License-MIT-blue.svg?style=flat-square)](http://badges.mit-license.org)

- MIT License
- Copyright 2020 © [Maryam Aljanabi](https://github.com/maryamaljanabi)
