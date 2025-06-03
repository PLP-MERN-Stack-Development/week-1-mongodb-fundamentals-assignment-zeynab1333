// TASK 1
use plp_bookstore;
db.createCollection("books")

 //TASK 2
 node insert_books.js
 db.books.find({genre:"Fantasy"})
 db.books.find({published_year:{$gt: 1950}})
 db.books.find({author: "George Orwell"})
 db.books.updateOne( { title: "Pride and Prejudice"}, { $set: { price: 10.33} } )
 db.books.find( {title: "The Hobbit" } )

 //TASK 3
 db.books.find( { in_stock: true, published_year: { $gt: 2010} } )
 db.books.find( {}, { title: 1, author: 1, price: 1, _id: 0 } )
 //ascending and descending order
 db.books.find({}, { title: 1, price: 1, _id: 0}).sort({ price: 1})   
 db.books.find({}, { title: 1, price: 1, _id: 0}).sort({ price: -1}) 
 //limit and skip methods
 db.books.find().limit(5)
 db.books.find().skip(5).limit(5)

 //TASK 4
db.books.aggregate([ { $group: { _id: "$genre", averagePrice: { $avg: "$price"} } } ])
db.books.aggregate([ { $group: { _id: "$author", bookCount: { $sum: 1} } }, { $sort: { bookCount: -1} }, { $limit: 1} ])
db.books.aggregate([{ $project: { decade: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] } } }, { $group: { _id: "$decade", count: { $sum: 1 } } }, { $sort: { _id: 1 } }])

// TASK 5
// 1. Create index on title
db.books.createIndex({ title: 1 }) // Helps speed up title searches

// 2. Compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 }) 

// 3. Explain query using index
db.books.find({ title: "Moby Dick" }).explain("executionStats")
// Output shows IXSCAN used and totalDocsExamined: 1 (fast!)


 

