import React from "react";
import Search from "./Search";
import "../styles/components/app.scss";
import Books from "./Books";
import Book from "./Book";
// import Book from "./Book";
// import Favourites from "./Favourites";

//NY Times b666f90ba19a42df9358abd41cf7ac35
//NY Times "https://api.nytimes.com/svc/books/v3/lists/best-sellers/?api-key=b666f90ba19a42df9358abd41cf7ac35&title=remain"

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generalBookSearch = this.generalBookSearch.bind(this);

    this.state = {
      bookSearch: "",
      images: [],
      books: [],
      favouriteBook: []
    };
  }

  componentDidMount() {}

  //sets state of book search to the value of the search.
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
            <b>Book Search</b>
          </h2>
        </header>
        <Search
          onSubmit={this.handleSubmit}
          inputText={this.state.bookSearch}
          handleChange={this.handleChange}
        />
        <Books books={this.state.books} />
      </div>
    );
  }
}

export default App;
