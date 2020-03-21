# **WhatDoNow?**

Simple app designed to give suggestions for things to do in Wellington, NZ. 
Activities are randomly generated at the click of a button and can be changed based on high intensity or low intensity to suit 
personal energy levels.

## **The Tech**

* [React](https://reactjs.org/docs/getting-started.html)
* [Redux](https://redux.js.org/)
* [Express](https://expressjs.com/en/api.html)
* [Knex.js (SQL)](https://knexjs.org/)
* [React-Router](#)
* [SQLite3](https://www.sqlite.org/index.html)

## **Setup**

Run the following commands in your terminal:

```sh
npm install
npx knex migrate:latest
npx knex seed:run
```

To run in development:
```sh
npm run dev
```
