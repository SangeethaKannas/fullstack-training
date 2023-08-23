Task description
----------------

Your task is to implement a service with couple of endpoints accessing a database through the Sequelize library.

### Requirements

Given a Postgres database with the following table loaded:

    CREATE TABLE notes (
        id SERIAL PRIMARY KEY,
        added VARCHAR(255) NULL,
        author VARCHAR(255) NOT NULL,
        content VARCHAR(255) NOT NULL
    );
    

implement the following endpoints in a service written in Express.js.

### `GET /notes`

This endpoint returns all notes stored in the database in the `notes` table. Status code `200` is returned and all the notes in the response body:

    {
      "notes": [
        {
          "id": 1,
          "added": "2019-11-23",
          "author": "John",
          "content": "Remember to buy some milk"
        },
        {
          "id": 2,
          "added": "2019-11-24",
          "author": "Jane",
          "content": "Buy cereals..."
        }
      ]
    }
    

This endpoint also accepts a query parameter, `author`, which allows filtering by author name. For example, the request `GET /notes?author=John` would filter the above response body and return:

    {
      "notes": [
        {
          "id": 1,
          "added": "2019-11-23",
          "author": "John",
          "content": "Remember to buy some milk"
        }
      ]
    }
    

### `GET /notes/:id`

This endpoint returns a note stored under `id`, equal to a note's ID from the database. Status code `200` is returned and the note in the response body:

For example, `GET /notes/1` should return:

    {
      "note": {
        "id": 1,
        "added": "2019-11-23",
        "author": "John",
        "content": "Remember to buy some milk"
      }
    }
    

If the note with the given ID is not found, a `404` status code is returned.

### `POST /notes`

This endpoint creates a new note in the database. It accepts a string `author`, a string `content`, and a string `added` in the body of the request. `author` and `content` are required; `added` is an optional string which represents a date but does not have to be validated in any way and can be treated as a plain string.

Example of a valid body:

    {
      "added": "2019-11-29",
      "author": "John",
      "content": "No milk this time"
    }
    

or:

    {
      "author": "John",
      "content": "No milk this time"
    }
    

If not all required fields are present, status code `422` must be returned.

It stores a new note with the provided data in the database, in the `notes` table. It returns status code `201` and no body.

### Hints

*   The database is already created for you, do not force syncing DB by `sequelize.sync` or anything like this. This could break the evaluation.
*   The dependencies used in this task are in the following versions:

    {
      "dependencies": {
        "pg-hstore": "2.3.3",
        "sequelize": "5.21.5",
        "body-parser": "1.19.0",
        "express": "4.17.1"
      }
    }
