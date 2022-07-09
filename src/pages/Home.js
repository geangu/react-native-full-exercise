import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'react-router-native';
import Header from '../components/Header';
import CharacterList from '../components/CharacterList';

const Home = () => {
  return (
    <View>
      <Header />
      <Link to={'/details'}>
        <Text>Detail</Text>
      </Link>
      <CharacterList />
    </View>
  );
};

export default Home;
