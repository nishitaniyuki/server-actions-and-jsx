'use server';

let i = 0;

export async function loadMore() {
  i++;
  return (
    <article>
      <p>new comment {i}</p>
    </article>
  );
}
