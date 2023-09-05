import { type FC } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Post from '../../ui/kit/molecules/Post/Post';

const HomePage: FC = () => {
  return (
    <SafeAreaView>
      <View>
        <Post
          imageUrl="https://sun1-91.userapi.com/7TDiRbphFY5cyPjTlm6NYcgQpMHZJuamIvDydg/358kcmXO2Zo.jpg"
          createdAt="21/09/23"
          title="Best Girl Ever"
        />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
