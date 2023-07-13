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
  

http://mongoosejs.com/docs/api.html#model-js

http://mongoosejs.com/docs/api.html#document-js

Relationships and joins with population
 ref and the name of the model such as in the posts field of userSchema:

const postSchema = Schema({
  _creator: {type: Number, ref: 'User'},
  title: String,
  text: String,
})

ObjectId, Number, String, and Buffer are valid data types to use as references, meaning they will work as foreign keys in the relational DB terminology.

.populate
.findOne({name: /azat/i})
  .populate('posts')
  //.populate({
    path: 'posts',
    select: 'title',
  options: {
    limit: 10,
    sort: 'title'
  }
})
  .exec((err, user) => {
    if (err) return handleError(err) // Defined elsewhere
    console.log('The user has % post(s)', user.posts.length)
  })

    options: {limit: 10, sort: 'title'}

    .find({}, {
    limit: 10,
    sort: {_id: -1}})
  .populate('posts')
  .exec((err, user) => {
    if (err) return handleError(err)
    console.log('The user has % post(s)', user.posts.length)
  })
Tip

strict atomization of data.

The document storage model in NoSQL databases is well suited to use nested documents
 
const userSchema = new mongoose.Schema({
  name: String,
  posts: [mongoose.Schema.Types.Mixed]
})
// Attach methods, hooks, etc.
const User = mongoose.model('User', userSchema)

https://docs.mongodb.com/manual/reference/operator/update/push/