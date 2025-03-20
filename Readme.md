# User Authentication and Authorization API
## Project Overview
This implementation provides a Node.js application for user authentication and authorization using Bearer tokens. It follows the MVC pattern, uses MongoDB with Mongoose for data storage, and includes JWT for secure authentication. The code is modular, with separate files for major functions, and includes API documentation via Postman.

### Published Postman Collection: <a href="https://documenter.getpostman.com/view/21245283/2sAYkGKKHo">View Here</a>

## Features
**User Registration**: Register a new user with hashed passwords.
**User Login**: Authenticate users and return a JWT.
**Protected Route**: Retrieve user information using a verified JWT.
**API Documentation**: Detailed endpoints with sample requests and responses in Postman.

## Technologies Used
- Node.js
- Express.js
- Mongoose (MongoDB)
- JWT (jsonwebtoken)
- Bcrypt
- Dotenv

## API Endpoints
**POST** /api/auth/register: Register a new user <br>
**POST** /api/auth/login: Login and receive a JWT <br>
**GET** /api/user: Get user information (protected) <br>

Project Structure
The application follows the MVC pattern with the following folder structure:
```
UserAuthentication/
├── config/
│   └── db.js              # Database connection
├── controllers/
│   ├── auth.js           # Registration and login controllers
│   └── user.js           # User information controller
├── middleware/
│   ├── auth.js           # JWT verification middleware
│   └── logger.js         # Request logging middleware
├── models/
│   └── user.js           # User schema and model
├── routes/
│   ├── auth.js           # Authentication routes
│   └── user.js           # User routes
├── utils/
│   ├── hash.js           # Password hashing utilities
│   └── jwt.js            # JWT creation and verification utilities
├── .env                  # Environment variables
├── app.js                # Main application file
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```
## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd UserAuthentication
