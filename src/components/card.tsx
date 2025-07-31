import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
}

function Card({ children, className = "", hover = false, rounded = "lg" }: CardProps) {
  const hoverClass = hover ? "hover:bg-grey-300 dark:hover:bg-grey-700 transition-colors" : "";
  const roundedClass = `rounded-${rounded}`;

  return (
    <div className={`bg-grey-200 dark:bg-grey-800 ${roundedClass} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}

interface BorderCardProps {
  children: ReactNode;
  className?: string;
  borderColor?: string;
}

function BorderCard({
  children,
  className = "",
  borderColor = "border-primary-500 dark:border-purple-start",
}: BorderCardProps) {
  return <div className={`border-l-2 ${borderColor} pl-6 ${className}`}>{children}</div>;
}

interface TagCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

function TagCard({ children, className = "", hover = false }: TagCardProps) {
  return (
    <Card rounded="md" hover={hover} className={className}>
      {children}
    </Card>
  );
}

interface TagLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  external?: boolean;
}

function TagLink({ children, href, className = "", external = true }: TagLinkProps) {
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <a href={href} className="inline-block" {...linkProps}>
      <Card.Tag hover className={`px-2 py-1 text-xs text-grey-700 dark:text-grey-300 ${className}`}>
        {children}
      </Card.Tag>
    </a>
  );
}

namespace TagCard {
  export const Link = TagLink;
}

namespace Card {
  export const Border = BorderCard;
  export const Tag = TagCard;
}


export default Card;
