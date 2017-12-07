import React from 'react';

function ShowQuestions(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div >
      <label>
            This is Question 2
            <input type="radio" name="ques2" value="male" /> Male<br/>
            <input type="radio" name="ques2" value="female"/> Female<br/>
            <input type="radio" name="ques2" value="other"/> Other
          </label>
           <br />
          <label>
            This is Question 3
            <input type="radio" name="ques3" value="male" /> Male<br/>
            <input type="radio" name="ques3" value="female"/> Female<br/>
            <input type="radio" name="ques3" value="other"/> Other
          </label>
           <br />!
    </div>
  );
}

export default ShowQuestions;