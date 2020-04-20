import React, { Component } from "react";
import Post from "./Post/Post";

const posts = [
  {
    id: 1,
    title: "Lorem",
    author: "Joe",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "https://source.unsplash.com/FSF3OotdjhU/500x200",
  },
  {
    id: 2,
    title: "Lorem",
    author: "Flo",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "https://source.unsplash.com/8qLnbORosuI/500x200",
  },
  {
    id: 3,
    title: "Lorem",
    author: "Afia",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "https://source.unsplash.com/kT2X8Kv_V70/500x200",
  },
];

class App extends Component {
  state = {
    posts: posts,
  };

  removeHandler = (removeId) => {
    const oldArray = [...this.state.posts];
    oldArray.splice(removeId, 1);
    this.setState({ posts: oldArray });
  };
  render() {
    const postList = this.state.posts.map((poste, index) => {
      return (
        <Post
          key={poste.id}
          title={poste.title}
          author={poste.author}
          desc={poste.desc}
          img={poste.img}
          click={this.removeHandler.bind(this, index)}
        />
      );
    });

    return <div className="posts">{postList}</div>;
  }
}

export default App;
