import React, { Component } from 'react';
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faInfo } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export default class Book extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.bookChange=this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);
    }

    initialState={
        id:'',title: '', author: '',
            coverPhotoUrl: '', isbnNumber: '',
            price: '', language: ''
    };

    componentDidMount(){
        const bookId= +this.props.match.params.id;
        if(bookId){
            this.findBookById(bookId);        }
    }

    findBookById = (bookId) => {
        axios.get("http://localhost:8080/rest/books/"+bookId)
        .then(response => {
            if(response.data != null){
                this.setState({
                    id:response.data.id,
                    title:response.data.title,
                    author:response.data.author,
                    coverPhotoUrl:response.data.coverPhotoUrl,
                    isbnNumber:response.data.isbnNumber,
                    price:response.data.price,
                    language:response.data.language
                })
            }
        });
    }

    submitBook(event) {
        alert(this.state.title);
        event.preventDefault();
    }

    bookChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    bookList =()=>{
        this.props.history.push("/list");
    };

    render() {
        return (
            <Card className="border border-dark bg-dark text-white">
                <Card.Header><FontAwesomeIcon icon={faInfo} />  Book Info</Card.Header>

                <Form onSubmit={this.submitBook} id="bookFormId">
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control readOnly 
                                    type="text" name="title"
                                    value={this.state.title}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Book Title" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Author</Form.Label>
                                <Form.Control readOnly
                                    type="text" name="author"
                                    value={this.state.author}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Book Author" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Cover Photo URL</Form.Label>
                                <Form.Control readOnly
                                    type="text" name="coverPhotoUrl"
                                    value={this.state.coverPhotoUrl}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Book Cover Photo URL" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>ISBN Number</Form.Label>
                                <Form.Control readOnly
                                    type="text" name="isbnNumber"
                                    value={this.state.isbnNumber}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Book ISBN Number" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Price</Form.Label>
                                <Form.Control readOnly
                                    type="text" name="price"
                                    value={this.state.price}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Book Price" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Language</Form.Label>
                                <Form.Control readOnly
                                    type="text" name="language"
                                    value={this.state.language}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Book Language" />
                            </Form.Group>
                        </Form.Row>


                    </Card.Body>
                    <Card.Footer style={{ "textAlign": "right" }}>
                        <Button size="sm" variant="info" type="button" onClick={this.bookList.bind()}>
                        <FontAwesomeIcon icon={faList} /> Book List
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        );
    }
}
