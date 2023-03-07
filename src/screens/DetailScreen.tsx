import React from 'react';
import {
  View,
  Image,
  Dimensions,
  ScrollView,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import {RootStackParams} from '../navigation/Navigation';
import {styles} from '../theme/themeApp';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {MovieDetails} from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {cast, isLoading, movieFull} = useMovieDetails(movie.id);

  console.log(isLoading);

  return (
    <ScrollView>
      <View>
        <View
          style={{...styles.cardImageContainer, height: screenHeight * 0.7}}>
          <View style={styles.cardImageBorder}>
            <Image source={{uri}} style={styles.cardImage} />
          </View>
        </View>
        <View style={styles.marginContainer}>
          <Text style={styles.subTitle}>{movie.original_title}</Text>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.title}>{movie.id}</Text>
        </View>
      </View>
      {isLoading ? (
        <ActivityIndicator color={'red'} size={45} style={styles.spinner} />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}
      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={{position: 'absolute', left: 10, top: 10}}>
        <Icon name="arrow-back-outline" color={'#F5F5F5'} size={50} />
      </TouchableOpacity>
    </ScrollView>
  );
};
