import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import { Link } from 'react-router-dom'

class BookShelf extends Component{

    liftValue(value, book) {
        this.props.liftValue(value, book);
    }

    render() {

        const { books } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <Book book={book} key={book.id} liftValue={this.liftValue.bind(this)}/>
                        ))}
                    </ol>
                </div>
            </div>

        )
    }

}

export default BookShelf