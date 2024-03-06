'use client';

import React from 'react';

interface ErrorComponentProps {
  error: Error;
}

export default function ErrorComponent({ error }: ErrorComponentProps) {
  return <div>{`Error inside slot sales. ${error.message}`}</div>;
}
