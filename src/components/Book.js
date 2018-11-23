import React from "react";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.retrieveBook = this.retrieveBook.bind(this);
    this.state = {
      click: false,
      currentBook: {}
    };
  }

  retrieveBook(book) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
      .then(response => response.json())
      .then(thisBook => {
        this.setState({
          currentBook: thisBook.items[0],
          click: !this.state.click
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleClick(event) {
    event.preventDefault();
    // this.setState({ click: !this.state.click });
    this.retrieveBook(this.props.bookID);
  }
  render() {
    return (
      <div className="book__container">
        <img
          onClick={this.handleClick}
          src={this.props.book.volumeInfo.imageLinks.thumbnail}
        />
        <div className="title__author">
          <h6>
            {this.props.book.volumeInfo.title},
            {this.props.book.volumeInfo.authors}
          </h6>
        </div>
        {this.state.click && this.state.currentBook ? (
          <div className="additional__info">
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
        <div>
          <button
            className="favourites__button"
            onClick={() =>
              this.props.handleFavourite(this.props.book.volumeInfo.title)
            }
          >
            &#10084;
          </button>
        </div>
      </div>
    );
  }
}
export default Book;
