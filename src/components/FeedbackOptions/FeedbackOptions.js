import PropTypes from 'prop-types';
import React from 'react';
// import shortid from 'shortid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={e => {
            onLeaveFeedback(e.currentTarget.name);
          }}
        >
          {option}
        </button>
      ))}
    </>
  );
};

// const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <>
//       {options.map(option => (
//         <button key={option} type="button" name={option} onClick={onLeaveFeedback}>
//           {option}
//         </button>
//       ))}
//     </>
//   );
// };
FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
