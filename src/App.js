import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBar from './SerachBar'
import BooksLists from './BooksLists'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    Books:[],
    FilteredBooks: []
  }


  componentDidMount() {
    BooksAPI.getAll().then((Books) => {
      console.log('get all',Books);
      this.setState({Books});
    });
  }

  updateBook(value,book) {
    //this.props.liftValue(value);
    BooksAPI.update(book, value).then(() => {
      BooksAPI.getAll().then((Books) => {
        console.log('after update',Books);
        this.setState({Books});
      });
    })
  }

  filterBooks(query, maxResults){

    if(query !== '') {
      BooksAPI.search(query,maxResults).then((FilteredBooks) => {
        if(FilteredBooks.error) {
          this.resetBookList();
        } else {
          console.log('filtered books',FilteredBooks);
          this.setState({FilteredBooks});
        }
      })
    } else {
      this.resetBookList();
    }

  }

  resetBookList() {
    this.setState({FilteredBooks:[]});
  }

  render() {
    return (
      <div className="app">
        <Route  path="/search" render={() => (
            <SearchBar liftValue={this.updateBook.bind(this)}
            filterBooks={this.filterBooks.bind(this)}
             books={this.state.FilteredBooks}
             resetBookList={this.resetBookList.bind(this)}
             />
          )}/>
        <Route exact path="/" render={({ history }) => (
            <BooksLists liftValue={this.updateBook.bind(this)} books={this.state.Books}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp
