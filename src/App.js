import React from "react";
import "./App.css";
import Form from "react-jsonschema-form";

const mySchema = {
  title: "My Form",
  description: "My Form",
  type: "object",
  required: ["name"],
  properties: {
    name: {
      type: "string",
      title: "Name"
    }
  }
};

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ formData }, e) {
    if (e.preventDefault) {
      // This check is needed because the Braintree event doesn't have "preventDefault"
      e.preventDefault();
    }

    console.log(formData, 29999);
    console.log(formData, e);
  }

  render() {
    return (
      <Form
        schema={mySchema}
        onClick={e => this.handleSubmit({ formData: {} }, e)}
      />
    );
  }
}

function ListItem(props) {
  const listItems = props.numbers.map(item => <li key={item}>{item}</li>);

  return <ul>{listItems}</ul>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      date1: 0,
      date2: 0
    };
    this.timerId = null;
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  changeState = () => {
    console.log(this, 1111);
    this.setState({
      date1: this.state.date1 + 1
    });
    this.setState(preState => {
      return {
        date2: preState.date2 + 1
      };
    });
  };

  divClick = () => {
    console.log(333);
  };

  testThis(a, b, e) {
    e.stopPropagation();
    console.log(a, b, e, 2222);
  }

  render() {
    return (
      <div style={{ border: "1px solid red" }} onClick={this.divClick}>
        <p> date1: {this.state.date1} </p>
        <p> date2: {this.state.date2} </p>

        <button onClick={this.changeState}>click me</button>
        <button onClick={this.testThis.bind(this, 1, 3)}>test this</button>
        <button onClick={e => this.testThis(1, 3, e)}>test this3333</button>
        <div>{this.state.date.toUTCString()}</div>
        <ListItem numbers={[1, 2, 3]} />
        <ListItem numbers={[4, 5, 6, 7]} />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Clock />
      </header>
      <p> 这里时 form </p>
      <MyForm />
    </div>
  );
}

export default App;
