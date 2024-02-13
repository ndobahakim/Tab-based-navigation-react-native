import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Your Home Screen</Text>
      <View style={styles.quickAccess}>
        <TouchableOpacity style={[styles.quickAccessButton, styles.messagesButton]}>
          <Text style={styles.buttonText}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.quickAccessButton, styles.contactsButton]}>
          <Text style={styles.buttonText}>Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.quickAccessButton, styles.calendarButton]}>
          <Text style={styles.buttonText}>Calculator</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoCards}>
        <View style={[styles.infoCard, styles.weatherCard]}>
          <Text style={styles.cardTitle}>Weather</Text>
          <Text style={styles.cardText}>Sunny, 25°C</Text>
        </View>
        <View style={[styles.infoCard, styles.newsCard]}>
          <Text style={styles.cardTitle}>News</Text>
          <Text style={styles.cardText}>Latest headlines</Text>
        </View>
        <View style={[styles.infoCard, styles.remindersCard]}>
          <Text style={styles.cardTitle}>Reminders</Text>
          <Text style={styles.cardText}>No upcoming reminders</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  quickAccess: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  quickAccessButton: {
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  messagesButton: {
    backgroundColor: '#007bff',
  },
  contactsButton: {
    backgroundColor: '#28a745',
  },
  calendarButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  infoCard: {
    borderRadius: 8,
    padding: 20,
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherCard: {
    backgroundColor: '#ffb74d',
  },
  newsCard: {
    backgroundColor: '#64b5f6',
  },
  remindersCard: {
    backgroundColor: '#81c784',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  cardText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default HomeScreen;
