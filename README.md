# OFRA BH

![OFRA BH Logo](./public/images/ofra-logo.png)

## Description

OFRA BH is a MEN Stack web application for displaying and managing beauty products.

Users can browse products and view their details. Signed-in users can add products, and only the user who created a product can edit or delete it.

The app uses authentication, full CRUD functionality, RESTful routes, and a relationship between the User and Product models.

## User Stories

* As a user, I want to visit the homepage so I can understand what the app is about.
* As a user, I want to sign up so I can create an account.
* As a user, I want to sign in so I can access more features.
* As a user, I want to view all products.
* As a user, I want to view one product and its details.
* As a signed-in user, I want to add a new product.
* As a user, I want to edit products that I created.
* As a user, I want to delete products that I created.
* As a user, I want to sign out when I am finished.

## Wireframes

The wireframes include:

* Home page
* Products page
* Product details page
* Add product page
* Edit product page
* Sign-up page
* Sign-in page

**Wireframe Link:**
will be added here 

## ERD

The app has two models: will be added soon 

### User

* username
* password

### Product

* name
* category
* shade
* price
* description
* image
* stock
* owner

### Relationship

* One User can create many Products.
* Each Product belongs to one User.
* The `owner` field in Product references the User who created it.

```text
User
 |
 | creates
 |
 ↓
Product
```

## RESTful Routes

* `GET /products` - shows all products
* `GET /products/new` - shows the form to add a product
* `POST /products` - creates a new product
* `GET /products/:productId` - shows one product
* `GET /products/:productId/edit` - shows the edit form
* `PUT /products/:productId` - updates a product
* `DELETE /products/:productId` - deletes a product

## Screenshots

Screenshots will be added when the app is finished.

## Getting Started

**Deployed App:**
will be added as soon as its done


To use the app:

* Open the homepage.
* Browse the products.
* Click a product to view its details.
* Sign up or sign in.
* Add a new product.
* Edit or delete products that you created.
* Sign out when finished.

## Technologies Used



## Attributions



## Next Steps
