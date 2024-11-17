Node.js Authentication and Authorization API

This project is a Node.js API for handling user authentication and authorization. It supports role-based access control where admins can view all their associated records, and regular users can only view their own records.

Features
User Signup and Login with encrypted passwords using bcryptjs.
JWT Authentication for secure and stateless session handling.
Role-Based Access Control:
Admins: View all records associated with their ID.
Users: View only their own records.
MongoDB Integration for data storage.
Organized project structure for scalability.


Technologies Used
Backend: Node.js, Express.js
Database: MongoDB with Mongoose ODM
Authentication: JWT (JSON Web Tokens), bcryptjs
Environment Management: dotenv

API Endpoints
Auth Routes (/api/auth)
Method	Endpoint	Description	Payload Example
POST	/signup	Create a new user	{ "username": "admin", "password": "xyz@123", "role": "admin" }
POST	/login	Login and get JWT token	{ "username": "admin", "password": "xyz@123" }

Record Routes (/api/records)
Method	Endpoint	Description	Header Example
GET	/	Fetch records based on user or admin	Authorization: Bearer <token>


Project Structure
bash
Copy code
auth-authorization-api/
│
├── models/             # Mongoose schemas
│   ├── User.js         # User schema
│   └── Record.js       # Record schema
│
├── routes/             # API routes
│   ├── auth.js         # Authentication routes
│   └── records.js      # Record management routes
│
├── middleware/         # Custom middleware
│   ├── auth.js         # JWT authentication middleware
│
├── .env                # Environment variables
├── server.js           # Entry point of the application
├── package.json        # Project metadata and scripts
└── README.md           # Documentation


How to Test
You can use tools like Postman or cURL to test the API endpoints.

Example Test Cases
Signup a User

POST /api/auth/signup
Body:
json
Copy code
{
  "username": "user",
  "password": "xyz@123",
  "role": "user"
}

Login as Admin

POST /api/auth/login
Body:
json
Copy code
{
  "username": "admin",
  "password": "xyz@123"
}

Response:
json
Copy code
{
  "token": "your_jwt_token"
}

Fetch Records

GET /api/records
Header:
plaintext
Copy code
Authorization: Bearer <your_jwt_token>