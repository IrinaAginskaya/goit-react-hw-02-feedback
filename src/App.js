import React, { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';
import Section from './components/Section/Section';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalCount = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  feedbackCount = () => {
    const result = this.totalCount();
    const { good } = this.state;
    const percent = (good * 100) / result;
    return Math.round(percent);
  };
  feedbackComment = e => {
    this.setState(prevState => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalCount();
    const feedback = this.feedbackCount();
    const objKey = Object.keys(this.state);
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={objKey} onLeaveFeedback={this.feedbackComment} />{' '}
        </Section>
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics good={good} neutral={neutral} bad={bad} total={total} feedback={feedback} />{' '}
          </Section>
        )}
      </div>
    );
  }
}
