import {useContext, useEffect} from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpensesContext} from '../store/expenses-context';
import {getDateMinusDays} from '../util/date';
import {fetchExpenses} from '../util/http';

export default function RecentExpensesScreen() {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      await fetchExpenses();
    }

    getExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter(expenses => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expenses.date >= date7DaysAgo && expenses.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days"
    />
  );
}
