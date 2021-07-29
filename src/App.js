import React, { Component } from 'react';

import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  state = {
    excellent: 0,
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = options => {
    this.setState(prevState => ({ [options]: prevState[options] + 1 }));
  };

  countTotal = () => {
    const { excellent, good, neutral, bad } = this.state;
    return excellent + good + neutral + bad;
  };

  countPositiveFeedbacks = () => {
    const { excellent, good } = this.state;
    const total = this.countTotal();
    return total ? Math.round(((excellent + good) / total) * 100) : 0;
  };

  render() {
    const options = ['excellent', 'good', 'neutral', 'bad'];
    const { excellent, good, neutral, bad } = this.state;
    const total = this.countTotal();
    const positiveFeedbacks = this.countPositiveFeedbacks();

    return (
      <>
        <h1>Feedback widget</h1>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            excellent={excellent}
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedbacks={positiveFeedbacks}
          />
        </Section>
      </>
    );
  }
}
export default App;
