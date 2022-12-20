import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ManageExpensesScreen from './screens/ManageExpensesScreen';
import AllExpensesScreen from './screens/AllExpensesScreen';
import RecentExpensesScreen from './screens/RecentExpensesScreen';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Recent Expenses"
        component={RecentExpensesScreen}
      />
      <BottomTabs.Screen name="All Expenses" component={AllExpensesScreen} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ExpensesOverview">
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} />
          <Stack.Screen
            name="ManageExpenses"
            component={ManageExpensesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
