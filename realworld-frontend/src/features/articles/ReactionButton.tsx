import React from 'react';
import { useDispatch } from 'react-redux';

import { reactionAdded } from './articlesSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
};

export const ReactionButtons = ({ article }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="muted-button reaction-button"
        onClick={() =>
          dispatch(reactionAdded({ articleId: article.id, reaction: name }))
        }
      >
        {emoji} {article.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};
