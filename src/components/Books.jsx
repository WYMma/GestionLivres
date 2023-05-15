import React, {useState} from "react";

const Book = ({ id, title, description, image, onDelete }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const truncatedDescription = description.slice(0, 50) + '...';

    return (
        <div className="book">
            <h2>{title}</h2>
            <p><i className="fa fa-hashtag" aria-hidden="true"></i>{id}</p>
            <p
                className={`description ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <i className="fa fa-align-justify" aria-hidden="true"> </i>{isHovered ? description : truncatedDescription}
            </p>
            <img src={image} alt={title} style={{ width: '200px' }} />
            <button onClick={() => onDelete(id)} className="btn btn-danger">
                <i className="fa fa-trash-o" aria-hidden="true"></i> Supprimer
            </button>
        </div>
    );
};
const BookList = ({ books, onDelete }) => {
    return (
        <div className="book-list">
            {books.map((book) => (
                <Book
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    description={book.description}
                    image={book.image}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};
const AddBookForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {
            id: Date.now(),
            title,
            description,
            image,
        };
        onAdd(newBook);
        setTitle('');
        setDescription('');
        setImage('');
    };

    return (
        <form onSubmit={handleSubmit} className="my-4">
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Titre"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="form-group">
        <textarea
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        ></textarea>
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                <i className="fa fa-book" aria-hidden="true"></i> Ajouter Livre
            </button>
        </form>
    );
};
const Books = ({ books, onDelete, onAdd }) => {
    return (
        <div className="container">
            <br/>
            <h1>Livres</h1>
            <br/>
            <AddBookForm onAdd={onAdd} />
            <BookList books={books} onDelete={onDelete}/>
        </div>
    );
};

export { Book, BookList, AddBookForm, Books };