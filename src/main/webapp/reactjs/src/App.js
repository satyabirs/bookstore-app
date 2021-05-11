import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Book from './components/Book';
import BookList from './components/BookList';
import Login from './components/Login';

function App() {

  const heading = "Welcome to Book Shop";
  const quote="Good friends, good books, and a sleepy conscience: this is the ideal life.";
  const footer="Mark Twain";
  return (
    <Router className="App">
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} className={"margin-top"}>
            <Switch>
              <Route path="/" exact component={()=><Welcome heading={heading} quote={quote} footer={footer}/>} />
              <Route path="/details/:id" exact component={Book} />
              <Route path="/list" exact component={BookList} />
              <Route path="/login" exact component={Login} />
              <Route path="/logout" exact component={Login} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
