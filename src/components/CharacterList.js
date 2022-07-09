import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import CharacterItem from './CharacterItem';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCharacters } from '../data/slice/characterSlice';

const CharacterList = () => {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.character.list);

  useEffect(() => {
    dispatch(getAllCharacters());
  }, []);

  return (
    <View>
      <Text>Lista de personajes</Text>

      <FlatList
        data={list}
        numColumns={2}
        renderItem={({ item }) => <CharacterItem character={item} />}
      />
    </View>
  );
};

export default CharacterList;
