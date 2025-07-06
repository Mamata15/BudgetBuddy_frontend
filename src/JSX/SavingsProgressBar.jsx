import React from 'react';
import '../JSX/SavingsProgressBar'; // Don't forget the CSS import

const SavingsProgressBar = ({ totalIncome, totalExpenses, savingsGoal }) => {
  const currentSavings = totalIncome - totalExpenses;
  const percentageAchieved = Math.min((currentSavings / savingsGoal) * 100, 100);

  return (
    <div className="goal-progress">
      <h3 className="progress-title">Savings Goal Progress</h3>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentageAchieved}%` }}
        ></div>
      </div>
      <p className="progress-text">Saved ₹{currentSavings} / ₹{savingsGoal}</p>
    </div>
  );
};

export default SavingsProgressBar;
