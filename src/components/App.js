import React from "react";
import Search from "./Search";
import "../styles/components/app.scss";
import Books from "./Books";
import Book from "./Book";

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generalBookSearch = this.generalBookSearch.bind(this);
    this.handleFavourite = this.handleFavourite.bind(this);

    this.state = {
      bookSearch: "",
      images: [],
      books: [],
      favouriteBook: []
    };
  }

  componentDidMount() {}

  handleFavourite(bookTitle) {
    console.log(bookTitle);
    const favouriteCopy = this.state.favouriteBook.splice(0);
    favouriteCopy.push(bookTitle);
    this.setState({
      favouriteBook: favouriteCopy
    });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ bookSearch: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.generalBookSearch(this.state.bookSearch);
  }

  generalBookSearch(bookSearch) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookSearch}`)
      .then(function(response) {
        return response.json();
      })
      .then(body => {
        console.log(body);
        this.setState({ books: body.items });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="app">
        <header>
          <h2 className="title">
            <b>Virtual Library</b>
          </h2>
        </header>
        <Search
          onSubmit={this.handleSubmit}
          inputText={this.state.bookSearch}
          handleChange={this.handleChange}
        />
        <Books
          books={this.state.books}
          favourites={this.state.favouriteBook}
          handleFavourite={this.handleFavourite}
          deleteFavouriteHandler={this.deleteFavouriteHandler}
        />
      </div>
    );
  }
}

export default App;
