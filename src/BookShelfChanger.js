import React, { Component } from 'react'

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

        return (
            <div className="book-shelf-changer">
                <select onChange={this.handleUpdate.bind(this)} value={this.state.selected}>
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