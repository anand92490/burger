# 🍔 Eat-da-Burger!

Eat-Da-Burger! is a burger logger app that lets users input the names of burgers they'd like to eat and devour the burger virtually.

##### https://powerful-brushlands-10172.herokuapp.com/

## Overview

This application is created using MySQL, Node, Express, Handlebars and ORM to log the burgers. It uses MVC (Model View Controller) design pattern. Node and MySQL are used to query and route data in the app, and Handlebars to generate the HTML.

 ## Directory structure
 
```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       ├── img
│       │   └── burger.png
│       └── js 
│            └── burger.js
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
## Screenshot

![](public/assets/img/burgerapp.png)
