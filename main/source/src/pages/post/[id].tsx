
import { handleGetPostDetail } from '@store/thunk/post';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppState } from '@store';
import { PostCoverType } from '@store/slices/posts';
import PostDetailSliderSidebar from './post-slider-sidebar';
import PostDetailStandardSidebar from './post-standard-sidebar';

const PostDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const id = Number(router.query.id);

  const { data } = useSelector((state: AppState) => state.posts.detail);

  useEffect(() => {
    dispatch(handleGetPostDetail(id));
  }, []);

  switch (data?.type) {
    case PostCoverType.SLIDE:
      return <PostDetailSliderSidebar useAsComponent />;
    case PostCoverType.SPLIT:
      return <PostDetailSliderSidebar useAsComponent />;
    default:
      return <PostDetailStandardSidebar useAsComponent />;
  }
};

export default PostDetail;
