'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function ProjectRedirect() {
  const params = useParams();
  const path = params.path as string;
  
  useEffect(() => {
    if (path) {
      window.location.href = `/projects/${path}/index.html`;
    }
  }, [path]);
  
  return null;
}

