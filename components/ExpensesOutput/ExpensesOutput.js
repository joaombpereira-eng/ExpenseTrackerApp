import {View, StyleSheet} from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

export default function ExpensesOutput({expenses}) {
  return (
    <View>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
}

const styles = StyleSheet.create({});
