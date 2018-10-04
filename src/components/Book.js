import React from "react";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.retrieveBook = this.retrieveBook.bind(this);
    this.state = {
      click: false
    };
  }

  retrieveBook(book) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
      .then(response => response.json())
      .then(book => {
        console.log(book);
        this.setState({
          currentBook: book.items[0]
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({ click: !this.state.click });
    this.retrieveBook(this.props.bookID);
  }
  render() {
    return (
      <div>
        <img
          onClick={this.handleClick}
          className="book"
          src={this.props.book.volumeInfo.imageLinks.thumbnail}
        />
        <div>
          <h3>
            {this.props.book.volumeInfo.title},
            {this.props.book.volumeInfo.authors}
          </h3>
        </div>
        {this.state.click && this.state.currentBook ? (
          <div>
            <p>
              {this.state.currentBook.volumeInfo.categories},
              {this.state.currentBook.volumeInfo.pageCount}
              p.
            </p>
            <p>{this.state.currentBook.volumeInfo.description}</p>
            <p>
              {this.state.currentBook.volumeInfo.publisher}, Published:
              {this.state.currentBook.volumeInfo.publishedDate}, ISBN13:
              {
                this.state.currentBook.volumeInfo.industryIdentifiers[0]
                  .identifier
              }
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Book;
