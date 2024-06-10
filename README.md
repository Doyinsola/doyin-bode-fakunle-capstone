# Overview

A app that curates free learning resources for users.

### Problem

When attempting to learn a new skill, the information out there can be overwhelming. It can also be difficut to find high quality free resources to learn from. The data would be scraped from Youtube, Medium and other free resources online.

### Features

- Users should be able to find content by using the filter criteria provided
- Users should be able to like content
- Users should be able to add comments to content
- Users should be able to like comments
- Users should be able to delete comments
- Users should be able to create an account
- Users should be able to log in to their account

## Implementation

### Tech Stack

- React
- Javascript
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express
  - password hashing - bcrypt

### APIs

- No external APIs will be used for the first release

### Sitemap

- Home page - featured content
- Category Content page
- Content Details page
- Register
- Login

### Mockups

[Link to mockups](https://www.figma.com/board/llbBH6qIP8jyZpmzIiTZNU/capstone-mockups?node-id=0-1)

### Data

[Link to database schema](https://drawsql.app/teams/doyinsolas-team/diagrams/capstone-db)

### Endpoints

**GET /featured-content**

- Get content that have been marked as featured

Parameters:

- featured = true

Response:

```
[
    {
        "id": 1,
        "name": "Learn React",
        "about": "summary about content",
        "likes": 10,
        "image": "abc.png",
        "featured": true,
        "category":["category 1","category 2"]
    },
    ...
]
```

**GET /content/:id**

- Get content by id

Parameters:

- id: content id

Response:

{
"id": 1,
"name": "Learn React",
"about": "summary about content",
"likes": 10,
"image": "abc.png",
"featured": true,
"category":["category 1","category 2"],
"description":"detailed explanation of content",
"URL":"external link to content"
}

**PATCH /content/:id/like**

- Users can like content, likes incremented by 1

Parameters:

- id: content id

Response:

```
{
    "id": 1,
    "name": "Learn React",
    "likes": 11,
    "updated_at": "2024-06-10T02:24:03.000Z"
},
```

**GET /content/:id/comments**

- Get all comments for a particular content

Parameters:

- id: contentId

Response:

```
[
    {
        "name": "Gregory House",
        "comment_text": "Took the course to prove I can learn anything",
        "id": 3,
        "likes": 0,
        "timestamp": "2024-06-09T17:47:36.000Z"
    },
    ...
]
```

**POST /content/:id/comments**

- user can add comment to content

Parameters:

- id: content id
- newComment: comment posted by user

Response:

```
{
        "name": "Gregory House",
        "comment_text": "I have learnt so much!",
        "id": 9,
        "likes": 0,
        "timestamp": "2024-06-10T02:27:33.000Z"
}
```

**DELETE /content/:contentId/comments/:commentId**

- Logged in user can delete a comment
  Parameters:
- id: content id

Response:

```
status: 204 No Content
```

**PATCH /content/:contentId/comments/:commentId/like**

- Users can like a comment

Parameters:

- contentId
- commentId

Response:

```
{
    "name": "Janice Rodriguez",
    "comment": " My go-to source for staying updated on tech trends. ",
    "id": "1",
    "likes": 2,
    "timestamp": 1691558262000
}
```

**GET /categories**

- Filter and return only categories with content attached

Response:

```
[
    {
        "category_id": 1,
        "category_name": "Programming"
    },
    {
        "category_id": 2,
        "category_name": "Python"
    },
    ...
]
```

**GET /categories/:categoryId**

- Get a particular category by id

Parameters:

- categoryId

Response:

```
{
    "category_id": 1,
    "category_name": "Programming"
}
```

**GET /categories/:categoryId/content**

- Filter and return only contents belonging to a particular category

Parameters:

- categoryId

Response:

```
[
    {
        "id": 1,
        "name": "Introduction to Python Programming",
        "about": "Get started writing Python with this introductory course.",
        "likes": 15,
        "image_URL": "images/programming.png",
        "featured": 1,
        "category_name": "Programming"
    },
    ...
]
```

**POST /users/register**

- Add a user account

Parameters:

- first_name: User's first name
- last_name: User's last name
- email: User's email
- password: User's provided password

Response:

message: User registered successfully!

**POST /users/login**

- Login a user

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
    "token": "token_value"
}
```

### Auth

- JWT auth
  - To be added after core features have first been implemented
  - Store JWT in SessionStorage to be removed when the user logs out

## Roadmap

- Create server

  - express project with routing, with placeholder 200 responses

- Create client

  - react project with routes and boilerplate pages

- Create migrations
- Gather sample content with a least 5 different categories
- Create seeds with sample content data
- Deploy client and server projects so all commits will be reflected in production
- Feature: Home page

  - CREATE GET /featured content
  - CREATE GET /categories
  - Create UI to display featured content and genres

- Feature: Content by ID

  - Create GET /content/:id endpoint
  - Create UI to display content details

- Feature: Like Content

  - Create PUT /content/:id/like
  - Add UI for liking content

- Feature: Like a Comment

  - Create PUT /content/:contentId/comments/:commentId
  - Create UI for liking comments

- Feature: Add Comment

  - Create POST /content/:id/comments
  - Create Add comments Form

- Feature: Delete Comment

  - Create DELETE /content/:contentId/comments/:commentId
  - Create UI for deleting comments

- Feature: Create account

  - Create POST /users/register endpoint
  - Implement register page + form

- Feature: Login

  - Create POST /users/login endpoint
  - Implement login page + form

- Feature: Implement JWT tokens

  - Server: Update expected requests / responses on protected endpoints
  - Client: Store JWT in local storage, include JWT on axios calls

- Bug fixes
- DEMO DAY

## Nice-to-haves

- Users should be able to find content based on search criteria entered
- Ability to add new learning resources the found to the site
- End-user accounts

  - Delete only comments associated with their account
  - Remove likes from comments
  - Should be able to login to into their account to manage saved content
  - Logged in end-user should be able to add comments to content

- Forgot password functionality
- Resource creator/instructor account

  - Ability to pay for free content to be featured on the home page

## Installation Instructions

- Git clone the project to get it locally
- Run `npm install` to get install dependencies
- Set up .env file:
  - include link to backend server `REACT_APP_SERVER_URL=http://localhost:8080` (port may be different depencing on what you have set up)
- Run `npm start` to start the app
- Data may not be populated in backend server is not running, [link](https://github.com/Doyinsola/doyin-bode-fakunle-capstone-api/blob/main/README.md) to setting up backend
