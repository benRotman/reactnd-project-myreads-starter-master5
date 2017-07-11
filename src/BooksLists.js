import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class BooksLists extends Component{


    static propTypes = {
        books:PropTypes.array.isRequired,
    }

    liftValue(value,book) {
        this.props.liftValue(value,book);
    }


    render() {


        const { books } = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                       <BookShelf liftValue={this.liftValue.bind(this)} shelf="Currently Reading" books={books.filter((b) => b.shelf === 'currentlyReading')}/>
                       <BookShelf liftValue={this.liftValue.bind(this)} shelf="Want To Read" books={books.filter((b) => b.shelf === 'wantToRead')}/>
                       <BookShelf liftValue={this.liftValue.bind(this)} shelf="Read" books={books.filter((b) => b.shelf === 'read')}/>
                    </div>
                </div>
                <div className="open-search">

                    <Link to="/search">Add a book</Link>
                </div>
            </div>

        )
    }

}

export default BooksLists