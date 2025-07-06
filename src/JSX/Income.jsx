import React, { useState } from 'react';
import '../CSS/Income.css';
import IncomeCard from '../JSX/Incomecard';
import IncomePiechart from '../JSX/IncomePiechart';
import { FaTrash } from 'react-icons/fa';

const Income = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newAmount, setNewAmount] = useState('');

  const handleAddIncome = () => {
    if (!newTitle || !newDate || !newAmount) {
      alert('Please fill all fields');
      return;
    }

    const newEntry = {
      title: newTitle,
      date: newDate,
      amount: parseInt(newAmount),
    };

    setIncomeData([...incomeData, newEntry]);

    setNewTitle('');
    setNewDate('');
    setNewAmount('');
  };

  const handleDelete = (indexToDelete) => {
    const updated = incomeData.filter((_, i) => i !== indexToDelete);
    setIncomeData(updated);
  };

  return (
    <div className="income-container">
      <IncomeCard />

      <div className="income-controls">
        <input
          type="text"
          placeholder="Income Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="input-title"
        />
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          className="date-input"
        />
        <input
          type="number"
          placeholder="Amount"
          value={newAmount}
          onChange={(e) => setNewAmount(e.target.value)}
          className="amount-input"
        />
        <button className="add-btn" onClick={handleAddIncome}>
          Add Income +
        </button>
      </div>

      <div className="charts-layout">
        <div className="income-entries">
          {incomeData.length > 0 &&
            incomeData.map((item, index) => (
              <div key={index} className="income-entry">
                <span className="entry-title">{item.title}</span>
                <span className="entry-date">
                  {new Date(item.date).toLocaleDateString()}
                </span>
                <span className="entry-amount">₹{item.amount}</span>
                <span
                  className="entry-more"
                  onClick={() => handleDelete(index)}
                  style={{ cursor: 'pointer', color: 'red' }}
                >
                  <FaTrash />
                </span>
              </div>
            ))}
        </div>

        <div className="piechart-section">
          <IncomePiechart data={incomeData} />

          <div className="savings-goal">
            <h3>Savings Goal Progress</h3>
            <p>Saved ₹55000 / ₹60000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income;
