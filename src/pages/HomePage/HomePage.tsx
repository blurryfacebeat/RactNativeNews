import { type FC } from 'react';
import { View } from 'react-native';

import Post from '../../ui/kit/molecules/Post/Post';

const HomePage: FC = () => {
  return (
    <View>
      <Post
        imageUrl="https://sun1-91.userapi.com/7TDiRbphFY5cyPjTlm6NYcgQpMHZJuamIvDydg/358kcmXO2Zo.jpg"
        createdAt="21/09/23"
        title="Best Girl Ever"
      />
    </View>
  );
};

export default HomePage;
