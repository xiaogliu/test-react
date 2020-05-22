import React from "react";

class TwoItmsInfiniteScroll extends React.Component {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();

    this.state = {
      items: [111111, 222222],
    };

    this.index = 1;
  }

  scroll = () => {
    this.scrollRef.current.style.transitionDuration = "1s";
    this.scrollRef.current.style.transform = `translate3d(0, -${
      this.index * 50
    }px, 0)`;

    this.index += 1;

    if (this.index === 2) {
      this.index = 0;
      // this.scrollRef.current.style.transition = 'all 2';
      setTimeout(() => {
        this.setState((prevState) => {
          const child1 = prevState.items.shift();
          prevState.items.push(child1);
          return {
            items: prevState.items,
          };
        });
        this.scrollRef.current.style.transitionDuration = "0s";
        this.scrollRef.current.style.transform = `translate3d(0, 0, 0)`;
      }, 970);
    }
  };

  componentDidMount() {
    setInterval(() => {
      this.scroll();
    }, 1000);
  }

  render() {
    return (
      <div style={{ height: "50px", overflow: "hidden" }}>
        <section ref={this.scrollRef} style={{ transition: "transform 1s" }}>
          {this.state.items.map((item) => (
            <div style={{ height: "50px" }}>{item}</div>
          ))}
        </section>
      </div>
    );
  }
}

export default TwoItmsInfiniteScroll;
