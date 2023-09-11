'use client';

import { useState } from 'react';

import { loadMore } from './actions';

export default function Home() {
  const [comments, setComments] = useState<React.JSX.Element[]>([]);

  const handleClick = async function() {
    const newComment = await loadMore();
    setComments(prev => [...prev, newComment]);
  }

  return (
    <>
      <button onClick={handleClick}>load more</button>
      <h2>comments</h2>
      <ul>
        {comments.map((comment, i) => {
          return (
            <li key={i + 1}>
              {comment}
            </li>
          )
        })}
      </ul>
    </>
  )
}
