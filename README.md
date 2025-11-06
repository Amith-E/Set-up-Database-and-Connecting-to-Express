# Backend for Product Inventory Tracker

Imagine you're building a basic **product inventory tracker** for a small business. Your task is to set up a backend using **Node.js** and **Express.js**, and connect it to a **MongoDB** database using **Mongoose**.

This assignment will give you hands-on experience writing the connection logic, managing environment variables, and validating whether the Express server is successfully connected to the database.

## Instructions

### 1. Initialize the Project

- A basic Express boilerplate has been provided.
- You need to install all the required dependencies using npm install.

### 2. Set Up Environment Configuration

- Create a .env file in the root directory.
- Store the MongoDB connection string in the .env file as shown below:

MONGO_URI=mongodb://localhost:27017/inventoryDB

- This keeps your credentials and configuration safe and separate from your code.

### 3. Connect Express to MongoDB

- Open index.js.
- Set up the Express server (if not already done).
- Use Mongoose to:

  - Load the connection string from the .env file.
  - Establish a connection to the MongoDB database.
  - Log one of the following messages depending on the connection outcome:

    - Success:
      Connected to MongoDB
    - Failure:
      Error connecting to MongoDB: <error details>

### 4. Test Your Backend

- Run the server using node index.js or npm start.
- Ensure that the correct connection message appears in the terminal.

## How to Fork and Set Up Your Repository

### 1. Fork the StackBlitz Repository

- You’ll be provided with a StackBlitz link for this assignment.
- Open the link and click the **Fork** button to create your own editable copy.

### 2. Push to Your GitHub Repository

- You can either download and push the project manually, or push directly from StackBlitz.

#### Option A: Manual Push

1. Download the code from StackBlitz.
2. Open your terminal and run:

bash
git init
git remote add origin <your_github_repo_url>
git add .
git commit -m "Completed database connection assignment"
git push -u origin main

#### Option B: Direct Push via StackBlitz

- Use the "Push to GitHub" option in StackBlitz to connect and push the repository.

### 3. Submit Your Work

- Once your code is on GitHub:

  1. Copy your GitHub repository URL.
  2. Submit the link on the assignment submission portal.

#### Format:

https://github.com/<your_username>/<repository_name>

### Example Submission

If your GitHub username is riyaCodes and the repo name is inventory-backend, submit:
https://github.com/riyaCodes/inventory-backend
