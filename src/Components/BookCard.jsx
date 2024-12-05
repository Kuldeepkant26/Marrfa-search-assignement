import React from 'react'

import { Link } from 'react-router-dom'
import '../Css/BookCard.css'
function BookCard({ book }) {
    return (
        <div className='card'>
            <div className="top">
                <p className="text-gray-700"> {book.rating} ⭐</p>
                <p className='title'>{book.title}</p>
            </div>
            <div className="bottom">
                <div className="left">
                    <i className="ri-book-open-line"></i>
                    <p>{book.category}</p>
                </div>
                <div className=''> </div>
            </div>
        </div>

    )
}

export default BookCard
