import React from 'react';
import './CommentList.scss';

import { Comment } from '../../types/Comment';

import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo comment={comment} />
      ))}
    </div>
  );
};
