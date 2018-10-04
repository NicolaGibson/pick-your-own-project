import React from "react";
import Book from "./Book";

class Books extends React.Component {
  constructor(props) {
    super(props);
  }

  //map over books results array and pull out details for each book.
  render() {
    return (
      <div className="books" id="books">
        <ul>
          {this.props.books.map(book => {
            return <Book book={book} bookID={book.id} key={book.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Books;
