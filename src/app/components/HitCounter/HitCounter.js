'use client';

import { useState } from 'react';

export default function HitCounter({ hits }) {
  const [isCensored, setIsCensored] = useState(true);

  return (
    <button
      onClick={() => setIsCensored(!isCensored)}
      className={isCensored ? 'censored' : ''}>
      {hits}
    </button>
  );
}
