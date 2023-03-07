import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Navigation} from './src/navigation/Navigation';
import {GradientProvider} from './src/context/GradientContext';
import {ChildrenProps} from './src/interfaces/childrenInterface';
// import {FadeScreen} from './src/screens/FadeScreen';

const AppState = ({children}: ChildrenProps) => {
  return <GradientProvider>{children}</GradientProvider>;
};

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
        {/* <FadeScreen /> */}
      </AppState>
    </NavigationContainer>
  );
};
