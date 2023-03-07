import React from 'react';
import {View, Image} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {cardMovie} from '../theme/themeApp';
import {useNavigation} from '@react-navigation/core';
import {TouchableOpacity} from 'react-native';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const CardMovie = ({movie, height = 420, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', movie)}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}
      activeOpacity={0.8}>
      <View style={cardMovie.imageContainer}>
        <Image source={{uri}} style={cardMovie.image} />
      </View>
    </TouchableOpacity>
  );
};
