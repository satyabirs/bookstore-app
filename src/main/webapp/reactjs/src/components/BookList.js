import React, { Component } from 'react';
import { Card, Table, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faInfo } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        this.findAllBooks();
    }

    findAllBooks() {
        axios.get("http://localhost:8080/rest/books/")
            .then(response => response.data)
            .then((data) => {
                this.setState({ books: data });
            });
    }

    render() {
        return (
            <Card className="border border-dark bg-dark text-white">
                <Card.Header><FontAwesomeIcon icon={faList} /> Book List</Card.Header>
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Language</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.books.length === 0 ?
                                <tr align="center">
                                    <td colSpan="6">No Books Available.</td>
                                </tr> :
                                this.state.books.map((book) => (
                                    <tr key={book.id}>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.language}</td>
                                        <td>
                                            <ButtonGroup>
                                                <Link to={"details/" + book.id} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faInfo} /></Link>{' '}
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Card.Body>

            </Card>
        );
    }
}

