import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export default function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className={`pb-12 pt-24 ${className}`}>
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">{children}</div>
    </div>
  );
}
