# 📘 PLP Bookstore – MongoDB Queries

This project contains MongoDB queries for managing and analyzing bookstore data, including CRUD operations, advanced queries, aggregations, and indexing.

---

## 🛠️ Requirements

- MongoDB installed locally **or** access to the MongoDB Atlas cluster provided by the instructor  
- MongoDB Shell (`mongosh`)

---

## 📂 Project Structure

queries.js # Contains all MongoDB queries (CRUD, aggregation, indexing)
README.md # Instructions for running the queries and tasks

yaml
Copy
Edit

---

## ▶️ How to Run

1. Open your terminal and start the MongoDB shell:

```bash
mongosh
Connect to the provided database (already set up by the instructor):

js
Copy
Edit
use plp_bookstore
Run the queries from your file by loading queries.js:

js
Copy
Edit
load("queries.js")
✅ This will execute all your queries automatically in the correct order.

📂 Tasks
Task 1: MongoDB Setup
Install MongoDB on your local machine OR set up a free MongoDB Atlas cluster

Create a new database called plp_bookstore

Create a collection called books

Task 2: Basic CRUD Operations
Use the provided insert_books.js script to insert at least 10 book documents into your collection

Each book should have the following fields:

title (string)

author (string)

genre (string)

published_year (number)

price (number)

in_stock (boolean)

pages (number)

publisher (string)

Write MongoDB queries to:

Find all books in a specific genre

Find books published after a certain year

Find books by a specific author

Update the price of a specific book

Delete a book by its title

Task 3: Advanced Queries
Write a query to find books that are both in stock and published after 2010

Use projection to return only the title, author, and price fields in your queries

Implement sorting to display books by price (both ascending and descending)

Use the limit and skip methods to implement pagination (5 books per page)

Task 4: Aggregation Pipeline
Create an aggregation pipeline to calculate the average price of books by genre

Create an aggregation pipeline to find the author with the most books in the collection

Implement a pipeline that groups books by publication decade and counts them

Task 5: Indexing
Create an index on the title field for faster searches

Create a compound index on author and published_year

Use the explain() method to demonstrate the performance improvement with your indexes
