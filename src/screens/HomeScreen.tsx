import React, {useContext, useEffect} from 'react';
import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import {CardMovie} from '../components/CardMovie';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {useMovies} from '../hooks/useMovies';
import {styles} from '../theme/themeApp';
import {GradientBackground} from '../components/GradientBackground';
import {getImageColors} from '../helpers/getCardColors';
import {GradientContext} from '../context/GradientContext';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();
  const {top} = useSafeAreaInsets();
  const {setMainColors} = useContext(GradientContext);

  const getCardColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);

    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getCardColors(0);
    }
  }, [nowPlaying]);

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {isLoading ? (
            <ActivityIndicator color={'red'} size={45} style={styles.spinner} />
          ) : (
            //Carousel principal
            <View style={{height: 440}}>
              <Carousel
                data={nowPlaying}
                renderItem={({item}: any) => <CardMovie movie={item} />}
                sliderWidth={windowWidth}
                itemWidth={300}
                inactiveSlideOpacity={0.85}
                onSnapToItem={index => getCardColors(index)}
              />
            </View>
            // <CardMovie movie={nowPlaying[1]} />
          )}
          {/*Peliculas En cine*/}
          <HorizontalSlider title="En cine" movies={nowPlaying} />
          <HorizontalSlider title="Populares" movies={popular} />
          <HorizontalSlider title="Top" movies={topRated} />
          <HorizontalSlider title="Próximamente" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
