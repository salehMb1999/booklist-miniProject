import React, { Component } from "react";
import Book from "./Book";

export default class AddForm extends Component {
  constructor() {
    super();

    this.state = {
      books: [],

      title: "",
      author: "",
      year: "",
    };
    this.titleChangeHandler = this.titleChangeHandler.bind(this);
    this.authorChangeHandler = this.authorChangeHandler.bind(this);
    this.yearChangeHandler = this.yearChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  titleChangeHandler(event) {
    this.setState({
      title: event.target.value,
    });
  }
  authorChangeHandler(event) {
    this.setState({
      author: event.target.value,
    });
  }
  yearChangeHandler(event) {
    this.setState({
      year: event.target.value,
    });
  }
  submitHandler(event) {
    event.preventDefault();
    if (this.state.title && this.state.author && this.state.year) {
      let newBook = {
        id: this.state.books.length + 1,
        title: this.state.title,
        author: this.state.author,
        year: this.state.year,
      };
      this.setState({
        books: [...this.state.books , newBook],
        title: "",
        author: "",
        year: "",
      });
      console.log(this.state.books);
    }
  }
  render() {
    return (
      <>
        <form id="book-form" autocomplete="off">
          <div className="form-group">
            <label for="title">Title</label>
            <input
              onChange={this.titleChangeHandler}
              type="text"
              id="title"
              className="form-control"
              value={this.state.title}
            />
          </div>

          <div className="form-group">
            <label for="author">Author</label>
            <input
              onChange={this.authorChangeHandler}
              type="text"
              id="author"
              className="form-control"
              value={this.state.author}
            />
          </div>

          <div className="form-group">
            <label for="year">Year</label>
            <input
              onChange={this.yearChangeHandler}
              type="text"
              id="year"
              className="form-control"
              value={this.state.year}
            />
          </div>
          <input
            onClick={this.submitHandler}
            type="submit"
            value="Add Book"
            className="btn btn-warning btn-block add-btn"
          />
        </form>
        <table class="table table-striped mt-5 text-center">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody id="book-list">
            {this.state.books.map((book, key) => (
              <Book {...book} key={book.id} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
