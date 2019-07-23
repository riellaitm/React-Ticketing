import React from 'react';
import { Form, Button, FormControl}  from 'react-bootstrap';
function loginn() {
    return (
        <Form className="Login">
          <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control 
          type="username" 
          placeholder="Enter username"
         />
         
        </Form.Group>
      
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Password" 
         />
        </Form.Group>
        <Button variant="primary" type="submit" a href="/Home">
          Submit
        </Button>
       
      </Form>
    );
  }

  
  export default loginn;