import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Blog from "../Blog/Blog";

class New extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/posts").then((response) => {
      this.setState({ posts: response.data });
      //console.log(response);
    });
  }
  render() {
    const posts = this.state.posts.map((post) => {
      return <Blog key={post.id} title={post.title} />;
    });
    return <div>{posts}</div>;
  }
}

const Newpost = () => {
  const styles = {
    marginLeft: "47rem",
  };
  const titleStyles = {
    padding: "2rem",
    textAlign: "center",
  };
  return (
    <div>
      <h4 style={titleStyles}>Subscribe for new post</h4>
      <Form style={styles}>
        <Form.Row>
          <Form.Group>
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" />
          </Form.Group>
        </Form.Row>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
      <New />
    </div>
  );
};

export default Newpost;
