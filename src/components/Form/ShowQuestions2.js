import React from 'react';

function ShowQuestions2(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div >
      <label>
            What is your favorite thing to programming language? 
            <input type="radio" name="ques5" value="ReactJS" /> ReactJS<br/>
            <input type="radio" name="ques5" value="female"/> NodeJS<br/>
            <input type="radio" name="ques5" value="other"/> Java
          </label>
           <br />
          <label>
            What is your favorite food?
            <input type="radio" name="ques6" value="pizza" /> pizza<br/>
            <input type="radio" name="ques6" value="cheeseburgers"/> cheeseburgers<br/>
            <input type="radio" name="ques6" value="spaghetti"/> spaghetti
          </label>
           <br />
    </div>
  );
}

export default ShowQuestions2;