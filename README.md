MyPortfolio - MERN Stack Website

1.Description:

    MyPortfolio is a dynamic and fully responsive website built using the MERN stack (MongoDB, Express, React, and Node.js). The website serves as a professional platform to showcase my projects, skills, and achievements. It highlights a clean and modern user interface with a seamless user experience, making it easy for visitors to explore my portfolio.


2.Features:

    Home Page: A welcoming landing page that provides a brief introduction and navigates users to explore more.

    Projects Section: A visually appealing section displaying all projects in card format, with detailed descriptions, technologies used, and a link to the project code.

    Contact Section: A form where visitors can reach out directly through the website.

    Navbar: A smooth and intuitive navigation bar to switch between sections of the site easily.

    Contact Form Feature: Users can contact me via the **Contact Page** on my portfolio. By following details:
                            1. Name
                            2. Email
                            3. Message


3.Tech Stack:

    Frontend:-----
    React.js
    Bootstrap 5
    CSS (Custom styles)

    Backend:------
    Node.js
    Express.js

    Database:-----
    MongoDB (Mongoose for schema management)


4.Prerequisites:
    -Node.js (v16 or later)
    -MongoDB installed locally or access to a MongoDB Atlas cluster

    Set up environment variables:-----------
    -Create a .env file in the root directory.
    -MONGO_URI=your_mongodb_connection_string
    PORT=5000


5.Start the development server:
    Backend:-  node server.js
    frontend:-  npm start

    Server running on:  http://localhost:8000
    You can now view frontend in the browser and visit: http://localhost:3000


6.Directory Structure:

    MyPortfolio/
    |┃-- client/ (React frontend)
    |   |┃-- public/
    |   |┃-- src/
    |        |┃-- components/ (Reusable React components)
    |        |┃-- pages/ (Page-level components)
    |        |┃-- App.js
    |        |┃-- index.js
    |┃-- server/ (Node.js backend)
    |   |┃-- models/ (Mongoose schemas)
    |   |┃-- routes/ (Express routes)
    |   |┃-- app.js (Express setup)
    |┃-- .env (Environment variables)
    |┃-- package.json
