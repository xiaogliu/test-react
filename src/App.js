import React from "react";
import "./App.css";
import UnmountTest from "./features/UnmoutTest";
import ImageGallery from "./features/ImageGallery";
import TwoItmsInfiniteScroll from "./features/TwoItmsInfiniteScroll";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [1, 2],
    };
  }

  addItem = () => {
    this.setState((prevState) => {
      prevState.items.push(prevState.items[prevState.items.length - 1] + 1);
      return {
        showFoo: !prevState.showFoo,
        items: prevState.items,
      };
    });
  };

  render() {
    console.log("app re-render");
    return (
      <div>
        {this.state.items.map((item) => (
          <UnmountTest idhahaha={item} />
        ))}
        <button onClick={this.addItem}>Add item</button>
        <ImageGallery />
        <TwoItmsInfiniteScroll />
      </div>
    );
  }
}

export default App;
