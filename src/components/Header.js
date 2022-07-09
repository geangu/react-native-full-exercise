import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-native';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <View style={styles.container}>
      {location.pathname !== '/' && (
        <TouchableOpacity onPress={handleBack} style={styles.back}>
          <Text> z </Text>
        </TouchableOpacity>
      )}
      <Text style={styles.text}>Rick & Morty</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#cccccc',
    flexDirection: 'row',
  },
  text: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '600',
  },
  back: {
    paddingRight: 16,
  },
});

export default Header;
