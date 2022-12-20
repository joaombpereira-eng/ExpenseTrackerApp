import {FlatList, StyleSheet, Text} from 'react-native';
import ExpenseItem from './ExpenseItem';

export default function ExpensesList({expenses}) {
  function renderExpenseItem(itemData) {
    return <ExpenseItem {...itemData.item} />;
  }

  return (
    <FlatList
      data={expenses}
      keyExtractor={item => item.id}
      renderItem={renderExpenseItem}
    />
  );
}

const styles = StyleSheet.create({});
