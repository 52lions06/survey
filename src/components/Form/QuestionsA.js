import React from 'react';
import ShowQuestions from './ShowQuestions'

class QuestionsA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showQuestions: false}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showQuestions: !prevState.showQuestions
    }));
  }
  
  render() {
    return (
      <div>
        <label>
            This is Question 1
            <input type="radio" name="ques1" value="male" /> Male<br/>
            <input type="radio" name="ques1" value="female"/> Female<br/>
            <input type="radio" name="ques1" value="other"/> Other
          </label>
        <ShowQuestions warn={this.state.showQuestions} />
        <button onClick={this.handleToggleClick}>
          {this.state.showQuestions ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

export default QuestionsA;