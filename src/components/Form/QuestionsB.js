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
            Click Below to tell me about yourself?
          </label>
        <ShowQuestions2 show={this.state.showQuestions} />
        <button onClick={this.handleToggleClick}>
          {this.state.showQuestions ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

export default QuestionsB;