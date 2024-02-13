import React from 'react';
import { View } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <TouchableOpacity style={styles.card}>
        <Ionicons name="ios-analytics-outline" size={30} color="#007bff" />
        <Text style={styles.cardText}>Analytics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Ionicons name="ios-calendar-outline" size={30} color="#007bff" />
        <Text style={styles.cardText}>Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Ionicons name="ios-chatbox-outline" size={30} color="#007bff" />
        <Text style={styles.cardText}>Messages</Text>
      </TouchableOpacity>
    </View>
  );
};

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
});

export default DashboardScreen;
