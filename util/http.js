import axios from 'axios';

export function storeExpense(expenseData) {
  axios.post(
    'https://expensetrackerapp-d60cf-default-rtdb.firebaseio.com/expenses.json',
    expenseData,
  );
}
