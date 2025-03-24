# User Authentication and Authorization API
## Project Overview
This implementation provides a Node.js application for user authentication and authorization using Bearer tokens. It follows the MVC pattern, uses MongoDB with Mongoose for data storage, and includes JWT for secure authentication. The code is modular, with separate files for major functions, and includes API documentation via Postman.

### Published Postman Collection: <a href="https://documenter.getpostman.com/view/21245283/2sAYkGKKHo">View Here</a>
![image](https://github.com/user-attachments/assets/9569ab76-f253-4905-897a-6cdc01c5f498)
<br>

## Features
**User Registration**: Register a new user with hashed passwords. <br>
**User Login**: Authenticate users and return a JWT.<br>
**Protected Route**: Retrieve user information using a verified JWT.<br>
**API Documentation**: Detailed endpoints with sample requests and responses in Postman.<br>

## Technologies Used
- Node.js
- Express.js
- Mongoose (MongoDB)
- JWT (jsonwebtoken)
- Bcrypt
- Dotenv

### Learning Resources
#### Postman Api (https://www.postman.com/)
#### JWT (https://jwt.io/)

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
## Testing after Deploying my project on Render
### Create Account
![createAccountTest](https://github.com/TechNishant204/UserAuthentication-using-JWT/blob/master/Screenshots/createAccount.png)

### Login Account
![createAccountTest](https://github.com/TechNishant204/UserAuthentication-using-JWT/blob/master/Screenshots/login.png)


### GET User
[<img src="" alt="fetchAccountTest">](https://github.com/TechNishant204/UserAuthentication-using-JWT/blob/master/Screenshots/fetchUserByToken.png)

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd UserAuthentication
