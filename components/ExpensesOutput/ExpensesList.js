import {FlatList, StyleSheet, Text} from 'react-native';

export default function ExpensesList({expenses}) {
  function renderExpenseItem(itemData) {
    return <Text>{itemData.item.description}</Text>;
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
