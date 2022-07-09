import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigate } from 'react-router-native';

const CharacterItem = ({ character }) => {
  const navigate = useNavigate();

  const handlePress = () => {
    //Redireccionar al detalle de este personaje
    navigate(`/details/${character.id}`);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image
        source={{
          uri: character.image,
        }}
        style={styles.image}
      />
      <Text style={styles.name}>{character.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    width: Dimensions.get('screen').width / 2 - 16,
  },
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

export default CharacterItem;
