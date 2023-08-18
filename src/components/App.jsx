import { Component } from 'react';
import { Layout } from './Layout';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  handleClick = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  countTotalFeedback = () => {
    console.log("1");
  };

  countPositiveFeedbackPercentage = () => {
        console.log('2');
  };

  render() {

    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <Layout>
        <Section title="PLease leave feedback">
          <FeedbackOptions
            options={this.countTotalFeedback}
            onLeaveFeedback={this.countPositiveFeedbackPercentage}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </Layout>
    );
  }
}
