import React from "react";

class UnmountTest extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.idhahaha !== this.props.idhahaha) {
      return true;
    }

    return false;
  }

  componentDidMount() {
    console.log(this.props.idhahaha, "===mount===");
  }

  render() {
    console.log(this.props.idhahaha, "===render====");
    return <div>child {this.props.idhahaha}</div>;
  }
}

export default UnmountTest;
