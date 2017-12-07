import React from 'react';

function ShowQuestions(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div >
      <label>
            Who is the best superhero of them all?
            <input type="radio" name="ques2" value="batman" /> batman<br/>
            <input type="radio" name="ques2" value="superman"/> superman<br/>
            <input type="radio" name="ques2" value="the hulk"/> the hulk
          </label>
           <br />
          <label>
            What would you like to do?
            <input type="radio" name="ques3" value="eat" /> eat<br/>
            <input type="radio" name="ques3" value="code"/> code<br/>
            <input type="radio" name="ques3" value="video games"/> video games
          </label>
           <br />!
    </div>
  );
}

export default ShowQuestions;