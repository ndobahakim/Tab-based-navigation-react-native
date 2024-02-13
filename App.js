import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; // Import necessary components
import 'react-native-gesture-handler';





// Import screens
import HomeScreens from './screens/HomeScreens';
import CalculatorScreens from './screens/CalculatorScreens';
import ContactsScreens from './screens/ContactsScreens';
import ProfileScreen from './screens/ProfileScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Define the components for each tab screen
const HomeTabScreen = () => <HomeScreens />;
const CalculatorTabScreen = () => <CalculatorScreens />;
const ContactsTabScreen = () => <ContactsScreens />;

// Define the DashboardScreen with the updated code
const DashboardScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Dashboard</Text>
    <TouchableOpacity style={styles.card}>
      <Ionicons name="analytics-outline" size={30} color="#007bff" />
      <Text style={styles.cardText}>Analytics</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
      <Ionicons name="calendar-outline" size={30} color="#007bff" />
      <Text style={styles.cardText}>Calendar</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
      <Ionicons name="chatbox-outline" size={30} color="#007bff" />
      <Text style={styles.cardText}>Messages</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>View More</Text>
    </TouchableOpacity>
  </View>
);

// Define styles for the DashboardScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    marginLeft: 20,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

// Define the TabNavigation component
const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeTabScreen} 
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? 'home' : 'home-outline'} 
              size={size} 
              color={color} 
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Calculator" 
        component={CalculatorTabScreen} 
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? 'calculator' : 'calculator-outline'} 
              size={size} 
              color={color} 
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Contacts" 
        component={ContactsTabScreen} 
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? 'people' : 'people-outline'} 
              size={size} 
              color={color} 
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Define the DrawerNavigation component
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="HumbergerTab" component={TabNavigation} />
      <Drawer.Screen name="Home" component={HomeScreens} />
      <Drawer.Screen name="Calculator" component={CalculatorScreens} />
      <Drawer.Screen name="Contacts" component={ContactsScreens} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

// Define the main App component
const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

import { AppRegistry } from 'react-native';
import RootApp from './App'; // Assuming your root component is in App.js
AppRegistry.registerComponent('MyApp', () => RootApp);


export default App;
