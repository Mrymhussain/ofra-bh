# OFRA BH

![OFRA BH Logo](./public/images/ofra-logo.png)

## Description

OFRA BH is a MEN Stack web application for displaying and managing beauty products.

Users can browse products and view their details. Signed-in users can add products, and only the user who created a product can edit or delete it.

The app uses authentication, full CRUD functionality, RESTful routes, and a relationship between the User and Product models.

## User Stories

* As a user, I want to visit the homepage and understand the website.
* As a user, I want to sign up and create an account.
* As a user, I want to sign in to use the website.
* As a user, I want to browse products by category.
* As a user, I want to view the details of a product.
* As a user, I want to add products to my cart.
* As a user, I want to remove products from my cart.
* As a user, I want to confirm my order.
* As a user, I want to sign out when I am finished.
* As an admin, I want to add new products.
* As an admin, I want to edit products.
* As an admin, I want to delete products.


## Wireframes

The wireframes show the planned layout for:

* Home page
* Products page
* Product details page
* Add product page
* Edit product page
* Sign-up page
* Sign-in page

![OFRA BH Wireframes](./public/images/wireframes.png)

## ERD

The app has two models: User and Product.

![OFRA BH ERD](./public/images/erd.png)

### User

* `_id`
* `username`
* `password`

### Product

* `_id`
* `name`
* `category`
* `shade`
* `price`
* `description`
* `image`
* `stock`
* `owner`

### Relationship

* One User can create many Products.
* Each Product belongs to one User.
* The `owner` field in Product references the User who created it.

## RESTful Routes

### Product Routes

| Action | Route                       | HTTP Verb |
| ------ | --------------------------- | --------- |
| Index  | `/products`                 | GET       |
| New    | `/products/new`             | GET       |
| Create | `/products`                 | POST      |
| Show   | `/products/:productId`      | GET       |
| Edit   | `/products/:productId/edit` | GET       |
| Update | `/products/:productId`      | PUT       |
| Delete | `/products/:productId`      | DELETE    |


## Getting Started

## Deployed App
[View OFRA BH ](https://ofra-bh.onrender.com/)

To use the app:

* Open the homepage.
* Browse the products.
* Click a product to view its details.
* Sign up or sign in.
* Add a new product.
* Edit or delete products that you created.
* Sign out when finished.

## Technologies Used

- MEN Stack
  - MongoDB
  - Express.js
  - Node.js
- Mongoose
- EJS
- HTML
- CSS
- JavaScript

## Future Work 
* Add product search.
* Add available and sold-out status.
* Add an online payment option.
* Add order history for customers.
