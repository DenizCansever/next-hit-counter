'use client';

import { useState } from 'react';

export default function Censored({ children }) {
  const [isCensored, setIsCensored] = useState(true);

  return (
    <button
      onClick={() => setIsCensored(!isCensored)}
      className={isCensored ? 'censored' : ''}>
      {children}
    </button>
  );
}
