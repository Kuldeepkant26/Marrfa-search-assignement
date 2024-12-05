import React, { useContext, useEffect, useState } from 'react'
import '../Css/home.css'
import { MyContext } from '../Context/Myprovider'
import BookCard from './BookCard'

function Home() {
    const [query, setQuery] = useState('')
    const [books, setBooks] = useState([])
    const { bookData } = useContext(MyContext)

    useEffect(() => {
        setBooks(bookData)
    }, [bookData])

    useEffect(() => {
        setBooks(
            bookData.filter((book) =>
                book.title.toLowerCase().includes(query.toLowerCase()) || book.category.toLowerCase().includes(query.toLowerCase())
            )
        )
    }, [query, bookData])

    return (
        <>
            <p className='m-auto w-fit text-gray-500 mb-2 (for eg- fiction self help)'>Search books by name, author or category Eg- horror </p>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search books here"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button>
                    <i
                        className="ri-close-large-fill clear"
                        style={{ display: query.length ? 'block' : 'none' }}
                        onClick={() => setQuery('')}
                    ></i>
                    <i className="ri-search-line"></i>
                </button>
            </div>
            <p className='m-auto w-fit text-gray-500 mb-2 mt-3 '>Set filters</p>
            <div className="filters w-full mt-1">
                <button onClick={() => setQuery('mystery')}>Mystery</button>
                <button onClick={() => setQuery('non-fiction')}>Non-fiction</button>
                <button onClick={() => setQuery('sci-fi')}>Sci-fi</button>
                <button onClick={() => setQuery('')}>All</button>
            </div>
            <div className="display-books">
                {books.length ? (
                    books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))
                ) : (
                    <p>No books found.</p> // Handle empty search results
                )}
            </div>
        </>
    )
}

export default Home
