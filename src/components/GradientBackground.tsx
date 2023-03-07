import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ChildrenProps} from '../interfaces/childrenInterface';
import {GradientContext} from '../context/GradientContext';
import {useFade} from '../hooks/useFade';

export const GradientBackground = ({children}: ChildrenProps) => {
  const {colors, prevColors, setPrevMainColors} = useContext(GradientContext);
  const {opacity, fadeIn, fadeOut} = useFade();
  useEffect(() => {
    fadeIn(() => {
      setPrevMainColors(colors);
      fadeOut();
    });
  }, [colors]);

  return (
    <View style={styles.gradientContainer}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary]}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.6, y: 0.6}}
        end={{x: 0.7, y: 0.7}}
      />
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity: opacity,
        }}>
        <LinearGradient
          colors={[colors.primary, colors.secondary]}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.6, y: 0.6}}
          end={{x: 0.7, y: 0.7}}
        />
      </Animated.View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
});
