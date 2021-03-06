import React, { Component } from 'react'

class BookShelfChanger extends Component{



    onBookShelfChange = (book, target) => {
        this.props.liftValue(target);
    }

    render() {

        const { book } = this.props;
        return (
            <div className="book-shelf-changer">

                <select onChange={event => this.onBookShelfChange(book, event.target.value)} value={book.shelf}>
                    <option disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }

}

export default BookShelfChanger