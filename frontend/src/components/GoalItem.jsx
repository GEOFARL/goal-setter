const GoalItem = ({ goal }) => {
  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString('uk-UA')}</div>
      <h2>{goal.text}</h2>
    </div>
  );
};

export default GoalItem;
