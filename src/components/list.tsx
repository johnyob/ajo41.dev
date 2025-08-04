import { ReactNode } from "react";

interface ListItemProps {
  children: ReactNode;
  className?: string;
}

function ListItem({ children, className = "" }: ListItemProps) {
  return <li className={className}>{children}</li>;
}

interface BulletListItemProps {
  children: ReactNode;
  bullet?: string;
  className?: string;
}

function BulletListItem({ children, bullet = "•", className = "" }: BulletListItemProps) {
  return (
    <li className={className}>
      {bullet} {children}
    </li>
  );
}

interface ListProps {
  children: ReactNode;
  className?: string;
}

function List({ children, className = "" }: ListProps) {
  return <ul className={`space-y-1 ${className}`}>{children}</ul>;
}

interface HorizontalListProps {
  children: ReactNode;
  className?: string;
}

function HorizontalList({ children, className = "" }: HorizontalListProps) {
  return <ul className={`flex items-center gap-6 ${className}`}>{children}</ul>;
}

interface BulletListProps {
  children: ReactNode;
  className?: string;
}

function BulletList({ children, className = "" }: BulletListProps) {
  return (
    <ul className={`space-y-1 text-sm text-grey-600 dark:text-grey-400 ${className}`}>
      {children}
    </ul>
  );
}

namespace BulletList {
  export const Item = BulletListItem;
}

namespace List {
  export const Item = ListItem;
  export const Horizontal = HorizontalList;
  export const Bullet = BulletList;
}

export default List;
