'use client';

import type { ReactNode } from "react";

type Props = {
  i: number;
  children: ReactNode;
}

export default function Comment({ i, children }: Props) {
  const handleClick = function() {
    console.log(`comment ${i}`);
  };

  return (
    <article>
      <button onClick={handleClick}>log</button>
      {children}
    </article>
  )
}
