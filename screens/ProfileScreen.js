import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require('../assets/profile-pic.jpeg')} // Assuming you have the profile picture file in your assets folder
          style={styles.profileImage}
        />
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.value}>NDOBA Hakim</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>ndobahakim5@gmail.com</Text>
      </View>
      {/* Add more profile information as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    fontSize: 16,
  },
});

export default ProfileScreen;
