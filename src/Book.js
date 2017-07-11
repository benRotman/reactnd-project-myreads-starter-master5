import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'
import { Link } from 'react-router-dom'

class Book extends Component{

    liftValue(value) {
        this.props.liftValue(value,this.props.book);
    }



    render() {

        const { book } = this.props;

        return (
            <li key={book.id}>

                <div className="book">
                    <div className="book-top">
                        {book.imageLinks  && (
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        )}
                        <BookShelfChanger book={book} liftValue={this.liftValue.bind(this)}/>
                    </div>
                    <div className="book-title">{book.title}</div>
                    {book.authors  && (
                        <div className="book-authors">{book.authors[0]}</div>
                    )}

                </div>
            </li>

        )
    }

}

export default Book