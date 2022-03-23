import Layout from '@components/layout';
import PostListMasonryThreeColumn from '@components/posts-layout/masonry-three-column';
import styled from 'styled-components';

const PostsListContainer = styled.div`
  margin-bottom: ${80 / 14}rem;
`;

const Home = () => {
  return (
    <Layout title="Homepage 1">
      <PostsListContainer>
        <PostListMasonryThreeColumn />
      </PostsListContainer>
    </Layout>
  );
};

export default Home;
