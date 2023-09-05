import { type FC } from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import RouterProvider from './src/router/router';

const App: FC = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <RouterProvider />
    </SafeAreaProvider>
  );
};

export default App;
