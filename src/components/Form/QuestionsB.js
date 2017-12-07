import React from 'react';
import ShowQuestions2 from './ShowQuestions2'

class QuestionsB extends React.Component {
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
            This is Question 4
            <input type="radio" name="ques4" value="male" /> Male<br/>
            <input type="radio" name="ques4" value="female"/> Female<br/>
            <input type="radio" name="ques4" value="other"/> Other
          </label>
        <ShowQuestions2 warn={this.state.showQuestions} />
        <button onClick={this.handleToggleClick}>
          {this.state.showQuestions ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

export default QuestionsB;