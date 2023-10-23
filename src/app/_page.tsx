'use client'

import { useState } from 'react';

type Props = {
  loadMore: () => Promise<JSX.Element>;
}

export default function _Home({ loadMore }: Props) {
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
