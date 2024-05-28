# Overview

A app that curates free learning resources for users.

### Problem

When attempting to learn a new skill, the information out there can be overwhelming. It can also be difficut to find high quality free resources to learn from. The data would be scraped from Youtube, Medium and other free resources online.

### Features

- Users should be able to find content based on search criteria entered
- Users should be able to find content by using the filter criteria provided
- Users should be able to find the highest-rated content based on filter criteria
- Users should be able to like content
- Users should be able to create an account
- End-users should be able to login to into their account to manage saved content
- Logged in end-user should be able to add comments to content

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
  - password hashing

### APIs

- No external APIs will be used for the first sprint

### Sitemap

- Home page
- Content Details page
- Register
- Login

### Mockups

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

- id: content id, probably UUID

Response:

```
{
    "id": 1,
    "name": "Learn React",
    "about": "summary about content",
    "likes": 10,
    "image": "abc.png",
    "featured": true,
    "category":["category 1","category 2"],
    "details":"detailed explanation of content",
    "URL":"external link to content"
    "comments": [
              {
                  "name": "Noah Duncan",
                  "comment": "This content provides insights into the future of AI",
                  "id": "3",
                  "likes": 0,
                  "timestamp": 1691731062000
              },
              {
                  "name": "Terry Wong",
                  "comment": "This content is a fantastic overview of the AI landscape.",
                  "id": "2",
                  "likes": 0,
                  "timestamp": 1691644662000
              },
              {
                  "name": "Janice Rodriguez",
                  "comment": " My go-to source for staying updated on tech trends. ",
                  "id": "1",
                  "likes": 1,
                  "timestamp": 1691558262000
              }
          ]
}
```

**PUT /content/:id/like**

- Users can like content, likes incremented by 1

Parameters:

- id: content id, probably UUID

Response:

```
{
    "id": 1,
    "name": "Learn React",
    "about": "summary about content",
    "likes": 11,
    "image": "abc.png",
    "featured": true,
    "category":["category 1","category 2"]
},
```

**POST /content/:id/comments**

- Logged in user can add comment to content

Parameters:

- id: content id, probably UUID
- token: JWT of the logged in user
- newComment: comment posted by user

Response:

```
{
    "name": "Trudy Jankowski",
    "comment": "I really enjoyed this video! Thanks for posting",
    "id": 4,
    "timestamp": 1705084427000
},
```

**DELETE /content/:contentId/comments/:commentId**

- Logged in user can delete a comment
  Parameters:
- id: content id, probably UUID
- token: JWT of the logged in user

Response:

```
{
    "name": "Trudy Jankowski",
    "comment": "I really enjoyed this video! Thanks for posting",
    "id": 4,
    "timestamp": 1705084427000
},
```

**PUT /content/:contentId/comments/:commentId/like**

- Users can like a comment

Parameters:

- id: Café id
- token: JWT of the logged in user
- rating: Number Rating out of 5 in 0.5 increments

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

**GET /content/:category**

- Filter and return only contents belonging to a particular category

Parameters:

- Category === :category

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

**POST /users/register**

- Add a user account

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
    "token": "token_value"
}
```

**POST /users/login**

- Login a user

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
`    "token": "token_value"
`}
```

### Auth

- JWT auth
  - Before adding auth, all API requests requiring auth will use a dummy id
  - To be added after core features have first been implemented
  - Store JWT in localStorage to be removed when the user logs out

## Roadmap

- Create server

  - express project with routing, with placeholder 200 responses

- Create client

  - react project with routes and boilerplate pages

- Create migrations

- Gather 15 sample contents with 5 different genres

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

- Feature: Create account
  - Create POST /users/register endpoint
  - Implement register page + form
- Feature: Login
  - Create POST /users/login endpoint
  - Implement login page + form
- Feature: Add Comment

  - Create POST /content/:id/comments
  - Create Add comments Form

- Feature: Delete Comment

  - Create DELETE /content/:contentId/comments/:commentId
  - Create UI for deleting comments

- Feature: Implement JWT tokens

  - Server: Update expected requests / responses on protected endpoints
  - Client: Store JWT in local storage, include JWT on axios calls

- Bug fixes

- DEMO DAY

## Nice-to-haves

- Ability to add new learning resources the found to the site
- End-user accounts
  - Suggested content based on liked content
  - Delete only comments associated with their account
  - Remove likes from comments
- Forgot password functionality
- Resource creator/instructor account
  - Ability to pay for free content to be featured on the home page
