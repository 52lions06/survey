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
            Click here for super heros
          </label>
          <br/>
        <ShowQuestions show={this.state.showQuestions} />
        <button onClick={this.handleToggleClick}>
          {this.state.showQuestions ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

export default QuestionsA;