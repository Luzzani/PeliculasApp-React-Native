import React from 'react';
import {FlatList, Text, View} from 'react-native';
import currencyFormatter from 'currency-formatter';

import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import {CastItem} from './CastItem';
import {HorizontalSlider} from './HorizontalSlider';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name={'star-outline'} size={16} color="grey" />
          <Text>{movieFull.vote_average.toFixed(1)}</Text>
          <Text style={{marginLeft: 5}}>
            {movieFull.genres
              .map(genre => {
                return genre.name;
              })
              .join(', ')}
          </Text>
        </View>

        {/* Historia */}
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            color: '#000000',
            fontWeight: 'bold',
          }}>
          Historia
        </Text>
        <Text style={{fontSize: 16, color: '#000000'}}>
          {movieFull.overview}
        </Text>

        {/* Presupuesto */}
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text
            style={{
              fontSize: 18,
              marginRight: 10,
            }}>
            Presupuesto
          </Text>
          <Text style={{fontSize: 16, color: '#000000'}}>
            {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
          </Text>
        </View>

        {/* Casting*/}
        <View style={{marginTop: 10, marginBottom: 50}}>
          <Text
            style={{
              fontSize: 20,
              marginTop: 10,
              color: '#000000',
              fontWeight: 'bold',
            }}>
            Actores
          </Text>
          <FlatList
            data={cast}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <CastItem actor={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 10, height: 70}}
          />
        </View>
      </View>
    </>
  );
};
