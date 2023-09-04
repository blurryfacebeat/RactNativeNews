import { StatusBar } from 'expo-status-bar';
import { type FC } from 'react';
import { View } from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { NativeRouter } from 'react-router-native';

import Post from './src/ui/kit/molecules/Post/Post';

const App: FC = () => {
  return (
    <NativeRouter>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <SafeAreaView>
          <View>
            <Post
              imageUrl="https://sun1-91.userapi.com/7TDiRbphFY5cyPjTlm6NYcgQpMHZJuamIvDydg/358kcmXO2Zo.jpg"
              createdAt="21/09/23"
              title="Best Girl Ever"
            />

            <StatusBar style="auto" />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </NativeRouter>
  );
};

export default App;
