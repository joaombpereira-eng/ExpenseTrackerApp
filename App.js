import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import ManageExpensesScreen from './screens/ManageExpensesScreen';
import AllExpensesScreen from './screens/AllExpensesScreen';
import RecentExpensesScreen from './screens/RecentExpensesScreen';

import {GlobalStyles} from './constants/styles';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}>
      <BottomTabs.Screen
        name="Recent Expenses"
        component={RecentExpensesScreen}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => (
            <Icon name="hourglass" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="All Expenses"
        component={AllExpensesScreen}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({color, size}) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ExpensesOverview">
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ManageExpenses"
            component={ManageExpensesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
