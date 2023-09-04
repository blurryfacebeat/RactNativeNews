import { type FC } from 'react';

import {
  PostDate,
  PostDetails,
  PostImage,
  PostTitle,
  PostView,
} from './PostStyles';

type TProps = {
  title: string;
  imageUrl: string;
  createdAt: string;
};

const Post: FC<TProps> = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: imageUrl,
        }}
      />

      <PostDetails>
        <PostTitle>{title}</PostTitle>

        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>
  );
};

export default Post;
