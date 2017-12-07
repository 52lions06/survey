import React from 'react';
import Greeting from './Greeting/Greeting';
import QuestionsA from './Form/QuestionsA';
import QuestionsB from './Form/QuestionsB';


class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      textArea: '',
      zipCode: '',
      login: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert(`'A name was submitted: ${this.state.value} and they want ${this.state.textArea}`);
    event.preventDefault();
    this.setState({
      login: true,
      value: '',
      textArea: ''
    })
  }

  render() {
    return (
      <div>
        <Greeting
          name={this.state.value}
          isLoggedIn={this.state.login} />
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input
              name="value"
              type="text"
              value={this.state.value}
              onChange={this.handleChange} />
          </label>
          <br />
          <label htmlFor="">
            Write a Story:
          <textarea
              name="textArea"
              value={this.state.textArea}
              onChange={this.handleChange} />
          </label>
          <QuestionsA />
          <br/>
          <QuestionsB />
           <br />
         
          <label>
            Please Enter your zip Code for the Weather:
          <input
              name="zipCode"
              type="text"
              value={this.state.zipCode}
              onChange={this.handleChange} />
          </label>
            <input type="submit" value="Submit" />
      </form>
    </div>
              );
  }
}

export default Survey;