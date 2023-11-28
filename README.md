# Blog Website

This is a full-stack MERN application that allows users to create, read, update, and delete blog posts. It is built using React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for the database.

![Home Page](https://github.com/Vyom-26/Blog-Website/assets/128027346/c3145e83-0caf-474d-8392-36888d849f0a)

### Features

• Users can create, read, update, and delete blog posts.

• Users can view a list of all blog posts.

• Users can view a single blog post.

• Users can search for blog posts by title.


### Getting Started

To get started, you will need to install the following dependencies:

• Node.js

• npm

• MongoDB


## Installation

Setting Up the frontend:

1. Clone the project repository:
```bash
git clone [https://github.com/Vyom-26/Blog-Website.git](https://github.com/Vyom-26/Blog-Website.git)
```

2. Navigate to the frontend directory:
```
cd Blog-Website/client/frontend
```

3. Install the frontend dependencies:
```
npm install
```

4. Start the frontend development server:

```
npm start
```

Setting Up the Backend

1. Navigate to the backend directory:
```
cd Blog-Website/api
```

2. Install the backend dependencies:
```
npm install
```

3. Start the backend server:
```
nodemon index.js
````



## Accessing the Application

1. The frontend is running on port 3000. Open a web browser and go to `http://localhost:3000` to view the application.
2. The backend is running on port 4000. This is for the API and not directly accessible to users.

## User Registration and Login

1. Users can either register for a new account or log in using their existing credentials.

2. Upon successful registration or login, users are redirected to the home page.


## Creating New Posts

1. Logged-in users can create new blog posts by clicking the "Create New Post" button in the header.

2. A new post creation form appears, allowing users to enter the post title, content, and tags.

3. Upon submitting the form, the post is created and saved to the database.

4. The user is redirected to the home page, where the newly created post is displayed at the top.

   ![newposthome](https://github.com/Vyom-26/Blog-Website/assets/128027346/3995599b-d6fa-4db4-904d-f7faece8c1cd)
   
## Post Display and Interaction

1. The home page displays a list of all blog posts, sorted by their creation date.

2. Each post includes the author's username, the post title, a brief excerpt, and the creation date.

3. Clicking on a post opens the full post view, displaying the entire post content.

4 .Logged-in users can like and comment on posts by clicking the respective buttons.

   ![newpost1](https://github.com/Vyom-26/Blog-Website/assets/128027346/1f1885cb-898f-47c6-961a-eec254d5d695)

## Post Editing and Management

1. The author of a post has an "Edit Post" button next to their post on the home page.

2. Clicking the "Edit Post" button opens the post creation form with the existing post details pre-filled.

3. The author can make any desired changes to the post title, content, or tags.
Upon submitting the form, the updated post is saved to the database.
 
4. The user is redirected to the updated post view, reflecting the changes.

   ![newposthome2](https://github.com/Vyom-26/Blog-Website/assets/128027346/28827992-0ccc-4701-8654-b2de0d258015)

## Database Management

1. The application utilizes a MongoDB database to store user information, posts, likes, and comments.

2. User data is stored in a separate collection, while posts, likes, and comments are stored in their respective collections.

3. The application uses MongoDB's CRUD operations (Create, Read, Update, Delete) to manage data.


<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p>


## Support

For support, email vyomgoyal2004@gmail.com

