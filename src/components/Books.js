import React from "react";
import Book from "./Book";

class Books extends React.Component {
  constructor(props) {
    super(props);
  }

  //map over books results array and pull out details for each book.
  render() {
    return (
      <div>
        <div className="book__info" id="book__info">
          <ul>
            {this.props.books.map(book => {
              return (
                <Book
                  book={book}
                  bookID={book.id}
                  key={book.id}
                  handleFavourite={this.props.handleFavourite}
                />
              );
            })}
          </ul>
        </div>
        <div className="favourites">
          <ul>
            {this.props.favourites.map(book => {
              return (
                <li>
                  <h5>{book}</h5>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Books;
