# User Authentication and Authorization API

A Node.js application using Express.js, Mongoose, and JWT for user authentication and authorization with Bearer tokens.

### Published Postman Collection: <a href="https://documenter.getpostman.com/view/21245283/2sAYkGKKHo">View Here</a>

## Features
- User registration with password hashing
- User login with JWT generation
- Protected route to get user information
- API documentation in Postman

## Technologies Used
- Node.js
- Express.js
- Mongoose (MongoDB)
- JWT (jsonwebtoken)
- Bcrypt
- Dotenv

## API Endpoints
**POST** /api/auth/register: Register a new user
**POST** /api/auth/login: Login and receive a JWT
**GET** /api/user: Get user information (protected)

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd auth-api
