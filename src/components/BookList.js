import React, { Component } from 'react';

class BookList extends Component {
    render() { 
        return ( 
            <div className='book-list'>
                <ul>
                    <li>The way of Kings</li>
                    <li>Secret Garden</li>
                    <li>The final empire</li>
                </ul>
            </div>
         );
    }
}
 
export default BookList;