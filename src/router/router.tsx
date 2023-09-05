import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { type FC } from 'react';

import HomePage from '../pages/HomePage/HomePage';

export const router = {
  homepage: 'Home',
};

const { Navigator, Screen } = createNativeStackNavigator();

const RouterProvider: FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name={router.homepage} component={HomePage} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RouterProvider;
