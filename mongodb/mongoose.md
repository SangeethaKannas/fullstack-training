data as documents similar to json
data is placed in collections

 no need for strongly defined database schema
 
 
 mongoose - Object Document Mapper ( ODM )
 
 String
Number
Date
Buffer
Boolean
Mixed
ObjectId
Array
Each data type allows you to specify:

a default value
a custom validation function
indicate a field is required
a get function that allows you to manipulate the data before it is returned as an object
a set function that allows you to manipulate the data before it is saved to the database
create indexes to allow data to be fetched faster

Buffer, Mixed, ObjectId, and Array.

Mongoose schemas
  References using objectId
  
  

find
   where, and, limit
   
   
findByIdAndUpdate


Virtuals

  useful for formatting or combining fields, while setters are useful for de-composing a single value into multiple values for storage
  
