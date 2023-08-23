Task description
----------------

Your task is to implement a service providing a GraphQL API using the Apollo framework for managing collections of orders.

### Requirements

Your task is to deliver an ApolloServer instance that fulfills the following requirements:

*   The main query must contain an `orders` query which returns the collection of all orders (type: `Order`; see last requirement for data definitions).
    
*   The `orders` query must allow orders to be filtered by status (`orders(status: Status)`), which yields a list of returned orders equal to the given status.
    
*   The main query must contain an `order(id: String)` query which returns an `Order` found by `id` (see `Order` data definition).
    
*   The API must contain a mutation `updateStatus(id: ID, status: Status)` which updates the status of an order with a given `id` to the provided `status`. `Status` is an enumeration of `PENDING`, `PAID`, `IN_PROGESS`, `IN_DELIVERY`, `DELIVERED`. The mutation must return the whole `Order` object in response.
    
*   All mutations and queries must operate on a local SQLite database. You can find the implementation of the data access class in the `db.js` file.
    
*   You can check the database structure in the `db.js` file (`initialize` method). An important thing to note is that the `items` column stores items as a comma-separated list of items, e.g. `"1,2,3,4"`, while in the API this must be returned as a JSON array (see schema definition below).
    
*   Schema definition:
    
    *   `Order`:
        
        *   `id`: required; type ID
        *   `deliveryAddress`: required; type String
        *   `items`: required; array of type String (contains array of item IDs)
        *   `total`: required; type Float
        *   `discountCode`: optional; type String
        *   `comment`: optional; type String
        *   `status`: required; enumeration of `PENDING`, `PAID`, `IN_PROGESS`, `IN_DELIVERY`, `DELIVERED` (use GraphQL enumeration)

*   Examples of correct queries:

    {
      query {
        order(id: 1) {
          id
          total
          discountCode
          comment
          items
          status
          deliveryAddress
        }
      }
    }
    

    {
      mutation {
        updateStatus(id: 1, status: PAID) {
          id
        }
      }
    }
    

### Hints:

*   Use the `db` object provided in `server.js` through the `dataSources` feature of `Apollo Server`
*   The task uses the following versions of the dependencies:

    {
      "dependencies": {
        "apollo-datasource": "0.7.0",
        "apollo-server": "2.10.0",
        "sqlite3": "4.1.1"
      }
    }
