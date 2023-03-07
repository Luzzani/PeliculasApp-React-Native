import React from 'react';
import {Cast} from '../interfaces/creditsInterface';
import {Text, View, Image, StyleSheet} from 'react-native';

interface Props {
  actor: Cast;
}

export const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={style.container}>
      {actor.profile_path && <Image source={{uri}} style={style.actorImage} />}
      <View style={style.actorInfo}>
        <Text style={style.actorName}>{actor.name}</Text>
        <Text style={style.actorCharacter}>{actor.character}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 5,
    marginRight: 10,
    paddingRight: 10,
    paddingVertical: 5,
  },
  actorImage: {width: 50, height: 50, borderRadius: 10},
  actorName: {fontSize: 18, fontWeight: 'bold', color: '#000000'},
  actorCharacter: {fontSize: 16, color: '#000000', opacity: 0.7},
  actorInfo: {
    marginLeft: 10,
  },
});
