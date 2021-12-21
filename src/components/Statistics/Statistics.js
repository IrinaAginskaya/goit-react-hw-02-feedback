import PropTypes from 'prop-types';
import React from 'react';

const Statistics = ({ good, neutral, bad, total, feedback }) => {
  return (
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>Positive feedback:{feedback}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  feedback: PropTypes.number,
};

export default Statistics;

// class Statistics extends React.Component {

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
//     }

//     handleIncrement = () => {
//         this.setState(prevState => {
//             return {

//             }
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <p>Please leave feedback</p>
//             <button type="button" onClick={}>Good</button>
//             <button type="button">Neutral</button>
//             <button type="button">Bad</button>
//                 </div>
//         )
//     }
// }

// export default Statistics;
