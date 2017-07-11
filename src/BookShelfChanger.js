import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class BookShelfChanger extends Component{

    state = {
        selected:''
    }

    handleUpdate = (e) => {
        this.props.liftValue(e.target.value);
        this.setState({
            selected: e.target.value
        })
    }


    componentDidMount() {
        this.setState({
            selected: this.props.book.shelf
        })
    }

    render() {

        const { book } = this.props;
        return (
            <div className="book-shelf-changer">
                <select onChange = {this.handleUpdate.bind(this)} value={this.state.selected}>
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