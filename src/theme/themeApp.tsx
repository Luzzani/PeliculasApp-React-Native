import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImageContainer: {
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  cardImageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  cardImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {fontSize: 20, fontWeight: 'bold'},
  subTitle: {fontSize: 16, opacity: 0.8},
});

export const cardMovie = StyleSheet.create({
  imageContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
    borderRadius: 18,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
