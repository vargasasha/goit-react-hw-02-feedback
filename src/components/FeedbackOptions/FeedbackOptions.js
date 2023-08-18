export const FeedbackOptions = ({ options }) => {
  return (
    <div>
      <button onClick={() => options('good')}>Good</button>
      <button onClick={() => options('neutral')}>Neutral</button>
      <button onClick={() => options('bad')}>Bad</button>
    </div>
  );
};
