import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

class Tambah extends React.Component {
  state = {

    todos: [],

    testPost: {
      "idTiket": "692931f7-21f6-4fcc-8cdf-51ebccd4d8ee",
      "judulTiket": "Ella nii",
      "idPic": { "idPic": "692931f7-21f6-4fcc-8cdf-51ebccd4d8ee" },
      "level": "standart",
      "status": "open",
      "detailTiket": [{
        "pengirim": "Agen",
        "penerima": "Pic",
        "pesan": "test",
        "idgambar": ""
      }]
    }
  }
  handleSubmit = event => {
    event.preventDefault();
    return fetch("http://192.168.43.70:8080/tiket/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.testPost)
    })
      .then(response => {
        console.log(response);
      })
  }
  render() {
    return (
      <div>
        <Form className="Login" onSubmit={this.handleSubmit}>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Judul Tiket</Form.Label>
            <Form.Control type="email" placeholder="Masukkan judul" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Isi Pesan</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Level</Form.Label>
            <Form.Control as="select">
              <option>Pilih ..</option>
              <option>Urgent</option>
              <option>Standard</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
</Button>
        </Form>
      </div>
    );
  }

}
export default Tambah;