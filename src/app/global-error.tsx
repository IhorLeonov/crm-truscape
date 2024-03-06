'use client';

import React from 'react';

interface GlobalErrorProps {
  error: Error;
}

export default function GlobalError({ error }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div>
          <p>Something globally went wrong. {error.message}</p>
        </div>
      </body>
    </html>
  );
}
