import { ReactNode } from "react";

import List from "@/components/list";

interface SocialLinkProps {
  href: string;
  label: string;
  children: ReactNode;
}

function SocialLink({ href, label, children }: SocialLinkProps) {
  const isMailto = href.startsWith("mailto:");
  const linkClasses = "flex items-center justify-center w-6 h-6 text-off-black dark:text-off-white";

  return isMailto ? (
    <a href={href} aria-label={label} className={linkClasses}>
      {children}
    </a>
  ) : (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClasses}
    >
      {children}
    </a>
  );
}

interface Social {
  href: string;
  icon: ReactNode;
  label: string;
}

interface SocialsProps {
  data: Social[];
}

export default function Socials({ data }: SocialsProps) {
  return (
    <List.Horizontal>
      {data.map((social) => (
        <List.Item
          key={social.href}
          className="flex h-6 w-6 items-center justify-center text-off-black opacity-70 transition hover:opacity-100 dark:text-off-white"
        >
          <SocialLink href={social.href} label={social.label}>
            {social.icon}
          </SocialLink>
        </List.Item>
      ))}
    </List.Horizontal>
  );
}
