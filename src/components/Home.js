import React from 'react';
import {Table, Button} from 'react-bootstrap';
import Tambah from './Tambah';
class Home extends React.Component {
    state = {
        todos: []
      }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         todos: []
    //     }
    // }
           componentDidMount() {
        fetch('http://192.168.43.70:8080/tiket')
            .then(res => res.json())
            .then((data) => {
                this.setState({ todos: data });
            });
    }
    render() {
        console.log(this.state.todos);
        
        return (
            
            <div className="Table" >
                <Button variant="info" type="submit" a href="/Tambah">Tambah Data</Button>
                <p></p>
                <Table striped bordered hover variant="dark"size="sm">
                    <thead>
                        <tr>
                            <th> Judul </th>
                            <th> Level </th>
                            <th> Status </th>
                            <th> Email Pic</th>
                            <th> Action </th>

                        </tr>
                    </thead>
                    {this.state.todos.map((todo) =>(
                  
                  <tbody>
                       <td>{todo.judulTiket}</td>
                       <td>{todo.level}</td>
                        <td>{todo.status}</td>
                        <td>{todo.idPic.email}</td>
                        <td><Button variant="success">Edit</Button> <Button variant="danger">Hapus</Button></td>
                  </tbody>
              ))}
                </Table>
             
            </div>
        );
       
     }
   
    }

export default Home;