# Welcome our car buy/sell website.

This project aims to create a website that allows for users to buy and sell pre-owned vehicles.

To get started, if open your terminal and move to the directory that you would like to install this code. From there, make sure you have the link to this repository in your clipboard, if not, copy this: `https://github.com/nisargbharucha/FinalProjectDataManagement.git`.
Head back into your terminal and type
`git clone https://github.com/nisargbharucha/FinalProjectDataManagement.git` . This should move all the source code into the directory that you specified earlier.
From here, go to your code editor of choice (preferably VS Code, but any works), and open that root directory called `FinalProjectDataManagement` that is now on your computer in it.
Create two new terminals, in one, type `cd client` and for the other, type `cd server`.
- In the client terminal, start by typing `npm install`, which will install all the required dependencies.
- In the server terminal, type `npm install`, which install all the required dependencies.

To create the SQL database, open your MySQL workbench and make sure you have a local connection setup already. From there, you can run the SQL code in `databaseSchema.txt` file in this repository. Take note of your credentials when making the local connection. 

Before you can get to running the code, you must change the database credentials in `server/src/database.js` . Now you are ready to run the code.

To do this, start by typing in `npm start` in the client terminal. This should be running on port 3000, and automatically open a browser tab in your default browser at the following URL: `localhost:3000`.
Then, type in `node app.js` in the server terminal. This should run the server backend on port 3001. 
**NOTE: The server and client should be running on different ports. You can check by looking at the terminal that you ran on for each.**

Now, head over to that browser tab that was created when typing `npm start` in the client terminal. You should see the dashboard of the website.
