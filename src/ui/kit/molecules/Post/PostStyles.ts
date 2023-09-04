import styled from 'styled-components/native';

export const PostView = styled.View`
  flex-direction: row;
  padding: 15px;

  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

export const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  margin-right: 12px;

  border-radius: 12px;
  object-fit: cover;
`;

export const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

export const PostDetails = styled.View`
  justify-content: center;
`;

export const PostDate = styled.Text`
  margin-top: 2px;

  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
`;
