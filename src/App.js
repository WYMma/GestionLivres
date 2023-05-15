import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Navigation, Home, Contact } from './components/Navigation';
import {Books } from './components/Books';

const App = () => {
    const [books, setBooks] = useState([]);

    const handleAddBook = (book) => {
        setBooks([...books, book]);
    };

    const handleDeleteBook = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    };

    return (
        <Router>
            <div className="container">
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route
                        path="/books"
                        element={<Books books={books} onDelete={handleDeleteBook} onAdd={handleAddBook} />}
                    />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;