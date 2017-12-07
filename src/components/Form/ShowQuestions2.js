import React from 'react';

function ShowQuestions2(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div >
      <label>
            This is Question 5
            <input type="radio" name="ques5" value="male" /> Male<br/>
            <input type="radio" name="ques5" value="female"/> Female<br/>
            <input type="radio" name="ques5" value="other"/> Other
          </label>
           <br />
          <label>
            This is Question 6
            <input type="radio" name="ques6" value="male" /> Male<br/>
            <input type="radio" name="ques6" value="female"/> Female<br/>
            <input type="radio" name="ques6" value="other"/> Other
          </label>
           <br />
    </div>
  );
}

export default ShowQuestions2;