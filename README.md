Sequelize Blogging Application
This is a blogging application built using the Sequelize ORM (Object-Relational Mapping) tool and Express.js as the web framework. The application allows users to create, read, update, and delete blog posts and comments. Authentication is implemented to ensure that only authenticated users can perform CRUD operations.

Project Structure
The project structure is organized as follows:

models/: Database models and associations
index.js: Initializes and configures Sequelize.
post.js: Post model definition and associations.
comment.js: Comment model definition and associations.
user.js: User model definition and associations.
config/: Configuration files
config.js: Database configuration
migrations: Files created during migrations.
migration_name * 4
seeders Files used to fill up database with real data.
seed_field_name
repl.js: A file for debugging purpose.
.env : Database credentials for the program
server.js: Launches webpage and all its capabilities.
README.md: Project documentation
Getting Started
To set up and run the application, follow these steps:

Clone the repository: git clone https://github.com/ddamme05/TTP-Assignments.git
Navigate to the project directory: cd \blogging\
Install dependencies: npm install
Create a database for the program.
Configure the database connection by creating the .env file.
Run the database migrations: npx sequelize-cli db:migrate
Run the seed data: npx sequelize-cli db:seed:all
Start the application: npm start
The application will be running on http://localhost:4000.
API Endpoints
The application provides the following API endpoints:

Posts
GET /posts: Retrieve all posts.
POST /posts: Create a new post.
GET /posts/:id: Retrieve a specific post by ID.
PUT /posts/:id: Update a specific post by ID.
DELETE /posts/:id: Delete a specific post by ID.
Comments
GET /posts/:postId/comments: Retrieve all comments for a specific post.
POST /posts/:postId/comments: Create a new comment for a specific post.
GET /comments/:id: Retrieve a specific comment by ID.
PUT /comments/:id: Update a specific comment by ID.
DELETE /comments/:id: Delete a specific comment by ID.
Authentication
POST /signup: Create a new user account.

POST /login: Log in an existing user.

DELETE /logout: Log out the current user.
