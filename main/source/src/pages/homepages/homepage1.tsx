import Layout from '@components/layout';
import OneColumnSidebar from '@components/posts-layout/one-column-sidebar';
import styled from 'styled-components';
import React from 'react';

const PostsListContainer = styled.div`
  margin-bottom: ${80 / 14}rem;
`;

const Homepage1 = () => {
  return (
    <Layout title="Homepage 1">
      <PostsListContainer>
        <OneColumnSidebar />
      </PostsListContainer>
     
    </Layout>
  );
};

export default Homepage1;
