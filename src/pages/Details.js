import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-native';

import { useDispatch, useSelector } from 'react-redux';
import { getCharacter } from '../data/slice/characterSlice';

const Details = () => {
  const dispatch = useDispatch();

  const character = useSelector((state) => state.character.selected);

  const { characterId } = useParams();

  useEffect(() => {
    dispatch(getCharacter(characterId));
  }, [characterId]);

  return (
    <View>
      <Header />
      {!character && <ActivityIndicator size="large" style={{ margin: 32 }} />}
      {character && (
        <View>
          <Text>{character.name}</Text>
          <Image
            source={{
              uri: character.image,
            }}
            style={styles.image}
          />
          <Text>Status: {character.name}</Text>
          <Text>Species: {character.species}</Text>
          <Text>Gender: {character.gender}</Text>
          <Text>Origin: {character.origin.name}</Text>
          <Text>Location: {character.location.name}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  name: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    margin: 8,
  },
  image: {
    width: 160,
    height: 160,
  },
});

export default Details;
