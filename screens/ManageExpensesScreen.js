import {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';

export default function ManageExpensesScreen({route, navigation}) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>Manage Expenses Screen</Text>
    </View>
  );
}
