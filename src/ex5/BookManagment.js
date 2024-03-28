import React, { useState, useEffect } from "react";
import { API_URL } from "./constants/Constants";
import axios from 'axios';

export default function Book() {
    const [books, setbooks] = useState([]);
    const Default_BOOK = { title: '', author: '', id: -1, isbn: '' };
    const [book, setbook] = useState(Default_BOOK);
    const [view, setview] = useState('list');

    useEffect(() => {
        loadBooks();
    }, []);

    function loadBooks() {
        axios.get(API_URL + 'books')
            .then(response => {
                setbooks(response.data);


            })

    };
   function create(){
    setview(`form`); 
    setbook(Default_BOOK);

   }

    function submitBook() {
        const url = book.id == -1 ? `${API_URL}books` : `${API_URL}books\\${book.id}`;
        axios.post(url, book)
            .then(response => {
                loadBooks();
                setview('list');
            })

    };
    function deleteBook(id) {
        axios.delete(`${API_URL}books\\${id}`)
            .then(response => {
                loadBooks();
            })
    };
    function edit(b){
        setbook(b);
        setview('list')
    }
    function handleInput(e) {
        const { name, value } = e.target;

        setbook({ ...book, [name]: value });
    }

    function bookForm() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1>BookForm</h1>
                        <input
                            type='text' name='title' placeholder="title" className="form-control mb-3"
                            onInput={e => handleInput(e)} value={book.title}
                        />
                        <input
                            type='text' name='isbn' placeholder="isbn" className="form-control mb-3"
                            onInput={e => handleInput(e)} value={book.isbn}
                        />
                        <input
                            type='text' name='author' placeholder="author" className=" mb-3 form-control"
                            onInput={e => handleInput(e)} value={book.author}
                        />
                        <button className="btn btn-primary" onClick={submitBook}>
                            {book.id == -1 ? 'Create' : 'Update'}
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    function showList() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-success mb-3" onClick={() =>create() }>Create</button>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>ISBN</th>
                                    <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map(b => (
                                    <tr key={b.id}>
                                        <td>{b.id}</td>
                                        <td>{b.title}</td>
                                        <td>{b.author}</td>
                                        <td>{b.isbn}</td>
                                        <td>
                                            <button onClick={()=>edit(b)} className="btn btn-warning me-3 text-white">
                                                <i className="fa fa-pencil"  ></i>
                                            </button>
                                            <button onClick={() => deleteBook(b.id)} className="btn btn-danger text-white">
                                                <i className="fa fa-times" ></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {view == 'list' ? showList() : bookForm()}
        </>
    )
}