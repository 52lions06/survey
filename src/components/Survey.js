import React from 'react';
import QuestionsA from './Form/QuestionsA';
import QuestionsB from './Form/QuestionsB';
import ZipCode from './ZipCode';
import './Survey.css'

/**
 * Create a form using React
 * then need conditional rendering to decide what set of questions will show
 * then need to access my Api -- which I do have access to
 * need to input data (zip code) to access specific information in the API
 * need to keep a tally of every answer made 
 * show a results page at the end of the questions
 * need to slide NEXT and PREVIOUS between questions
 */

//Questions I need to map through
const myQuestions = [
    {
      question: "Who is the strongest?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    }
  ];

class Survey extends React.Component {
  constructor(props) {
    super(props);
// State where all of the values are held that should change 
    this.state = {
      value: '',
      textArea: '',
      zipCode: '',
      login: false
    };
// methods bound so they can be used later 
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
// When the value is being changed it will update be what every specific target is being used
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
// When the form is submitted then there will be an alert and all values will be cleared 
  handleSubmit =  (event) => {
    alert(`'A name was submitted: ${this.state.value} and they want ${this.state.textArea}`);
    event.preventDefault();
    this.setState({
      login: true,
      value: '',
      textArea: ''
    })
  }

  render() {

const questions = myQuestions.map((questions, index) => {
  return(<li key={index}>
      {questions.question}
      <input type="radio" value={questions.answers}/>
  </li>)
})

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form">
          <label >
            Name:
          <input
              className="name"
              name="value"
              type="text"
              value={this.state.value}
              onChange={this.handleChange} />
          </label>
          <br />
          <label >
            Write a Story:
          <textarea
              className="textArea"
              name="textArea"
              value={this.state.textArea}
              onChange={this.handleChange} />
          </label>
          <br/>
          <br/>
          <QuestionsA />
          <br/>
          <QuestionsB />
           <br />
         {/*{questions}*/}
          {/*<label>
            Please Enter your zip Code for the Weather:
          {/*<input
              name="zipCode"
              type="text"
              value={this.state.zipCode}
              onChange={this.handleChange} />
          </label>*/}
          
          <ZipCode  >
            <input type="text" name="zipCode" onChange={this.handleChange}/>
          </ZipCode>
            <input type="submit" value="Submit" />
      </form>
    </div>
              );
  }
}

export default Survey;