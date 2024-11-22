import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const { postId } = useParams();
  return <h2>Post Details for Post ID: {postId}</h2>;
};

export default PostDetails;
