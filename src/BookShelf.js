import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component{

    render() {

        const { books } = this.props;
        const { liftValue } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <Book book={book} key={book.id} liftValue={(value)=>{liftValue(value, book)}}/>
                        ))}
                    </ol>
                </div>
            </div>

        )
    }

}

export default BookShelf