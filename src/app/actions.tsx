'use server';

import Comment from "./comment";

let i = 0;

export async function loadMore() {
  i++;
  return (
    <Comment i={i}>
      <article>
        <p>new comment {i}</p>
      </article>
    </Comment>
  );
}
