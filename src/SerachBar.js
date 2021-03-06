import React, { Component } from 'react';
import Book from './Book'
import { Link } from 'react-router-dom'

class SearchBar extends Component{

    state = {
        query: ''
    };

    updateQuery = (query) => {
        let _query = query.trim();
        this.setState({query:_query});
        this.props.filterBooks(_query,100);
        //console.log(this.state);
    };

    liftValue(value,book) {
        this.props.liftValue(value,book);
    }

    resetBookList() {
        this.props.resetBookList();
    }

    clearQuery = () => {
        this.setState({ query: '' })
    };

    render() {

        const { books } = this.props;
        const { myListBooks } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" onClick={this.resetBookList.bind(this)}>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                               onChange={(event) => this.updateQuery(event.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            books.map((book) => {
                                //console.log(book);
                                let sameBook = myListBooks.filter((myListBook)=>
                                myListBook.id === book.id)

                                if(sameBook.length>0) {
                                    //console.log(sameBook);
                                    book.shelf = sameBook[0].shelf;
                                    //console.log(sameBook);
                                }
                                return (
                                    <Book book={book} key={book.id}
                                          updateQuery={this.updateQuery.bind(this)}
                                          liftValue={this.liftValue.bind(this)}
                                    />
                                    )


                            })
                        }

                    </ol>
                </div>


            </div>


        )
    }
}

export default SearchBar