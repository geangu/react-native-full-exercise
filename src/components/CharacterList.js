import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import CharacterItem from './CharacterItem';

const CharacterList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('https://rickandmortyapi.com/api/character?limit=100', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results?.length);
        setList(data.results);
      })
      .catch((error) => console.log('error', error));
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
