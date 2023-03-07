import React from 'react';
import {View, StyleSheet, Animated, Button} from 'react-native';
import {useFade} from '../hooks/useFade';

export const FadeScreen = () => {
  const {fadeIn, fadeOut, opacity} = useFade();

  return (
    <View style={style.fadeContainer}>
      <Animated.View
        style={{
          ...style.fadeContainerChildren,
          opacity: opacity,
        }}
      />
      <Button title="Fade in" onPress={() => fadeIn()} />
      <Button title="Fade out" onPress={fadeOut} />
    </View>
  );
};

const style = StyleSheet.create({
  fadeContainer: {
    flex: 1,
    backgroundColor: '#A1A1A1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fadeContainerChildren: {
    backgroundColor: '#084F6A',
    width: 150,
    height: 150,
    borderColor: '#FFFFFF',
    borderWidth: 10,
    marginBottom: 10,
  },
});
