"use client";

import { ReactNode, useState, useEffect } from "react";
import { useMedia } from "react-use";

interface MediaQueryProps {
  children: ReactNode;
  query: string;
  fallback?: ReactNode;
}

export default function MediaQuery({ children, query, fallback = null }: MediaQueryProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const matches = useMedia(query, true);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // During SSR and before hydration, show fallback to avoid mismatch
  if (!isHydrated) {
    return <>{fallback}</>;
  }

  return matches ? <>{children}</> : <>{fallback}</>;
}
