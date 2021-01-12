import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const total_income = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((sum, item) => {
      return sum += item.amount
    }, 0)
    .toFixed(2);
  
    const total_expenses = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((sum, item) => {
      return sum += item.amount
    }, 0) * -1
    .toFixed(2);

  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${total_income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${total_expenses}</p>
        </div>
      </div>
    </div>
  )
}
