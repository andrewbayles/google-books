// Require mongoose
var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the booksSchema with the schema object
var booksSchema = new Schema({
  // The headline is the article associate with the note
  _bookId: {
    type: Schema.Types.ObjectId,
    ref: "Book"
  },
  // date is just a string
  title: String,
  authors: [],
  description: String,
  image: String,
  link: String
});

// Create the Note model using the noteSchema
var Books = mongoose.model("Books", booksSchema);

// Export the Note model
module.exports = Books;