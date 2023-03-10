import React from 'react';

export default function QuizList(props) {
  return (
    <div>
      <select id='quiz-category' onChange={props.selectCategory}>
        <option disabled selected>
          Quiz Category
        </option>
        {props.quizOptions.map((option) => {
          return <option value={option.id}>{option.name}</option>;
        })}
      </select>
    </div>
  );
}
