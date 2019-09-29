# Camilo-Daza-Coding-Challenge
[link to the working app :)](https://bitwala-camilo.herokuapp.com)

## Description
The app was developed in NodeJS and React. I used a minimalistic  [Express](http://expressjs.com/) server as backend and develop the frontend with the help of [create-react-app](https://github.com/facebook/create-react-app).
I used the server to manage the functionality and also to serve the html file generated after build the react app.
To serve and deploy the app I used [heroku](https://dashboard.heroku.com/)

## Structure
The backend has two GET routes, one for the list of all the blocks, and other for the specific information off one block.

The frontend is made of three components:
### 1. App
Is the main component, where is defined the layout of the app: Really simple -> Header, Body, Footer.

### 2. BlocksTable
 A table use to display the list off blocks

### 3.BlockInfo
A stateless component that contains a modal to display the info of a specific block. Is children of *BlocksTable*.
