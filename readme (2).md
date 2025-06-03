# 📘 PLP Bookstore – MongoDB Queries

This project contains MongoDB queries for managing and analyzing bookstore data, including CRUD operations, advanced queries, aggregations, and indexing.

## 🛠️ Requirements

- MongoDB installed locally **or** access to the MongoDB Atlas cluster provided by the instructor
- MongoDB Shell (`mongosh`)

## 📂 Project Structure

queries.js # Contains all MongoDB queries (CRUD, aggregation, indexing)
README.md # Instructions for running the queries

markdown
Copy
Edit

## ▶️ How to Run

1. **Open your terminal** and start the MongoDB shell:

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